import {Navigate, Route, Routes} from 'react-router-dom';

import {useAlert} from "./context/AlertContext";
import {useAuth} from './context/AuthContext';

import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { FlexContainer } from './components/Container/Container';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import {Alert} from "./components/Alert/Alert";

import {IAlert} from "./models/alert";

import './App.css';


function App() {
    const { isAuth } = useAuth();
    const {getAlerts, removeAlert} = useAlert();
    const alerts = getAlerts();

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

    const getAlertItems = (alerts: IAlert[]) => {
        if( !alerts.length ) return null;

        return (
            <div className='alerts'>
                {alerts.map((alert) => (
                    <Alert
                        key={alert.id}
                        onAnimationEnd={() => removeAlert(alert.id)}
                    >
                        {alert.message}
                    </Alert>
                ))}
            </div>
        )
    }

    const routes = getRoutes(isAuth);
    const alertItems = getAlertItems(alerts);

    return (
        <div className='App'>
            {alertItems}
            <FlexContainer>
                <Header />
                <main className='main'>
                    <Routes>
                        {routes}
                    </Routes>
                </main>
            </FlexContainer>
        </div>
  );
}

export default App
