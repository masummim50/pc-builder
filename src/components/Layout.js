import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className='max-w-[1100px] m-auto p-2 min-h-[80vh]'>

            {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;