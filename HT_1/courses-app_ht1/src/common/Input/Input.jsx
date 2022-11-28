import './Input.css';

function Input({ labelText = '', placeholderText = '', onChange }) {
	const getLabel = (labelText) => {
		if (!labelText) return <></>;

		return (
			<label className='label' htmlFor='input'>
				{labelText}
			</label>
		);
	};

	const label = getLabel(labelText);

	return (
		<>
			{label}
			<input
				className='input'
				id='input'
				type='text'
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</>
	);
}

export default Input;
