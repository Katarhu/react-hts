import './SearchBar.css';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { ChangeEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (filter: string) => void;
  handleOpen: () => void;
}

function SearchBar({ onSearch, handleOpen }: SearchBarProps) {
  const [input, setInput] = useState('');

  const inputChange = (event: ChangeEvent) => {
      setInput((event.target as HTMLInputElement).value);

      if((event.target as HTMLInputElement).value === '') {
          searchEvent('');
      }
  };

  const searchEvent = (filter: string) => {
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
