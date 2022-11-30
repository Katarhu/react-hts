import Input from '../../common/Input/Input';

import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';

import './Login.css';
import '../../common/styles/form.css'
import Button from '../../common/Button/Button';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      email,
      password
    })
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
              If you do not have an account you can Register
            </p>

          </form>
        </div>
  );
}

export default Login;
