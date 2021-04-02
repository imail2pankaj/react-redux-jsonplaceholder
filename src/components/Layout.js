import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Nav></Nav>
            <Container>
                {props.children}
            </Container>
            <Footer></Footer>
        </>
    )
}

export default Layout;