import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { setTheme } from '../Store/action';


const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const handleLightTheme = () => {
        dispatch(setTheme('light'));
    };

    const handleDarkTheme = () => {
        dispatch(setTheme('dark'));
    };

    return (
        <div>
           
            <Button  onClick={handleLightTheme} disabled={theme === 'light'} variant="light">Switch to Light</Button>{' '} &nbsp;&nbsp;&nbsp;
            <Button onClick={handleDarkTheme} disabled={theme === 'dark'} variant="dark"> Switch to Dark</Button>
        </div>
    );
};

export default Theme;