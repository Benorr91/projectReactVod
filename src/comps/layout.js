import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <header className='header'>
        
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='footer d-flex'>
                <div className='fw-bold mx-auto'>
                  <h3 >All rights reserved to Ben-Or Radan <AiFillCopyrightCircle/></h3>  
                </div>
                {/* <Link to={"#"} ><AiOutlineArrowUp/></Link> */}
                <div className=' '>
                <a className='badge bg-info me-3 py-3 px-4' href="#"><AiOutlineArrowUp/></a>
                </div>
            </footer>
        </>
    )
}

export default Layout