import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<AuthRouter />} />
                    <Route path="*" element={<LoginScreen />} />
                    <Route path="/" element={<JournalScreen />} />
                </Routes>
            </Router>
        </>
    )
}
