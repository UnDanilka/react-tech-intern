import React from 'react';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'


function Header ({color, fixed}){

    const colored = {
        color: color
    }

    return (
        <>
        <Navbar className='navbar' fixed={fixed} collapseOnSelect expand='md'>
            <Container>
                <Navbar.Toggle  aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='m-auto' >
                        <Link className=' btn btn-link ' style={colored} to='/'>HOME</Link>
                        <Link className=' btn btn-link'  style={colored} to='/about'>ABOUT ME</Link>
                        <Link className=' btn btn-link'  style={colored} to='/portfolio'>PORTFOLIO</Link>
                        <Link className=' btn btn-link'  style={colored} to='/contact'>CONTACT</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>  
    );
}

export default Header;