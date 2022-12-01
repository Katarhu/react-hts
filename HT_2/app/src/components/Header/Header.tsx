import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
  //  TODO: Logout functional
  const logOut = () => {}

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/'>
            <Logo />
        </Link>
      </div>
      <div className='header-name'>Dave</div>
      <div className='header-button'>
        <Button onClick={logOut} buttonText={'Logout'} small={true} />
      </div>
    </header>
  )
}

export default Header
