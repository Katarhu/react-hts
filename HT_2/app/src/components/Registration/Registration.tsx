import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {useAlert} from "../../context/AlertContext";
import {useAuth} from '../../context/AuthContext';

import {IRegisterCredentials} from '../../models/auth/register';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import '../../common/styles/form.css'
import './Registration.css';

function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const {handleSignUp, error, clearError} = useAuth();
    const navigate = useNavigate();
    const {addAlert} = useAlert();

    useEffect(() => { return () => clearError() }, []);

    const submitRegistration = (event: FormEvent) => {
        event.preventDefault();

        if( !email || !name || !password ) return addAlert('Please provide all fields');

        const credentialsToRegister: IRegisterCredentials = {
            name,
            email,
            password
        }

        handleSignUp(credentialsToRegister)
            .then((response) => {
                if( response.successful ) {
                    addAlert('Registration is successful, please log in');
                    navigate('/login');
                }
            })
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
        <div className='registration'>
            <form
                className='form'
                action="#"
                onSubmit={submitRegistration}
            >
                <h2 className='form-title'>Register</h2>

                <fieldset className='form-input'>
                    <Input
                        labelText={'Name'}
                        placeholderText={'Enter name'}
                        onChange={(event) => handleInputChange(event, setName)}
                        value={name}
                    />
                </fieldset>

                <fieldset className='form-input'>
                    <Input
                        labelText={'Email'}
                        placeholderText={'Enter email'}
                        onChange={(event) => handleInputChange(event, setEmail)}
                        value={email}
                    />
                </fieldset>

                <fieldset className='form-input'>
                    <Input
                        labelText={'Password'}
                        placeholderText={'Enter password'}
                        onChange={(event) => handleInputChange(event, setPassword)}
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
                        buttonText={'Registration'}
                        onClick={() => {}}
                        type={'submit'}
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
