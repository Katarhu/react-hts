import './Button.css';
import './../styles/variables.css';

function Button({
	buttonText,
	onClick = () => {},
	size = 's',
	type = 'button',
}) {
	return (
		<button
			className={`button-primary button-primary_${size}`}
			onClick={onClick}
			type={type}
		>
			{buttonText}
		</button>
	);
}

export default Button;
