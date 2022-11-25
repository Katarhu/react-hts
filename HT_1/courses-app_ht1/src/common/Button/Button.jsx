import './Button.css';
import './../styles/variables.css';

function Button({ buttonText, onClick = () => {}, size = 's' }) {
	return (
		<button
			className={`button-primary button-primary_${size}`}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
}

export default Button;
