import './Input.css';
import { ChangeEvent } from 'react';

interface InputProps {
  labelText?: string
  placeholderText?: string
  onChange?: (event: ChangeEvent) => any,
    type?: string;
}

function Input({ labelText = '', placeholderText = '', onChange, type='text' }: InputProps) {
  const getLabel = (labelText?: string) => {
    if (!labelText) return <></>;

    return <label className="label" htmlFor="input">{labelText}</label>
  }

  const label = getLabel(labelText);

  return (
        <>
            {label}
            <input
                className="input"
                id="input"
                type={type}
                placeholder={placeholderText}
                onChange={onChange}
            />
        </>
  )
}

export default Input
