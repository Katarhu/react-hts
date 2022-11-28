import { useState } from 'react';

import CourseCard from './component/CourseCard/CourseCard';
import SearchBar from './component/SearchBar/SearchBar';

import { mockedCoursesList } from '../../constants/constants';

import './Courses.css';

function Courses() {
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
			{items}
		</div>
	);
}

export default Courses;
