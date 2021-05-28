import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import Button from "@material-ui/core/Button";
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import {Container,Navbar,Nav,Dropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { logoutUser} from '../actions/userActions';

const Header = (props) => {
    // const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)
    const dispatch = useDispatch();
   
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin

    console.log("logged In user ",userInfo)
    // console.log("isAuth ",isAuthenticatedUser)

    // useEffect(() => {
    //     if(userInfo)
    //         setIsAuthenticatedUser(true)
    //     else
    //         setIsAuthenticatedUser(false)
    //     return () => {
    //         // cleanup
    //     }
    // }, [isAuthenticatedUser,userInfo,dispatch])
    
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
                        <Nav.Link className="nav-link" href="/doctors">Doctors</Nav.Link>
                        
                        {
                             userInfo  ?(
                                <Dropdown >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"#a5c422",color:"white",border:"none"}}>
                                        <AccountCircleOutlinedIcon ></AccountCircleOutlinedIcon>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="/appointment">Appointment</Dropdown.Item>
                                        <Dropdown.Item type="button" onClick={() => dispatch(logoutUser(props.history))} >Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ):(
                                <div>
                                    <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
                                    <Nav.Link className="nav-link" href="/register">Register</Nav.Link>
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
        </>
    )
}

export default Header;