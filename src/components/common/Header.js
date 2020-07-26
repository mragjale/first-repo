import React from 'react';
import {Navbar, Nav, FormControl, Button, Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {
    useRouteMatch
} from "react-router-dom";


const Header = () => {
    let match = useRouteMatch();
    const mystyle = {
        margin: "0rem 0.5rem",
        textDecoration:"none"
                 };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Link to="/" className="btn btn-block btn-danger">Home</Link> */}
                        <NavLink to={`${match.url}/home`} style={mystyle}>Home</NavLink>
                        <NavLink to={`${match.url}/about`} style={mystyle}>About</NavLink>
                        <NavLink to={`${match.url}/contact`} style={mystyle}>Contact</NavLink>
                        <NavLink to={`${match.url}/womens`} style={mystyle}>Womens</NavLink>
                        <NavLink to={`${match.url}/mens`} style={mystyle}>mens</NavLink>
                        <NavLink to={`${match.url}/kids`} style={mystyle}>Kids</NavLink>
                        <NavLink to={`${match.url}/test`} style={mystyle}>Test</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
