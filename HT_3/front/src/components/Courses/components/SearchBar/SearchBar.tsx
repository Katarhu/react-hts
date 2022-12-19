import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import {useActions} from '../../../../hooks/useAction';

import {useAppSelector} from '../../../../hooks/redux';
import {selectCoursesFilter} from '../../../../store/courses/courses.selectors';

import './SearchBar.css';



function SearchBar() {
  const filter = useAppSelector(selectCoursesFilter);

  const [input, setInput] = useState(filter);

  const {changeCourseFilter} = useActions();
  const navigate = useNavigate();

  const inputChange = (event: ChangeEvent) => {
    setInput((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === '') {
      changeCourseFilter('');
    }
  };

  const onSubmit = (event: FormEvent) => {
      event.preventDefault();
      changeCourseFilter(input);
  };

  const addNewCourse = () => {
    navigate('/courses/add');
  };

  return (
        <form
            className="search-bar"
            onSubmit={onSubmit}
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
