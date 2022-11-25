import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { FlexContainer } from './components/Container/Container';

import './App.css';

function App() {
  return (
    <div className='App'>
      <FlexContainer>
        <Header />
        <Courses />
      </FlexContainer>
    </div>
  );
}

export default App
