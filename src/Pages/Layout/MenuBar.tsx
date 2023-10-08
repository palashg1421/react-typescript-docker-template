import * as React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return(
        <>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <br />
        </>
    );
}

export default React.memo(MenuBar);