import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/Auth/SignIn';
import { SignUp } from '../pages/Auth/SignUp';
import { Exam } from '../pages/Exam';

import { Main } from '../pages/Main';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Main />} />
            <Route path="/exam" element={<Exam />} />
        </Routes>
    );
};
