import './CourseInfo.css';

import {mockedCoursesList, mockedAuthorsList} from '../../constants/constants';
import {Link, useParams} from 'react-router-dom';
import {formatDuration} from '../../utils/formatDuration';
import {formatDate} from '../../utils/formatDate';
import {ICourse} from '../../models/course';

function CourseInfo() {

    const params = useParams();
    console.log(mockedCoursesList);
    const course = mockedCoursesList.find((course) => {
        console.log(course.id);
        console.log(params.id);
        console.log(course.id === params.id);
        return course.id === params.id;
    });

    console.log(params);

    const getCourseAuthors = (authors: string[]) => {
        if( !authors.length ) return <div>There is no authors</div>

        return authors.map((authorId) => {
            const author = mockedAuthorsList.find((author) => author.id === authorId);

            if( !author ) return <div>Unknown</div>

            return <div key={author.id} className='course-info-author'>{author.name}</div>
        })
    }

    if ( !course ) {
        return (
            <>
                <Link to={'/courses'}>&#x2190; Back to courses</Link>
                <div className='course-info-error'>Course not found</div>
            </>
        )
    }

    const courseDuration = formatDuration(course.duration);
    const courseDate = formatDate(course.creationDate);
    const courseAuthors = getCourseAuthors(course.authors);

    return (
        <div className='course-info'>
            <div className='course-info-link'>
                <Link to={'/courses'}>&#x2190; Back to courses</Link>
            </div>
            <h2 className='course-info-title'>
                {course.title}
            </h2>

            <div className='course-info-container'>
                <div className='course-info-description'>
                    <p className='course-info-description-text'>
                        {course.description}
                    </p>
                </div>
                <div className='course-info-details'>
                    <ul className='course-info-list'>
                        <li className='course-info-list-item'>
                            <strong>ID:</strong> {course.id}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Duration:</strong> {courseDuration}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Created:</strong> {courseDate}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Authors:</strong>
                            <div className='course-info-authors'>
                                {courseAuthors}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;
