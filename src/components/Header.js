import React from 'react';
import Button from "@material-ui/core/Button";
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import {Container,Navbar,Nav} from "react-bootstrap";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Header = () => {
    return(
        <>
            <div className="header1_outline">
            <Container >
                <Navbar className="header1" expand="lg">
                <Navbar.Brand >Welcome to a Professional Health Care</Navbar.Brand>
                    <Nav className="ml-auto" >
                        <Nav.Link className="nav-item" ><PhoneEnabledOutlinedIcon></PhoneEnabledOutlinedIcon>010-060-0160</Nav.Link>
                        <Nav.Link className="nav-item" ><EventAvailableIcon></EventAvailableIcon>6:00 AM - 10:00 PM (Mon-Fri)</Nav.Link>
                        <Nav.Link className="nav-item" href="#link"><MailOutlineIcon></MailOutlineIcon> info@company.com</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
            </div>
            <Container>
                <Navbar className="header2" expand="lg">
                <Navbar.Brand href="#home">Health Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="tabs ml-auto">
                        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/about">About Us</Nav.Link>
                        <Nav.Link className="nav-link" href="#link">Doctors</Nav.Link>
                        <Nav.Link className="nav-link" href="#link">News</Nav.Link>
                        <Nav.Link className="nav-link" href="#link">Contact</Nav.Link>
                    </Nav>
                    <Button className="appointment ml-auto" variant="contained" color="primary">Make an appointment</Button>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}

export default Header;