import {ChangeEvent, HTMLInputTypeAttribute, useId} from 'react';

import './Input.css';

interface InputProps {
  labelText?: string;
  placeholderText?: string;
  onChange?: (event: ChangeEvent) => any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
  isTouched?: boolean;
  errors?: string[];
  type?: HTMLInputTypeAttribute;
  value: string | number;
}

function Input({
    labelText = '',
    placeholderText = '',
    onChange,
    type = 'text',
    value,
    onBlur,
    errors=[],
    isTouched=false,
}: InputProps) {
    const id = useId();

    const getLabel = (labelText?: string) => {
        if (labelText == null || labelText === '') return <></>;

        return <label className="label" htmlFor={id}>{labelText}</label>
    }

    const label = getLabel(labelText);

    return (
        <>
            {label}
            <input
                className="input"
                id={id}
                type={type}
                placeholder={placeholderText}
                onChange={onChange}
                onBlur={onBlur}
                value={value.toString()}
                min={0}
            />
        </>
    )
}

export default Input
