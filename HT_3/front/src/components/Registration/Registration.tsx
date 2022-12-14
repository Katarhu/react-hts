import {FormEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {useAlert} from "../../context/AlertContext";
import {useAuth} from '../../context/AuthContext';
import {useInput} from '../../hooks/useInput';

import getErrorsPopup from '../../utils/generateErrorPopup';
import getIsFormValid from '../../utils/getIsFormCorrect';
import getFormErrors from '../../utils/getFormErrors';


import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import {IRegisterCredentials} from '../../models/auth/register';

import '../../common/styles/inputError.css';
import '../../common/styles/form.css'
import './Registration.css';


function Registration() {

    const name = useInput('', { required: true });
    const email = useInput('', { required: true, email: true });
    const password = useInput('', { required: true });

    const [isShowPassword, setIsShowPassword] = useState(false);
    const {handleSignUp, error, clearError} = useAuth();
    const navigate = useNavigate();
    const {addAlert} = useAlert();

    useEffect(() => {
        clearError();
        return () => clearError()
    }, [name.value, email.value, password.value]);

    const submitRegistration = (event: FormEvent) => {
        event.preventDefault();

        if( !email || !name || !password ) return addAlert('Please provide all fields');

        const credentialsToRegister: IRegisterCredentials = {
            name: name.value.toString(),
            email: email.value.toString(),
            password: password.value.toString()
        }

        handleSignUp(credentialsToRegister)
            .then((response) => {
                if( response.successful ) {
                    addAlert('Registration is successful, please log in');
                    navigate('/login');
                }
            })
    }

    const togglePasswordType = () => {
        setIsShowPassword((prev) => !prev);
    }

    const formErrors = getFormErrors(error);
    const isFormValid = getIsFormValid(name.isValid, email.isValid, password.isValid);

    const nameErrors = getErrorsPopup(name.errors, name.touched);
    const emailErrors = getErrorsPopup(email.errors, email.touched);
    const passwordErrors = getErrorsPopup(password.errors, password.touched);

    return (
        <div className='registration'>
            <form
                className='form'
                action="#"
                onSubmit={submitRegistration}
            >
                <h2 className='form-title'>Register</h2>

                <fieldset className='form-input'>
                    <div className='form-fieldset-errored'>
                        <div className='form-fieldset-errored-input'>
                            <Input
                                labelText={'Name'}
                                placeholderText={'Enter name'}
                                onChange={name.onChange}
                                value={name.value}
                                onBlur={name.onBlur}
                                errors={name.errors}
                                isTouched={name.touched}
                            />
                        </div>
                        {nameErrors}
                    </div>
                </fieldset>

                <fieldset className='form-input'>
                    <div className='form-fieldset-errored'>
                        <div className='form-fieldset-errored-input'>
                            <Input
                                labelText={'Email'}
                                placeholderText={'Enter email'}
                                onChange={email.onChange}
                                value={email.value}
                                onBlur={email.onBlur}
                                errors={email.errors}
                                isTouched={email.touched}
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
                                placeholderText={'Enter password'}
                                onChange={password.onChange}
                                value={password.value}
                                onBlur={password.onBlur}
                                errors={password.errors}
                                isTouched={password.touched}
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
                        buttonText={'Registration'}
                        type={'submit'}
                        disabled={!isFormValid}
                    />
                </fieldset>

                <p className='form-info'>
                    If you have an account you can <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Registration;
