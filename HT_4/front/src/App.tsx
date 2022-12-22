import {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {useAlert} from "./context/AlertContext";

import {useAppSelector} from './hooks/redux';
import {selectAuthLoading, selectIsAuth} from './store/user/user.selectors';
import {UserLoadingType} from './store/user/user.types';

import {useActions} from "./hooks/useAction";

import CourseForm from './components/Courses/components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import {FlexContainer} from './components/Container/Container';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";

import getAlertItems from './components/Alert/utils/getAlerts';
import getLoader from './common/Loader/utils/getLoader';

import ROUTES from './contants/routes';

import './App.css';


function App() {

    const {getUserThunkAction, getCoursesThunkAction, getAuthorsThunkAction} = useActions();
    const {getAlerts, removeAlert} = useAlert();
    const alerts = getAlerts();

    const isAuth = useAppSelector(selectIsAuth);
    const authLoading = useAppSelector(selectAuthLoading);

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


    const loader = getLoader(authLoading, UserLoadingType.LOADING_USER );
    const alertItems = getAlertItems(alerts, removeAlert);

    return (
        <div className='App'>
            {alertItems}
            <FlexContainer>
                <Header />
                <main className='main'>
                    {loader}
                    <Routes>
                        <Route path={ROUTES.COURSES} element={<PrivateRoute redirectTo={ROUTES.LOGIN}/>}>
                            <Route path={ROUTES.COURSES} element={<Courses />}/>
                        </Route>

                        <Route path={ROUTES.LOGIN} element={<PublicRoute redirectTo={ROUTES.COURSES}/>}>
                            <Route path={ROUTES.LOGIN} element={<Login />}/>
                        </Route>

                        <Route path={ROUTES.REGISTRATION} element={<PublicRoute redirectTo={ROUTES.COURSES}/>}>
                            <Route path={ROUTES.REGISTRATION} element={<Registration />}/>
                        </Route>

                        <Route path={ROUTES.ADD_COURSE} element={<AdminRoute />}>
                            <Route path={ROUTES.ADD_COURSE} element={<CourseForm formType="CREATE"/>}/>
                        </Route>

                        <Route path={ROUTES.UPDATE_COURSE} element={<AdminRoute />}>
                            <Route path={ROUTES.UPDATE_COURSE} element={<CourseForm formType="UPDATE"/>}/>
                        </Route>

                        <Route path={ROUTES.COURSE} element={<PrivateRoute redirectTo={ROUTES.COURSES}/>}>
                            <Route path={ROUTES.COURSE} element={<CourseInfo />}/>
                        </Route>

                        <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                    </Routes>
                </main>
            </FlexContainer>
        </div>
  );
}

export default App;
