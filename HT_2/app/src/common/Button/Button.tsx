import styled from 'styled-components'

interface ButtonProps {
  buttonText: string
  onClick: () => void
  small?: boolean,
  type?: 'button' | 'submit' | 'reset';
}

interface AppButtonProps {
  small?: boolean
}

function Button({ buttonText, onClick, small = false, type='button' }: ButtonProps) {
  return (
    <AppButton small={small} onClick={onClick} type={type}>
      {buttonText}
    </AppButton>
  )
}

const AppButton = styled.button`
  font-size: ${(props: AppButtonProps) => ((props.small ?? false) ? '16px' : '20px')};
  border: 1px solid #676fbb;
  background: transparent;
  padding: 0.4em 1em;
`

export default Button
