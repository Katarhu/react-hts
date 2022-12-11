import { FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {useAuth} from '../../context/AuthContext';
import {useAlert} from "../../context/AlertContext";
import {useInput} from '../../hooks/useInput';

import getErrorsPopup from '../../utils/generateErrorPopup';
import getIsFormValid from '../../utils/getIsFormCorrect';
import getFormErrors from '../../utils/getFormErrors';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import {ILoginCredentials} from '../../models/auth/login';

import '../../common/styles/inputError.css'
import '../../common/styles/form.css'
import './Login.css';


function Login() {

  const {addAlert} = useAlert();
  const email = useInput('', { minLength: 5, maxLength: 25, required: true, email: true });
  const password = useInput('', { minLength:5, maxLength: 25, required: true });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {handleSignIn, error, clearError} = useAuth();

  useEffect(() => {
    clearError();
    return () => clearError()
  }, [email.value, password.value]);

  const submitLogin = (event: FormEvent) => {
    event.preventDefault();

    if( !email || !password ) return addAlert('Please provide all fields');

    const loginCredentials: ILoginCredentials = {
      email: email.value.toString(),
      password: password.value.toString()
    }

    handleSignIn(loginCredentials);
  }

  const togglePasswordType = () => {
    setIsShowPassword((prev) => !prev);
  }

  const isFormValid = getIsFormValid(email.isValid, password.isValid);
  const formErrors = getFormErrors(error);

  const emailErrors = getErrorsPopup(email.errors, email.touched);
  const passwordErrors = getErrorsPopup(password.errors, password.touched);

  return (
        <div className='login'>
          <form
              className='form'
              onSubmit={submitLogin}
          >
            <h2 className='form-title'>Login</h2>

            <fieldset className='form-input'>
              <div className='form-fieldset-errored'>
                <div className='form-fieldset-errored-input'>
                  <Input
                      labelText={'Email'}
                      onChange={email.onChange}
                      onBlur={email.onBlur}
                      isTouched={email.touched}
                      errors={email.errors}
                      placeholderText={'Enter email'}
                      value={email.value}
                  />
                </div>
                {emailErrors}
              </div>
            </fieldset>

            <fieldset className='form-input'>
              <div className='form-fieldset-errored'>
                <div className='form-fieldset-errored-input'>
                  <Input
                      labelText={'Password'}
                      onChange={password.onChange}
                      placeholderText={'Enter password'}
                      value={password.value}
                      onBlur={password.onBlur}
                      isTouched={password.touched}
                      errors={password.errors}
                      type={isShowPassword ? 'text' : 'password'}
                  />
                  <div
                      className='form-password-toggle'
                      onClick={togglePasswordType}
                  >
                    &#128064;
                  </div>
                </div>
                {passwordErrors}
              </div>
            </fieldset>

            {formErrors}

            <fieldset className='form-button'>
              <Button
                buttonText={'Login'}
                type={'submit'}
                disabled={!isFormValid}
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
