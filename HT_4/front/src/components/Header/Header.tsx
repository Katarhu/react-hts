import {Link} from 'react-router-dom';
import {memo} from "react";

import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import {useDispatch} from 'react-redux';
import {logoutThunkAction} from '../../store/user/user.thunk';

import {useAppSelector} from "../../hooks/redux";
import {selectAuthLoading, selectIsAuth, selectUser} from '../../store/user/user.selectors';

import getLoader from '../../common/Loader/utils/getLoader';
import {UserLoadingType} from '../../store/user/user.types';

import './Header.css';

function Header() {

    const dispatch = useDispatch();

    const authLoading = useAppSelector(selectAuthLoading);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logoutThunkAction());
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

    const loader = getLoader(authLoading, UserLoadingType.LOADING_USER);
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
