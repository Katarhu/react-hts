import {Link} from 'react-router-dom';
import {memo} from "react";

import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import {useActions} from "../../hooks/useAction";

import {useAppSelector} from "../../hooks/redux";
import {selectAuthLoading, selectIsAuth, selectUser} from '../../store/user/user.selectors';

import getLoader from '../../common/Loader/utils/getLoader';
import {UserLoadingType} from '../../store/user/user.types';

import ROUTES from "../../contants/routes";

import './Header.css';


function Header() {

    const {logoutThunkAction} = useActions();

    const authLoading = useAppSelector(selectAuthLoading);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectUser);
    const greetings = user?.name ? `Hello, ${user.name}` : user?.role ? `Hello, ${user.role}` : 'Hello'

    const handleLogOut = () => {
        logoutThunkAction();
    }

    const getContent = (isAuth: boolean) => {
        if( !isAuth ) return;

        return (
            <>
                <div className='header-name'>{greetings}</div>
                <div className='header-button'>
                    <Button onClick={handleLogOut} buttonText={'Logout'} small={true} />
                </div>
            </>
        )
    }

    const loader = getLoader(authLoading, UserLoadingType.LOADING_USER);
    const headerLinkTo = isAuth ? ROUTES.COURSES : ROUTES.LOGIN;
    const content = getContent(isAuth);

    return (
        <header className='header'>
            {loader}
            <div className='header-logo'>
                <Link to={headerLinkTo}>
                    <Logo />
                </Link>
            </div>
            {content}
        </header>
  )
}

export default memo(Header);
