import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import './Header.css'
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

function Header() {

    const {isAuth, logOut} = useAuth();

    const getContent = (isAuth: boolean) => {
        if( !isAuth ) return <></>

        return (
            <>
                <div className='header-name'>Dave</div>
                <div className='header-button'>
                    <Button onClick={logOut} buttonText={'Logout'} small={true} />
                </div>
            </>
        )
    }

    const content = getContent(isAuth);

    return (
        <header className='header'>
            <div className='header-logo'>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            {content}
        </header>
  )
}

export default Header
