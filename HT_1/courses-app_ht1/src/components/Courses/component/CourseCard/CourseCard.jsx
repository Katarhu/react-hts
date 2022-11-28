import Button from '../../../../common/Button/Button';

import { mockedAuthorsList } from '../../../../constants/constants';

import './CourseCard.css';
import { formatDate } from '../../../../helpers/formatDate';
import { formatDuration } from '../../../../helpers/formatDuration';

function CourseCard({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) {
	const showCourse = () => {};

	const getCourseAuthors = (authorIds) => {
		if (!authors.length) {
			return <div>No authors</div>;
		}

		return authors.map((authorId, index) => {
			const author = mockedAuthorsList.find((author) => author.id === authorId);

			if (!author) return '';

			if (index === authorIds.length - 1) return author.name;
			return author.name + ', ';
		});
	};

	const courseAuthors = getCourseAuthors(authors);
	const courseDate = formatDate(creationDate);
	const courseDuration = formatDuration(duration);

	return (
		<div className='course'>
			<div className='course-text'>
				<h3 className='course-title'>{title}</h3>
				<p className='course-content'>{description}</p>
			</div>
			<div className='course-side'>
				<div className='course-info'>
					<ul className='course-list'>
						<li className='course-list-item course-list-authors'>
							<strong>Authors: </strong>
							{courseAuthors}
						</li>
						<li className='course-list-item'>
							<strong>Duration: </strong>
							{courseDuration} hours
						</li>
						<li className='course-list-item'>
							<strong>Created: </strong>
							{courseDate}
						</li>
					</ul>
				</div>
				<div className='course-button'>
					<Button
						onClick={showCourse}
						buttonText={'Show Course'}
						medium={true}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
