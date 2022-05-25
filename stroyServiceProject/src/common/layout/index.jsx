import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header'
import MainNavbar from '../mainnavbar';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <MainNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout