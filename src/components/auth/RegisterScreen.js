import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__tittle mb-5">Register</h3>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input mb-3"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input mb-3"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input mb-3"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input mb-3"
                />
                <button
                    type="submit"
                    className="btn btn-primary pointer btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    to={'/auth/login'}
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
