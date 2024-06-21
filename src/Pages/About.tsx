import * as React from 'react';

const MenuBar= React.lazy( () => import('./layout/MenuBar') );

const About = () => {
    return(
        <>
            <MenuBar />
            About Page
        </>
    );
}

export default React.memo(About);