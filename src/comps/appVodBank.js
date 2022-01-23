
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Layout from './layout';
import Single from './single';

function AppVodBank
    (props) {
 
    return (
        <>
            <Router>
            
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/gallery/:searchbyYear" element={<Home />}></Route>
                        <Route path="/search/:searchbyCat" element={<Home />}></Route>
                        <Route path="/single/:id" element={<Single />}></Route>
                   
                    </Route>
                </Routes>
              
            </Router>
        </>
    )
}

export default AppVodBank
