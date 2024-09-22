import React from 'react';

const MenuBar = React.lazy(() => import('./MenuBar'));

const Layout = ({children}: any) => {
  return(
    <React.Fragment>
      <MenuBar />
      {children}
    </React.Fragment>
  );
}

export default Layout;