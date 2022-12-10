import {useEffect, useState} from 'react';

export interface IValidatorKeys {
    maxLength?: number;
    minLength?: number;
    email?: boolean;
    required?: boolean;
}

export function useValidation(value: string | number, validators: IValidatorKeys) {
    const [maxLengthError, setMaxlengthError] = useState(false);
    const [minLengthError, setMinlengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [requiredError, setRequiredError] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        for (let key in validators) {
            switch (key) {
                case 'maxLength':
                    const maxNumber = validators[key] ?? Number.MAX_SAFE_INTEGER;
                    maxNumber > value.toString().length ? setMaxlengthError(true) : setMaxlengthError(false)
                    break
                case 'minLength':
                    const minNumber = validators[key] ?? 0;
                    minNumber > value.toString().length ? setMinlengthError(true) : setMinlengthError(false)
                    break;
                case 'email':
                    const regexp = /^\S+@\S+\.\S+$/;
                    regexp.test(value.toString()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'required':
                    value.toString().length ? setRequiredError(false) : setRequiredError(true);
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if( maxLengthError || minLengthError || emailError || requiredError ) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }

    }, [maxLengthError, minLengthError, emailError, requiredError]);

    return {
        maxLengthError,
        minLengthError,
        emailError,
        requiredError,
        isValid
    }
}