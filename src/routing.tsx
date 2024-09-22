import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Layout  = React.lazy( () => import('./Pages/Layout/Layout'));
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));

const MyRoutes = () => {

  const defaultLoading = () => {
    return (<div id='suspence-loader'>Loading...</div>)
  }

  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={defaultLoading()} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default MyRoutes;
