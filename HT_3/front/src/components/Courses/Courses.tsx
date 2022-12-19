import {useEffect, useState} from 'react';

import {useAlert} from '../../context/AlertContext';


import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';


import {useActions} from '../../hooks/useAction';

import {useAppSelector} from '../../hooks/redux';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesLoading,
  selectFilteredCourses
} from '../../store/courses/courses.selectors';

import { ICourse } from '../../models/course';

import getLoader from '../../common/Loader/utils/getLoader';
import {CoursesLoadingType} from '../../store/courses/courses.types';

import './Courses.css';


function Courses() {
  const {getCourses, clearCoursesError} = useActions();
  const {addAlert} = useAlert();

  const courses = useAppSelector(selectFilteredCourses);
  const loading = useAppSelector(selectCoursesLoading);
  const error = useAppSelector(selectCoursesError);

  useEffect(() => {
    if( !courses.length ) {
      getCourses();
    }
  }, []);

  useEffect(() => {
    if( error ) {
      addAlert(error);
      clearCoursesError();
    }
  }, [error]);

  const getFilteredCourseItems = (courses: ICourse[]) => {
    if (courses.length === 0) return <div>There is no courses</div>

    return courses.map((course) =>
        <CourseCard key={course.id} {...course}/>
    );
  }

  const loader = getLoader(loading, CoursesLoadingType.LOADING_COURSES);
  const courseItems = getFilteredCourseItems(courses);

  return (
        <div className='courses'>
          <SearchBar />
          <div className='courses-items'>
            {loader}
            {courseItems}
          </div>
        </div>
  );
}

export default Courses;
