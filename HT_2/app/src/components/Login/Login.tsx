import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from '../../context/AuthContext';
import {useAlert} from "../../context/AlertContext";

import {ILoginCredentials} from '../../models/auth/login';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import '../../common/styles/form.css'
import './Login.css';
import {useInput} from '../../hooks/useInput';


function Login() {

  const {addAlert} = useAlert();
  const [email, setEmail] = useState('');
  // const email = useInput('', { minLength: 5, maxLength: 12, required: true, email: true });
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {handleSignIn, error, clearError} = useAuth();

  useEffect(() => { return () => clearError() }, []);

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();

    if( !email || !password ) return addAlert('Please provide all fields');

    const loginCredentials: ILoginCredentials = {
      email,
      password
    }

    handleSignIn(loginCredentials);
  }

  const handleInputChange = (event: ChangeEvent, setFunction: Dispatch<SetStateAction<string>>) => {
    clearError();
    setFunction((event.target as HTMLInputElement).value);
  }

  const togglePasswordType = () => {
    setIsShowPassword((prev) => !prev);
  }

  const getErrors = (errors: string[] | null ) => {
    if (errors == null || !errors.length ) return;

    return (
        <ul className='form-errors'>
          {errors.map((error) => (
              <li key={error} className='form-error'>{error}</li>
            ))
          }
        </ul>
    )
  }

  const formErrors = getErrors(error);

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

            {formErrors}

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
