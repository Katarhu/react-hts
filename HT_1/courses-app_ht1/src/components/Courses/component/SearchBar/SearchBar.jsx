import './SearchBar.css';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [input, setInput] = useState('');

	const inputChange = (event) => {
		setInput(event.target.value);
	};
	const searchEvent = () => {
		onSearch(input);
	};
	const addNewCourse = () => {};

	return (
		<div className='search-bar'>
			<div className='search-bar-search'>
				<Input
					placeholderText={'Enter course name...'}
					onChange={inputChange}
				/>
				<Button buttonText={'Search'} medium={true} onClick={searchEvent} />
			</div>
			<div className='search-bar-button'>
				<Button
					buttonText={'Add new course'}
					medium={true}
					onClick={addNewCourse}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
