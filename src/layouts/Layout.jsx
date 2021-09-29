import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Layout = ({children}) => {
    return (
        <div className="mainContainer">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div >
    )
}

export default Layout;
