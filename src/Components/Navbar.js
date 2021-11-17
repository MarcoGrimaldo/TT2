import React from 'react';

import {Navbar, 
        Container,
        Nav, 
        Button
    } from 'react-bootstrap';

import {Link} from "react-router-dom";


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
                        <Link to="/"><Button variant="dark">Salir</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
