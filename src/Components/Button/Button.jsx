import React, { useContext } from 'react';
import { ThemeContext } from '../../context/context';

const Button = ({
    children
}) => {

    const theme = useContext(ThemeContext);

    return(
        <button onClick={theme.onClick}>{children}</button>
    );
}

export default Button;
