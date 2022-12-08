import {Navigate, Route, Routes} from 'react-router-dom';

import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { FlexContainer } from './components/Container/Container';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import {useAuth} from './context/AuthContext';

import './App.css';

function App() {
  // const { isAuth } = useAuth();

    const isAuth = true

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

    const routes = getRoutes(isAuth);

    return (
        <div className='App'>
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
