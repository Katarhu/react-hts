import styled from 'styled-components'

interface ButtonProps {
  buttonText: string
  onClick: () => void
  medium?: boolean
}

interface AppButtonProps {
  medium?: boolean
}

function Button({ buttonText, onClick, medium = false }: ButtonProps) {
  return (
    <AppButton medium={medium} onClick={onClick}>
      {buttonText}
    </AppButton>
  )
}

const AppButton = styled.button`
  font-size: ${(props: AppButtonProps) => (props.medium ? '20px' : '16px')};
  border: 1px solid #676fbb;
  background: transparent;
  padding: 0.4em 1em;
`

export default Button
