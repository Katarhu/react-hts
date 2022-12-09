import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';
import {Link} from 'react-router-dom';

import {ILoginCredentials} from '../../models/auth';
import {useAuth} from '../../context/AuthContext';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import '../../common/styles/form.css'
import './Login.css';
import {useAlert} from "../../context/AlertContext";


function Login() {

  const {addAlert} = useAlert();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {signIn} = useAuth();

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();

    if( !email || !password ) return addAlert('Please provide all fields');

    const loginCredentials: ILoginCredentials = {
      email,
      password
    }
  }

  const handleInputChange = (event: ChangeEvent, setFunction: Dispatch<SetStateAction<string>>) => {
    setFunction((event.target as HTMLInputElement).value);
  }

  const togglePasswordType = () => {
    setIsShowPassword((prev) => !prev);
  }

  return (
        <div className='login'>
          <form
              className='form'
              onSubmit={submitLogin}
          >
            <h2 className='form-title'>Login</h2>

            <fieldset className='form-input'>
              <Input
                labelText={'Email'}
                onChange={(event) => handleInputChange(event, setEmail)}
                placeholderText={'Enter email'}
                value={email}
              />
            </fieldset>

            <fieldset className='form-input'>
              <Input
                labelText={'Password'}
                onChange={(event) => handleInputChange(event, setPassword)}
                placeholderText={'Enter password'}
                value={password}
                type={isShowPassword ? 'text' : 'password'}
              />
              <div
                  className='form-password-toggle'
                  onClick={togglePasswordType}
              >
                &#128064;
              </div>
            </fieldset>

            <fieldset className='form-button'>
              <Button
                buttonText={'Login'}
                onClick={() => {}}
                type={'submit'}
              />
            </fieldset>

            <p className='form-info'>
              If you do not have an account you can <Link to='/registration'>Register</Link>
            </p>

          </form>
        </div>
  );
}

export default Login;
