import {Navigate, Route, Routes} from 'react-router-dom';
import {useState} from 'react';

import { FlexContainer } from './components/Container/Container';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/Courses/components/CreateCourse/CreateCourse';

import './App.css';
import {useAuth} from './context/AuthContext';

function App() {
  const { isAuth } = useAuth();

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
