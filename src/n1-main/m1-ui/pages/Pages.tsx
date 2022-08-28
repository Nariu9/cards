import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from '../../../n2-features/f1-auth/a1-login/Login.';
import {Register} from '../../../n2-features/f1-auth/a2-register/Register';
import {Error404} from '../common/Error404/Error404';
import {PassRecovery} from '../../../n2-features/f1-auth/a4-passRecovery/PassRecovery';
import {SetPass} from '../../../n2-features/f1-auth/a5-setPass/SetPass';
import {TestPage} from '../../../n2-features/f0-test/TestPage';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PAGE_NOT_FOUND: 'page-not-found',
    PASSWORD_RECOVERY: '/password-recovery',
    SET_PASSWORD: '/set-password',
    TEST: '/test'
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.TEST}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PAGE_NOT_FOUND} element={<Error404/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PassRecovery/>}/>
                <Route path={PATH.SET_PASSWORD} element={<SetPass/>}/>
                <Route path={PATH.TEST} element={<TestPage/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};