import './CourseCard.css';
import Button from '../../../../common/Button/Button';

function CourseCard() {
	return (
		<div className='course'>
			<div className='course-text'>
				<h3 className='course-title'>Title</h3>
				<p className='course-content'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
					aspernatur ducimus facilis fugiat ipsum itaque mollitia nesciunt, non
					officia qui quo tenetur ullam unde velit veniam. Aspernatur cumque exe
					rcitationem natus. Ducimus error ratione rerum similique voluptatibus!
					Accusamus aliquam consequuntur debitis deleniti dicta dignissimos
				</p>
			</div>
			<div className='course-info'>
				<ul className='course-list'>
					<li className='course-item'>
						<span className='text-bold'>Authors: </span>
						Dave, Nikolas Dave, Nikolas Dave, Nikolas Dave, Nikolas
					</li>
					<li className='course-item'>
						<span className='text-bold'>Duration:</span> 08:00 hours
					</li>
					<li className='course-item'>
						<span className='text-bold'>Created</span> 01.02.2018
					</li>
				</ul>

				<div className='course-button'>
					<Button buttonText={'Show course'} size={'m'} />
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
