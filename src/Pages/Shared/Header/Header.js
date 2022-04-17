import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        // <NavLink to="/shop" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Shop</NavLink>
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="white" >
            <Container>
                <Navbar.Brand className='text-dark fw-bold' as={Link} to="/home">UNITREAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link className='text-dark' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/treatments' href="home#treatments">Treatments</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to="/about">
                            About
                        </Nav.Link>
                        {user ? <Button onClick={handleSignOut} >Sign out</Button> : <Nav.Link className='text-dark' as={Link} to="/login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;