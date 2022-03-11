import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <div className="alert__info">
                <h4>Please wait...</h4>
            </div>
        )
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<AuthRouter />} />
                    <Route path="/*" element={
                        <PrivateRoute
                            isLoggedIn={isLoggedIn}
                        >
                            <JournalScreen />
                        </PrivateRoute>
                    }
                    />
                </Routes>
            </Router>
        </>
    )
}
