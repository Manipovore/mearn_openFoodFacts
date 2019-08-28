import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

const Navigation = () => {

    return (
        <header className="App-header">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </NavbarBrand>
                {'Food Facts'}
                <Nav className="mr-auto p-4" navbar>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">All products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/other" className="nav-link">About</Link>
                    </li>
                </Nav>
            </Navbar>
        </header>
    );

}

export default Navigation;
