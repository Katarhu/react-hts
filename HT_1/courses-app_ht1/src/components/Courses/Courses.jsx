import { useState } from 'react';

import { mockedCoursesList } from '../../constants/constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './Courses.css';

function Courses() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [isAddCourse, setIsAddCourse] = useState(false);
	const [filter, setFilter] = useState('');

	const commitFilterChanges = (filter) => {
		setFilter(filter.trim().toLowerCase());
	}

	const handleAddCourse = (course) => {
		mockedCoursesList.push(course);
		setCourses(() => [...mockedCoursesList]);
	}

	const handleShowAddCourse = () => {
		setIsAddCourse(true);
	}

	const handleCloseAddCourse = () => {
		setIsAddCourse(false);
	}

	const getCourses = (courses) => {
		if (courses.length === 0) return <div>There is no courses yet</div>

		return courses.map((course) => {
				const courseTitle = course.title.trim().toLowerCase();
				const courseId = course.id.trim().toLowerCase();

				return courseTitle.includes(filter) || courseId.includes(filter)
					? <CourseCard key={course.id} {...course}/>
					: <></>
			}
		)
	}

	const getContent = (isAddCourse) => {
		if (isAddCourse) {
			return <CreateCourse
				handleClose={handleCloseAddCourse}
				handleCreateCourse={handleAddCourse}
			/>
		}

		return (
			<>
				<SearchBar onSearch={commitFilterChanges} handleOpen={handleShowAddCourse} />
				{items}
			</>
		)
	}

	const items = getCourses(courses);
	const content = getContent(isAddCourse);

	return (
		<div className='courses'>
			{content}
		</div>
	);
}

export default Courses;
