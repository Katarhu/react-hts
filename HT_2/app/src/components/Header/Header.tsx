import {Link} from 'react-router-dom';
import {memo} from "react";

import {useAuth} from '../../context/AuthContext';

import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import './Header.css';

function Header() {

    const {isAuth, handleLogOut, user} = useAuth();

    const getContent = (isAuth: boolean) => {
        if( !isAuth ) return (
            <>

            </>
        )

        return (
            <>
                <div className='header-name'>{user?.name}</div>
                <div className='header-button'>
                    <Button onClick={handleLogOut} buttonText={'Logout'} small={true} />
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

export default memo(Header);
