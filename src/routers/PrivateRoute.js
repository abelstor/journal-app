import React from 'react';
import { useSelector } from 'react-redux';
import { AuthRouter } from './AuthRouter';

export const PrivateRoute = ({ children, isLoggedIn }) => {

    const { loading } = useSelector(state => state.ui);

    if (loading) {
        return (
            <div className="alert__info">
                <h4>Please wait...</h4>
            </div>
        )
    }

    return isLoggedIn
        ? children
        : <AuthRouter />
}