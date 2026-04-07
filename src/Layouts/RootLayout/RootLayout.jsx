import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen text-base-content'>
            <Navbar/>
            <main className='grow'>
                <div className='max-w-7xl mx-auto px-2 sm:px-4'>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;