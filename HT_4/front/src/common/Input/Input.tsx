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
  autoComplete?: string
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
    autoComplete
}: InputProps) {
    const id = useId();

    const getLabel = (labelText?: string) => {
        if (labelText == null || labelText === '') return <></>;

        return <label className="input-label" htmlFor={id}>{labelText}</label>
    }

    const label = getLabel(labelText);

    return (
        <div className='input-container'>
            <input
                className="input"
                id={id}
                type={type}
                placeholder={' '}
                onChange={onChange}
                onBlur={onBlur}
                value={value.toString()}
                min={0}
                autoComplete={autoComplete}
            />
            {label}
        </div>
    )
}

export default Input
