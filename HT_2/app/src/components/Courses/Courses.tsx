import { useState } from 'react';

import { ICourse } from '../../models/course';
import { mockedCoursesList } from '../../constants/constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState<ICourse[]>(mockedCoursesList);
  const [filter, setFilter] = useState('');

  const commitFilterChanges = (filter: string) => {
    setFilter(filter.trim().toLowerCase());
  }

  const getCourses = (courses: ICourse[]) => {
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

  const items = getCourses(courses);

  return (
        <div className='courses'>
          <SearchBar onSearch={commitFilterChanges} />
          {items}
        </div>
  );
}

export default Courses;
