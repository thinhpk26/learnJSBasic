function Validator(selectorForm) {
    const _this = this;
    const formElement = document.querySelector(selectorForm);
    const ruleElements = formElement.querySelectorAll('[name][rules]')
    let formRules = {};
    const validationRules = {
        isRequired(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        isEmail(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Đây ko phải là email';
        },
        isMin(min) {
            return function(value) {
                return value.length >= min ? undefined : `Nhập tối thiểu ${min} kí tự`;
            }
        },
        isCollect(value) {
            return value === formElement.querySelector('[name][rules="isRequired|isMin:8"]').value ? undefined : 'Nhập mật khẩu sai';
        }
    }
    if(selectorForm) {
        if(ruleElements) {
            // cho mảng rules có chứa rule của input 
            for(let i = 0; i < ruleElements.length; ++i) {
                let rules = ruleElements[i].getAttribute('rules').split('|')
                for(let rule of rules) {
                    let ruleValue;
                    const isRuleHasValue = rule.includes(':')
                    if(isRuleHasValue) {
                        ruleValue = rule.split(':')
                        rule = ruleValue[0];
                    }
                    let ruleFuc = validationRules[rule]
                    if(isRuleHasValue) {
                        ruleFuc = ruleFuc(ruleValue[1])
                    }
                    if(Array.isArray(formRules[ruleElements[i].name])) {
                        formRules[ruleElements[i].name].push(ruleFuc);
                    } else {
                        formRules[ruleElements[i].name] = [ruleFuc];
                    }
                }
                ruleElements[i].onblur = handleValidate
                ruleElements[i].oninput = function() {
                    const errorElement = getParent(this).querySelector('.form-message')
                    errorElement.innerText = '';
                    getParent(this).classList.remove('invalid')
                }
            }

            // thực hiện validate
            function handleValidate(event) {
                const errorElement = getParent(event.target).querySelector('.form-message')
                const rulesInput = formRules[event.target.name]
                let errorMessage;
                for(let i = 0; i < rulesInput.length; ++i) {
                    errorMessage = rulesInput[i](event.target.value);
                    if(errorMessage) break;
                }
                if(errorMessage) {
                    errorElement.innerText = errorMessage;
                    getParent(event.target).classList.add('invalid')
                } else {
                    errorElement.innerText = '';
                    getParent(event.target).classList.remove('invalid')
                }
                return !errorMessage;
            }

            // submit
            formElement.onsubmit = function(e) {
                e.preventDefault();
                let isCollect = true;
                for(let i = 0; i < ruleElements.length; ++i) {
                    isCollect = handleValidate({ target: ruleElements[i]})
                }
                if(isCollect) {
                    data = Array.from(ruleElements).reduce(function(value, input) {
                        switch(input.type) {
                            case 'file':
                                value[input.name] = input.files
                                break;
                            case 'checkbox':
                                if(!Array.isArray(value[input.name])) {
                                    value[input.name] = [];
                                }
                                if(input.matches(':checked')) {
                                    value[input.name].push(input.value)
                                }
                                break;
                            case 'radio':
                                if(input.matches(':checked')) {
                                    value[input.name] = input.value
                                }
                                break;
                            default: 
                                value[input.name] = input.value
                        }
                        return value;
                    }, {})
                    _this.onSubmit(data);
                }
            }
        }
        // submit mặc định
        else {
            formElement.submit()
        }
    }
    function getParent(ruleElement) {
        while(ruleElement.parentElement) {
            if(ruleElement.parentElement.matches('.form-group')) {
                return ruleElement.parentElement
            }
            ruleElement = ruleElement.parentElement;
        }
    }
}