import './Input.css';
import {ChangeEvent, HTMLInputTypeAttribute, useId} from 'react';

interface InputProps {
  labelText?: string
  placeholderText?: string
  onChange?: (event: ChangeEvent) => any
  type?: HTMLInputTypeAttribute;
  value: string | number
}

function Input({ labelText = '', placeholderText = '', onChange, type = 'text', value }: InputProps) {
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
                value={value.toString()}
                min={0}
            />
        </>
    )
}

export default Input
