import {useNavigate} from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import {useAppSelector} from '../../../../hooks/redux';
import {selectAuthors} from '../../../../store/authors/authors.selectors';

import {useActions} from '../../../../hooks/useAction';

import { ICourse } from '../../../../models/course';
import {IAuthor} from '../../../../models/author';

import { formatDate } from '../../../../utils/format/formatDate';
import { formatDuration } from '../../../../utils/format/formatDuration';

import './CourseCard.css'

function CourseCard({ id, title, description, creationDate, duration, authors }: ICourse) {

  const availableAuthors = useAppSelector(selectAuthors);
  const navigate = useNavigate();
  const {deleteCourse} = useActions();

  const showCourse = () => {
    navigate(`/courses/${id}`);
  }

  const handleRemoveCourse = () => {
    deleteCourse(id);
  }

  const handleUpdateCourse = () => {
  }

  const getCourseAuthors = (authors: IAuthor[], courseAuthors: string[]) => {
    if ( !authors.length || !courseAuthors.length ) {
      return <div>No authors</div>
    }

    return courseAuthors.map((courseAuthorId, index) => {
      const author = authors.find((author) => author.id === courseAuthorId);

      if (author == null) return '';

      if (index === courseAuthors.length - 1) return author.name;
      return author.name + ', ';
    })
  }

  const courseAuthors = getCourseAuthors(availableAuthors, authors);
  const courseDate = formatDate(creationDate);
  const courseDuration = formatDuration(duration);

  return (
      <div className='course'>
        <div className='course-text'>
          <h3 className='course-title'>{title}</h3>
          <p className='course-content'>{description}</p>
        </div>
        <div className='course-side'>
          <div className='course-details'>
            <ul className='course-list'>
              <li className='course-list-item course-list-authors'><strong>Authors: </strong>
                {courseAuthors}
              </li>
              <li className='course-list-item'><strong>Duration: </strong>{courseDuration} hours</li>
              <li className='course-list-item'><strong>Created: </strong>{courseDate}</li>
            </ul>
          </div>
          <div className='course-buttons'>
            <Button onClick={showCourse} buttonText={'Show Course'}/>
            <Button onClick={handleUpdateCourse}>&#9998;</Button>
            <Button onClick={handleRemoveCourse}>&#128465;</Button>
          </div>
        </div>
      </div>
  );
}

export default CourseCard;
