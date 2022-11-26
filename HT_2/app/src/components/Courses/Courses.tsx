import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';

import { mockedCoursesList } from '../../constants/constants';
import {ICourse} from '../../models/course';
import SearchBar from './components/SearchBar/SearchBar';

function Courses() {

    const getCourses = (courses: ICourse[]) => {
        if( !courses.length ) return <div>There is no courses yet</div>

        return courses.map((course) =>
            <CourseCard key={course.id} {...course}/>
        )
    }

    const courses = getCourses(mockedCoursesList);

    return (
        <div className='courses'>
            <SearchBar />
            {courses}
        </div>
    );
}

export default Courses;