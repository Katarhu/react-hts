import './Button.css';

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
        className={`button ${small ? 'small' : ''}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
      {children ?? buttonText}
    </button>
  )
}

export default Button
