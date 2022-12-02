import './Input.css';

function Input({ labelText = '', placeholderText = '', onChange, type = 'text', value }) {

	const getLabel = (labelText) => {
		if (labelText == null || labelText === '') return <></>;

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
