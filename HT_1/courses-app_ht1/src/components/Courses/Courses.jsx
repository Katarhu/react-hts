import {useState} from "react";

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from "../../constants/constants";

import './Courses.css';

function Courses() {

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
			{items}
		</div>
	);
}

export default Courses;
