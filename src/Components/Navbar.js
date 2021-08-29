import React from 'react';

import {Navbar, 
        Container,
        Nav, 
        Button
    } from 'react-bootstrap';


const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="navbar" variant="dark"> 
            <Container>
                <Navbar.Brand href="#home">Sistema de Monitoreo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Button variant="dark">Salir</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
