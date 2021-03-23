import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';


function NavbarComp(){
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">NFL Score Predictor</Navbar.Brand>
        </Navbar>

    )
}

export default NavbarComp;