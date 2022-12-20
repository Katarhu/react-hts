import {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {useAlert} from "./context/AlertContext";

import {useAppSelector} from './hooks/redux';
import {selectAuthLoading, selectIsAuth, selectUserRole} from './store/user/user.selectors';
import {UserLoadingType} from './store/user/user.types';

import {useActions} from "./hooks/useAction";

import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import {FlexContainer} from './components/Container/Container';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import getAlertItems from './components/Alert/utils/getAlerts';
import getLoader from './common/Loader/utils/getLoader';

import './App.css';


function App() {

    const {getAlerts, removeAlert} = useAlert();
    const {getUserThunkAction, getCoursesThunkAction, getAuthorsThunkAction} = useActions();
    const alerts = getAlerts();

    const isAuth = useAppSelector(selectIsAuth);
    const authLoading = useAppSelector(selectAuthLoading);
    const userRole = useAppSelector(selectUserRole);

    useEffect(() => {
        getUserThunkAction();
    }, []);

    useEffect(() => {
        if( isAuth ) {
            getUserThunkAction();
            getCoursesThunkAction();
            getAuthorsThunkAction();
        }
    }, [isAuth]);

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
