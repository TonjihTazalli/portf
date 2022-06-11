import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
// import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img src={logo} height="30" alt="" /> */}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        {/* <Nav.Link href="#resume">Download Resume</Nav.Link> */}
                        <a href='https://drive.google.com/drive/folders/1ZfT3L6njtyZ477Eho6t5AKN77nw9qsXx?usp=sharing'>Download Resume</a>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;