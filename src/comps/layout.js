import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiFillCopyrightCircle } from 'react-icons/ai';
import {  Outlet,Link } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <header className='header'>

        
            </header>
            <div className='container  '>  <Link className='badge bg-dark' to={"/"}>Home</Link></div>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='footer d-flex'>
                <div className='fw-bold mx-auto'>
                  <h3 >All rights reserved to Ben-Or Radan <AiFillCopyrightCircle/></h3>  
                </div>
                <div className=' '>
                <a className='badge bg-info me-3 py-3 px-4' href="#"><AiOutlineArrowUp/></a>
                </div>
            </footer>
        </>
    )
}

export default Layout