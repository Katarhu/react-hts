import './Input.css';
import { ChangeEvent } from 'react';
import createId from '../../utils/createId';

interface InputProps {
  labelText?: string
  placeholderText?: string
  onChange?: (event: ChangeEvent) => any;
  type?: string;
  value: string | number;
}

function Input({ labelText = '', placeholderText = '', onChange, type='text', value }: InputProps) {
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
                value={value.toString()}
                min={0}
            />
        </>
  )
}

export default Input
