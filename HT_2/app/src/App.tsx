import {Navigate, Route, Routes} from 'react-router-dom';
import {useState} from 'react';

import { FlexContainer } from './components/Container/Container';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

import './App.css';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const getRoutes = (isAuth: boolean) => {
      if( isAuth ) {
          return <>
              <Route path='/courses' element={<CourseInfo />}/>
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
