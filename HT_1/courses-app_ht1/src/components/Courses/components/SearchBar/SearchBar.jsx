import './SearchBar.css';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useState } from 'react';

function SearchBar({ onSearch, handleOpen }) {
	const [input, setInput] = useState('');

	const inputChange = (event) => {
		setInput(event.target.value);

		if (event.target.value === '') {
			searchEvent('');
		}
	};

	const searchEvent = (filter) => {
		onSearch(filter);
	};

	const addNewCourse = () => {
		handleOpen();
	};

	return (
		<div className="search-bar">
			<div className="search-bar-search">
				<Input placeholderText={'Enter course name or id...'} onChange={inputChange} value={input}/>
				<Button buttonText={'Search'} onClick={() => searchEvent(input)}/>
			</div>
			<div className="search-bar-button">
				<Button buttonText={'Add new course'} onClick={addNewCourse}/>
			</div>
		</div>
	);
}

export default SearchBar;
