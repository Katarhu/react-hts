import './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

function Header() {
	const name = 'Dave';

	return (
		<div className='header'>
			<div className='header-logo'>
				<Logo />
			</div>

			<div>{name}</div>

			<Button buttonText={'Logout'} size={'s'} />
		</div>
	);
}

export default Header;
