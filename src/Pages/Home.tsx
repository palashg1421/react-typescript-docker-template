import * as React from 'react';

const MenuBar= React.lazy( () => import('./layout/MenuBar') );

const Home = () => {
    return(
        <>
            <MenuBar />
            Home Page
        </>
    );
}

export default React.memo(Home);