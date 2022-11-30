import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import { FlexContainer } from './components/Container/Container';

import './App.css';
import Login from './components/Login/Login';

function App() {
  const isAuth = false;

  return (
        <div className='App'>
            <FlexContainer>
                <Header />
                <main className='main'>
                    {/*<Courses />*/}
                    {/*<Registration/>*/}
                    <Login />
                </main>
            </FlexContainer>
        </div>
  );
}

export default App
