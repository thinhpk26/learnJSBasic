function Validator(options) {
    const formElement = document.querySelector(options.form);
    let selectorRules = {};
    function getParent(inputElement) {
        while(inputElement.parentElement) {
            if(inputElement.parentElement.matches(options.formGroup)) {
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement
        }
    }

    // chạy rule
    function Validate(inputElement, rule) {
        const errorElement = getParent(inputElement).querySelector(options.formMessage)
        let errorMessage;
        const rules = selectorRules[rule.selector];
        for(let i = 0; i < selectorRules[rule.selector].length; ++i) {
            switch(inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                        , options);
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value, options);
            }
            if(errorMessage) break;
        }
        if(errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement).classList.remove('invalid')
        }

        return !errorMessage;
    }

    options.rules.forEach(function(rule) {
        const inputElement = formElement.querySelector(rule.selector)

        // Tập hợp các rule cùng 1 input 
        if(Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
        } else {
            selectorRules[rule.selector] = [rule.test]
        }

        // Xử lí các rule
        if(inputElement) {
            inputElement.onblur = function() {
                Validate(inputElement, rule)
            }

            inputElement.oninput = function() {
                const errorMessage = getParent(inputElement).querySelector(options.formMessage);
                errorMessage.innerText = ''
                getParent(inputElement).classList.remove('invalid')
            }
        }
    })
    
    // Submit
    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            let isValid = true;
            options.rules.forEach(function(rule) {
                const inputElement = formElement.querySelector(rule.selector)
                const isfalse = Validate(inputElement, rule)
                if(!isfalse) {
                    isValid = false;
                }
            })
            if(isValid) {
                const inputElements = formElement.querySelectorAll('[name]:not([disable])')
                if(typeof options.onSubmit === 'function') {
                    const data = Array.from(inputElements).reduce(function(value, input) {
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
                    options.onSubmit(data)
                }

                // ko chạy onSubmit mà muốn chạy theo mặc định
                else {
                    formElement.submit();
                }
            }
        }
    }
}


Validator.isRequired = function(selector, errorMessage) {
    return {
        selector,
        test(value, options) {
            const typeOfInput = document.querySelector(options.form).querySelector(selector).type;
            if(typeOfInput === 'radio') {
                return value ? undefined : errorMessage || 'Vui lòng nhập trường này'
            } else if(typeOfInput === 'checkbox') {
                return value ? undefined : errorMessage || 'Vui lòng nhập trường này'
            } else {
                return value.trim() ? undefined : errorMessage || 'Vui lòng nhập trường này'
            }
        }
    }
}

Validator.isEmail = function(selector, errorMessage) {
    return {
        selector,
        test(value, options) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : errorMessage ||  'Đây không phải là email'
        }
    }
}

Validator.isRequiredMinLength = function(selector, min, errorMessage) {
    return {
        selector,
        test(value, options) {
            return value.length >= min ? undefined : errorMessage ||  `Nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isCollect = function(selector, selectorPassword, errorMessage) {
    return {
        selector,
        test(value, options) {
            const password = document.querySelector(options.form).querySelector(`${selectorPassword}`).value
            return value === password ? undefined : errorMessage ||  'Nhập lại mật khẩu không chính xác'
        }
    }
} 