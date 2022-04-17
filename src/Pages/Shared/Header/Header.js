import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <NavLink to="/shop" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Shop</NavLink>
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="white" >
            <Container>
                <Navbar.Brand className='text-dark fw-bold' as={Link} to="/home">UNITREAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-dark' href="home#treatments">Treatments</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;