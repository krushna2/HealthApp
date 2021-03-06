import React from 'react';
import {useSelector} from 'react-redux';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import {Container,Navbar,Nav} from "react-bootstrap";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from "@material-ui/core/Button";

// import { Button } from 'bootstrap';

const Header = (props) => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin

    const labLogin = useSelector(state => state.labLogin)
    const {labInfo}=labLogin
    
   
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
            <div className="header2-background">
            <Container>
                <Navbar className="header2" expand="lg">
                <Navbar.Brand href="#home" style={{color:"#a5c422",fontWeight:"bolder",fontSize:"5vh"}}>Health Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="tabs ml-auto">
                        <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
                        <Nav.Link className="nav-link" href="/about">ABOUT US</Nav.Link>
                        
                        {   
                             userInfo || labInfo ?(
                                 <div>
                                     {
                                         userInfo?(
                                            <Button href="/dashboard" id="dropdown-basic" style={{backgroundColor:"#a5c422",color:"white",border:"none"}}>
                                                <AccountCircleOutlinedIcon ></AccountCircleOutlinedIcon>
                                            </Button>
                                         ):(
                                            <Button href="/labdashboard" id="dropdown-basic" style={{backgroundColor:"#a5c422",color:"white",border:"none"}}>
                                                <AccountCircleOutlinedIcon ></AccountCircleOutlinedIcon>
                                            </Button>
                                         )
                                     }
                                    
                                    
                                 </div>
                                
                                
                            ):
                            (
                                <div className="registration" id="flex-container">
                                    <div>
                                        <Nav.Link className="nav-link" href="/login">LOGIN</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="nav-link" href="/register">REGISTER</Nav.Link>
                                    </div>
                                </div>
                            )
                        }
                      
                    </Nav>
                    {/* <Link style={{textDecoration:"none"}} to="/appointment">
                        <Button style={{backgroundColor:"#a5c422",color:"white"}} className="appointment ml-auto" variant="contained">Make an appointment</Button>
                        </Link> */}
                </Navbar.Collapse>
                </Navbar>
            </Container>
            </div>
        </>
    )
}

export default Header;