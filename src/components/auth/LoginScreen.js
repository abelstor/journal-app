import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'abelstor@onprayer.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startLoginWithEmailPassword(email, password));
        }
    }

    const isFormValid = () => {

        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password.length < 5) {
            dispatch(setError('Password invalid'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__tittle mb-5">Login</h3>

            <form onSubmit={handleLogin}>

                {
                    msgError &&
                    (
                        <div className="auth__alert__error">
                            {msgError}
                        </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input mb-3"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input mb-3"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary pointer btn-block"
                >
                    Login
                </button>
                <div className="auth__social__networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to={'/auth/register'}
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
