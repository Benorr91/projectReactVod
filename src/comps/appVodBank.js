
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useHistory} from 'react-router-dom';
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
                        <Route path="/year/:searchbyYear/" element={<Home />}></Route>
                        <Route path="/search/:searchbyCat/" element={<Home />}></Route>
                        <Route path="/video/:id/" element={<Single />}></Route>
                   
                    </Route>
                </Routes>
              
            </Router>
        </>
    )
}

export default AppVodBank
