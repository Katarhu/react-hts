import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import './Header.css'

function Header() {
  const logOut = () => {}

  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-name'>Dave</div>
      <div className='header-button'>
        <Button onClick={logOut} buttonText={'Logout'} small={true} />
      </div>
    </header>
  )
}

export default Header
