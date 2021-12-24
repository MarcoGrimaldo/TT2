import React,{useState,useEffect} from 'react';

import {Navbar, 
        Container,
        Nav, 
        Button
    } from 'react-bootstrap';

import {Link} from "react-router-dom";

import userImg from '../images/user.png';

import { getAuth, onAuthStateChanged } from "firebase/auth";


const NavbarComponent = () => {

    const [email, setemail] = useState('')

    const getUserEmail = () =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const email = user.email;
            setemail(email);
        } 
        });
    }

    useEffect(() => {
        getUserEmail();
    }, [])

    return (
        <Navbar collapseOnSelect expand="lg" bg="navbar" variant="dark"> 
            <Container>
                <Navbar.Brand >
                <img
                    src={userImg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    {'  '+email}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to="/monitoreo"><Button variant="dark">Monitoreo</Button></Link>
                        <Link to="/graficas"><Button variant="dark">Gráficas</Button></Link>
                        <Link to="/"><Button variant="danger">Salir</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
