<<<<<<< HEAD
import { useState } from 'react';

import CourseCard from './component/CourseCard/CourseCard';
import SearchBar from './component/SearchBar/SearchBar';

import { mockedCoursesList } from '../../constants/constants';
=======
import {useState} from "react";

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from "../../constants/constants";
>>>>>>> master

import './Courses.css';

function Courses() {
<<<<<<< HEAD
	const [courses, setCourses] = useState(mockedCoursesList);
	const [filter, setFilter] = useState('');

	const getCourses = (courses) => {
		if (!courses.length) return <div>There is no courses yet</div>;

		return courses.map((course) => {
			if (
				course.title
					.trim()
					.toLowerCase()
					.startsWith(filter.trim().toLowerCase())
			) {
				return <CourseCard key={course.id} {...course} />;
			}
		});
	};

	const commitFilterChanges = (filter) => {
		setFilter(filter);
	};

	const items = getCourses(courses);

	return (
		<div className='courses'>
			<SearchBar onSearch={commitFilterChanges} />
=======

	const [courses, setCourses] = useState(mockedCoursesList);


	const getCourseItems = (courses) => {
		if( !courses.length ) {
			return <div>There is no courses yet</div>
		}

		return (
			courses.map((course) =>
				<CourseCard />
			)
		)
	}

	const items = getCourseItems(courses);

	return (
		<div className='courses'>
>>>>>>> master
			{items}
		</div>
	);
}

export default Courses;
