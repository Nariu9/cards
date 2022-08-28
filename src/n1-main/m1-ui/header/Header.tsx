import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../pages/Pages';

export const Header = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
            <NavLink to={PATH.REGISTER}>Registration</NavLink>
            <NavLink to={PATH.PAGE_NOT_FOUND}>404</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY}>Password recovery</NavLink>
            <NavLink to={PATH.SET_PASSWORD}>New password</NavLink>
            <NavLink to={PATH.TEST}>Test</NavLink>
        </div>
    );
};

