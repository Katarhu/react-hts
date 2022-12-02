import styled from 'styled-components'

function Button({ buttonText, onClick, small = false, type='button' }) {
	return (
		<AppButton small={small} onClick={onClick} type={type}>
			{buttonText}
		</AppButton>
	)
}

const AppButton = styled.button`
  font-size: ${(props) => ((props?.small ?? false) ? '16px' : '20px')};
  border: 1px solid #676fbb;
  background: transparent;
  padding: 0.4em 1em;
`

export default Button
