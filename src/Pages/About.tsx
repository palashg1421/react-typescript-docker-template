import * as React from 'react';

const MenuBar= React.lazy( () => import('../Pages/Layout/MenuBar') );

const About = () => {
    return(
        <>
            <MenuBar />
            About Page
        </>
    );
}

export default React.memo(About);