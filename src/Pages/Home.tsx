import * as React from 'react';

const MenuBar= React.lazy( () => import('../Pages/Layout/MenuBar') );

const Home = () => {
    return(
        <>
            <MenuBar />
            Home Page
        </>
    );
}

export default React.memo(Home);