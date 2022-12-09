import './SearchBar.css';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

interface SearchBarProps {
  onSearch: (filter: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const inputChange = (event: ChangeEvent) => {
    setInput((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === '') {
      searchEvent('');
    }
  };

  const searchEvent = (filter: string) => {
    onSearch(filter);
  };

  const addNewCourse = () => {
    navigate('/courses/add');
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
