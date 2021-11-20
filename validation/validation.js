function Validator(options) {

    function getParent(inputElement, selector) {
        while(inputElement.parentElement) {
            if(inputElement.parentElement.matches(selector)) {
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement;
        }
    }

    let selectorRules = {};
    // Hàm thực hiện Validate
    function validate(inputElement, rule) {
        const errorElement = getParent(inputElement, options.formGroup).querySelector(options.formMessage)
        let errorMessage;
        const rules = selectorRules[rule.selector]

        for(let i = 0; i < rules.length; ++i) {
            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    , options)
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value, options)
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            getParent(inputElement, options.formGroup).classList.add('invalid')
            errorElement.innerText = errorMessage
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroup).classList.remove('invalid')
        }

        return !errorMessage;
    }
    
    // Xử lí submit
    const formElement = document.querySelector(options.form)
    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            let formInvalid = true;
            options.rules.forEach(function(rule) {
                const inputElement = formElement.querySelector(rule.selector);
                const isValid = validate(inputElement, rule);
                if(!isValid) {
                    formInvalid = false;
                }
            })
            if(formInvalid) {
                // submit với js
                const enableValue = formElement.querySelectorAll('[name]:not([disable])')
                if(typeof options.onSubmit == 'function') {
                    const data = Array.from(enableValue).reduce(function(value, input) {
                        switch(input.type) {
                            case 'file':
                                value[input.name] = input.files;
                                break;
                            case 'checkbox':
                                if(!Array.isArray(value[input.name])) {
                                    value[input.name] = []
                                }
                                if(input.matches(':checked'))
                                value[input.name].push(input.value)
                                break;
                            case 'radio':
                                if(input.matches(':checked')) {
                                    value[input.name] = input.value;
                                }
                                break;
                            default:
                                value[input.name] = input.value;
                        }

                        return value;
                    }, {})
                    options.onSubmit(data)
                }
                // submit với hành động mặc định    
                else {
                    formElement.submit()
                }
            }
        }

        // Xử lí các input
        options.rules.forEach(function(rule) {
            const inputElements = formElement.querySelectorAll(rule.selector);
            // lưu lại các rule
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            //  Xử lí hoạt động
            inputElements.forEach(function(inputElement) {
                if(inputElement) {
                    inputElement.onblur = function() {
                        validate(inputElement, rule)
                    }
                    inputElement.oninput = function() {
                        const errorElement = getParent(inputElement, options.formGroup).querySelector(options.formMessage)
                        errorElement.innerText = ''
                        getParent(inputElement, options.formGroup).classList.remove('invalid')
                    }
                }
            })
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector,
        test(value, options) {
            const typeOfInput = document.querySelector(options.form).querySelector(selector).type
            if(typeOfInput === 'radio') {
                return value ? undefined : message|| 'Vui lòng nhập giới tính của bạn';
            } else if(typeOfInput === 'checkbox') {
                return value ? undefined : message|| 'Vui lòng nhập giới tính của bạn';
            } else {
                return value.trim() ? undefined : message|| 'Vui lòng nhập trường này';
            }
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector,
        test(value, options) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message|| 'Đây không phải là email'
        }
    }
}

Validator.isMinLength = function(selector, min, message) {
    return {
        selector,
        test(value, options) {
            return value.length >= min ? undefined : message|| `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isRetypeCollect = function(selector, password, message) {
    return {
        selector,
        test(value, options) {
            return value === password() ? undefined : message|| 'Giá trị nhập vào không chính xác';
        }
    }
}