import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Layout from './layout';
// import {AppCont} from './context/appCont';

function AppVodBank
    (props) {
 
    return (
        <>
            <Router>
            
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/gallery/:search" element={<Home />}></Route>
                    </Route>
                </Routes>
              
            </Router>
        </>
    )
}

export default AppVodBank
