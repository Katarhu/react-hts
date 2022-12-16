import {Link} from 'react-router-dom';
import {memo} from "react";

import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'
import Loader from '../../common/Loader/Loader';

import {useAppSelector} from "../../hooks/redux";
import {selectAuthIsLoading, selectIsAuth, selectUser} from '../../store/user/user.selectors';

import {useDispatch} from "react-redux";
import {logOut} from "../../store/user/user.action.creators";

import './Header.css';
import getLoader from '../../utils/getLoader';

function Header() {

    const dispatch = useDispatch();
    const isLoading = useAppSelector(selectAuthIsLoading);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut());
    }

    const getContent = (isAuth: boolean) => {
        if( !isAuth ) return;

        return (
            <>
                <div className='header-name'>{user?.name ?? 'Hello'}</div>
                <div className='header-button'>
                    <Button onClick={handleLogOut} buttonText={'Logout'} small={true} />
                </div>
            </>
        )
    }

    const loader = getLoader(isLoading);
    const content = getContent(isAuth);

    return (
        <header className='header'>
            {loader}
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
