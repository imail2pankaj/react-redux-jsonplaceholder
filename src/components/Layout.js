import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Nav></Nav>
            <div className="container">
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout;