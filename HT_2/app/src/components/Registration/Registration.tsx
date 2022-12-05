import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';

import '../../common/styles/form.css'
import './Registration.css';
import {Link} from 'react-router-dom';
import {IRegisterCredentials} from '../../models/auth';

function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const submitRegistration = (event: FormEvent) => {
        event.preventDefault();

        if( !email || !name || !password ) {
            alert('Please provide all fields');
            return;
        }

        const credentialsToRegister: IRegisterCredentials = {
            name,
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
