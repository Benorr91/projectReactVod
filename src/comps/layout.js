import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
        <header>

        </header>
        <main>
        <Outlet></Outlet>
        </main>
        <footer>
            
        </footer>
        </>
    )
}

export default Layout