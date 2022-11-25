import Button from '../../../../common/Button/Button';

import './CourseCard.css'

function CourseCard() {

    const showCourse = () => {}

    const course = {
        name: 'Java',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet inventore ipsum reiciendis rerum saepe soluta. Facere ipsam ipsum odio quia quidem tempora. Commodi, consequuntur eum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet inventore ipsum reiciendis rerum saepe soluta. Facere ',
        authors: ['Dave Simmonds', 'Nikolas Le-Mark'],
        duration: '160',
        created: '01.02.2018'
    }

    return (
        <div className='course'>
            <div className='course-text'>
                <h3 className='course-title'>{course.name}</h3>
                <p className='course-content'>{course.content}</p>
            </div>
            <div className='course-side'>
                <div className='course-info'>
                    <ul className='course-list'>
                        <li className='course-list-item'><strong>Authors: </strong>
                            {course.authors.length ?
                                course.authors.map((author, index) =>
                                    index === (course.authors.length - 1) ? author : author + ', ')
                                :
                                'No authors'
                            }
                        </li>
                        <li className='course-list-item'><strong>Duration: </strong>{course.duration}</li>
                        <li className='course-list-item'><strong>Created: </strong>{course.created}</li>
                    </ul>
                </div>
                <div className='course-button'>
                    <Button onClick={showCourse} buttonText={'Show Course'} medium={true}/>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;