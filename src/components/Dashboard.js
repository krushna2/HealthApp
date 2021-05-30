import React from 'react';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from "@material-ui/core/Button";
import {logoutUser} from '../actions/userActions';

const Dashboard = (props) => {
    
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin

    const logoutHandler=()=>{
        dispatch(logoutUser(props.history));
    }

    return(
        <div>
            <Container style={{marginTop:"5vh"}}>
                <Row>
                    <Col md={6} sm={6}>
                        <Nav defaultActiveKey="/home" className="flex-column" style={{height:"45vh",width:"20vw",textDecoration:"none",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                            <Button href="/lab" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}}>Labs</Button>
                            <Button href="/appointment" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}}>Appointment</Button>
                            <Button href="/report" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}}>Reports</Button>
                            <Button href="/home" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}} onClick={logoutHandler} >Logout</Button>
                        </Nav>
                    </Col>
                    <Col md={6} sm={6}>
                        <div style={{textAlign:"center"}}>
                            <AccountCircleOutlinedIcon style={{height:"10vh",width:"10vw"}}></AccountCircleOutlinedIcon>
                            <h3 >User Profile</h3>
                        </div>
                        
                        <div className="user-info" style={{marginTop:"5vh"}}>
                            <div className="user-field">
                                <h4>Name : <span>{userInfo.name}</span></h4>
                            </div>
                            <div className="user-field">
                                <h4>Email : <span> {userInfo.email} </span></h4>                                
                            </div>
                            <div className="user-field">
                                <h4>Mobile No : <span> {userInfo.mobileNum} </span></h4>                                
                            </div>
                            <div className="user-field">
                                <h4>Adhar Number : <span> {userInfo.adharNum} </span></h4>                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;