import './Button.css';
import {memo} from 'react';

interface ButtonProps {
  buttonText?: string
  onClick?: () => void
  small?: boolean,
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: any;
}


function Button({ buttonText, onClick, small = false, type='button', children, disabled }: ButtonProps) {
  return (
    <button
        data-testid="common-button"
        className={`button ${small ? 'small' : ''}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
      {children ?? buttonText}
    </button>
  )
}

export default memo(Button)
