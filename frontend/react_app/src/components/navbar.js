import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


function NavbarComp(){
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">NFL Score Predictor</Navbar.Brand>
            <Nav>
                <NavDropdown title="Week" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/week/1">1</NavDropdown.Item>
                    <NavDropdown.Item href="/week/2">2</NavDropdown.Item>
                    <NavDropdown.Item href="/week/3">3</NavDropdown.Item>
                    <NavDropdown.Item href="/week/4">4</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default NavbarComp;