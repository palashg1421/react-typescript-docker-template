import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home  = React.lazy( () => import('./pages//Home') );
const About = React.lazy( () => import('./pages/About') );

const MyRoutes = () => {
    
    const defaultLoading = () => {
		return ( <div id='suspence-loader'>Loading...</div> )
	}

    return(
        <BrowserRouter>
            <Suspense fallback={ defaultLoading() } >
                <Routes>
                    <Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MyRoutes;
