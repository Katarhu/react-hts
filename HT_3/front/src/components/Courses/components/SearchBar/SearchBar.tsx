import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './SearchBar.css';


interface SearchBarProps {
  onSearch: (filter: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const inputChange = (event: ChangeEvent) => {
    setInput((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === '') {
      onSearch('');
    }
  };

  const searchEvent = (event: FormEvent) => {
      event.preventDefault();
      onSearch(input);
  };

  const addNewCourse = () => {
    navigate('/courses/add');
  };

  return (
        <form
            className="search-bar"
            onSubmit={searchEvent}
        >
            <div className="search-bar-search">
                <div className='search-bar-search-input'>
                    <Input placeholderText={'Enter course name or id...'} onChange={inputChange} value={input}/>
                </div>
                <div className='search-bar-search-button'>
                    <Button buttonText={'Search'} type='submit'/>
                </div>
            </div>
            <div className="search-bar-button">
                <Button buttonText={'Add new course'} onClick={addNewCourse}/>
            </div>
        </form>
  );
}
export default SearchBar;
