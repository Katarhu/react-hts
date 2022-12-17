import {useEffect, useState} from 'react';

import { ICourse } from '../../models/course';
import { mockedCoursesList } from '../../constants/constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';

import {useDispatch} from 'react-redux';
import {getCourses} from '../../store/courses/courses.action.creators';
import {useAppSelector} from '../../hooks/redux';
import {selectCourses} from '../../store/courses/courses.selectors';


function Courses() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const courses = useAppSelector(selectCourses);

  useEffect(() => {
    if( !courses.length ) {
      dispatch(getCourses());
    }
  }, []);

  const commitFilterChanges = (filter: string) => {
    setFilter(filter.trim().toLowerCase());
  }

  const getCourseItems = (courses: ICourse[]) => {
    if (courses.length === 0) return <div>There is no courses yet</div>

    return courses.map((course) => {
      const courseTitle = course.title.trim().toLowerCase();
      const courseId = course.id.trim().toLowerCase();

      return (courseTitle.includes(filter) || courseId.includes(filter))
        ? <CourseCard key={course.id} {...course}/>
        : null
    }
    )
  }

  const courseItems = getCourseItems(courses);

  return (
        <div className='courses'>
          <SearchBar onSearch={commitFilterChanges} />
          {courseItems}
        </div>
  );
}

export default Courses;
