import styled from 'styled-components'

interface ButtonProps {
  buttonText: string
  onClick?: () => void
  small?: boolean,
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface AppButtonProps {
  small?: boolean
}

function Button({ buttonText, onClick, small = false, type='button', disabled }: ButtonProps) {
  return (
    <AppButton small={small} onClick={onClick} type={type} disabled={disabled}>
      {buttonText}
    </AppButton>
  )
}

const AppButton = styled.button`
  font-size: ${(props: AppButtonProps) => ((props.small ?? false) ? '16px' : '20px')};
  border: 1px solid #676fbb;
  background: transparent;
  padding: 0.4em 1em;
  
  &:focus {
    box-shadow: 0 0 5px rgba(0,0,0, .54);
  }
  
  &[disabled] {
    opacity: .8;
  }
`

export default Button
