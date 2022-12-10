import {ChangeEvent, useState} from 'react';
import {IValidatorKeys, useValidation} from './useValidation';


export function useInput(initialValue: string | number, validators: IValidatorKeys = {}) {
    const [value, setValue] = useState(initialValue);
    const [touched, setIsTouched] = useState(false);
    const validationResults = useValidation(value, validators);

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched(true);
    }

    const onChange = (e: ChangeEvent) => {
        setValue((e.target as HTMLInputElement).value);
    }

    return {
        value,
        onBlur,
        onChange,
        touched,
        ...validationResults
    }
}