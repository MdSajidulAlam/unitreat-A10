import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // <NavLink to="/shop" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Shop</NavLink>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
                <Navbar.Brand className='text-dark' as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark' as={Link} to="home#services">Features</Nav.Link>
                        <Nav.Link className='text-dark' href="#pricing">Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' href="#deets">More deets</Nav.Link>
                        <Nav.Link className='text-dark' eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;