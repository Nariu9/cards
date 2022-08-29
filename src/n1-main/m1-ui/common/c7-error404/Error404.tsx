import React from 'react';
import classes from './Error404.module.scss'

export const Error404 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>4<span>&#9888;</span>4 Page Not Found</div>
        </div>
    );
};