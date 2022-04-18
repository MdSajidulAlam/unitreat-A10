import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="white" >
            <Container>
                <Navbar.Brand className='text-dark fw-bold mr-3' as={Link} to="/home">UNITREAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>

                        <NavLink to='/home' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Home</NavLink>
                        <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Blogs</NavLink>
                    </Nav>
                    <Nav className='ms-auto '>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3 "} >About</NavLink>
                        {user ? <Button onClick={handleSignOut} >Sign out</Button> : <NavLink to='/login' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Login</NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;