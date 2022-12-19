import {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {useAlert} from "./context/AlertContext";

import {useDispatch} from "react-redux";

import {useAppDispatch, useAppSelector} from './hooks/redux';
import { selectAuthLoading, selectIsAuth } from './store/user/user.selectors';
import {UserLoadingType} from './store/user/user.types';

import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { FlexContainer } from './components/Container/Container';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import getAlertItems from './components/Alert/utils/getAlerts';
import getLoader from './common/Loader/utils/getLoader';

import './App.css';

import {getUserThunkAction} from './store/user/user.thunk';
import {AppDispatch} from './store';
import {getUser} from './services/user.service';
import {getUserAction} from './store/user/user.action.creators';
import {getCoursesThunkAction} from './store/courses/courses.thunk';
import {getAuthorsThunkAction} from './store/authors/authors.thunk';



function App() {

    const {getAlerts, removeAlert} = useAlert();
    const dispatch = useAppDispatch();
    const alerts = getAlerts();

    const isAuth = useAppSelector(selectIsAuth);
    const authLoading = useAppSelector(selectAuthLoading);

    useEffect(() => {
        dispatch(getUserThunkAction());
    }, []);

    useEffect(() => {
        if( isAuth ) {
            dispatch(getCoursesThunkAction());
            dispatch(getAuthorsThunkAction());
        }
    }, [isAuth])

    const getRoutes = (isAuth: boolean) => {
        if( isAuth ) {
            return <>
                <Route path='/courses' element={<Courses />}/>
                <Route path='/courses/:id' element={<CourseInfo />}/>
                <Route path='/courses/add' element={<CreateCourse />}/>
                <Route path={'*'} element={<Navigate to={'/courses'}/>}/>
            </>
        }

        return <>
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/registration'} element={<Registration />}/>
            <Route path={'*'} element={<Navigate to={'/login'}/>}/>
        </>
    }


    const loader = getLoader(authLoading, UserLoadingType.LOADING_USER );
    const routes = getRoutes(isAuth);
    const alertItems = getAlertItems(alerts, removeAlert);

    return (
        <div className='App'>
            {alertItems}
            <FlexContainer>
                <Header />
                <main className='main'>
                    {loader}
                    <Routes>
                        {routes}
                    </Routes>
                </main>
            </FlexContainer>
        </div>
  );
}

export default App;
