import React from 'react';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from "@material-ui/core/Button";
import { logoutLab } from '../actions/labActions';


const LabDashboard = (props) => {

    const dispatch = useDispatch();

    const labLogin = useSelector(state => state.labLogin)
    const {labInfo}=labLogin
   
    const logoutHandler=()=>{
        dispatch(logoutLab(props.history));
    }
    
    return(
        <div>
            <Container style={{marginTop:"5vh"}}>
                <Row>
                    <Col md={6} sm={6}>
                        <Nav defaultActiveKey="/home" className="flex-column" style={{height:"45vh",width:"20vw",textDecoration:"none",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                            <Button href="#" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}}>Reports</Button>
                            <Button href="/labappointment" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}}>Appointment</Button>
                            <Button href="/home" style={{backgroundColor:"#a5c422",color:"white",border:"none",marginTop:"4vh",marginRight:"2vw",marginLeft:"2vw",height:"6vh"}} onClick={logoutHandler} >Logout</Button>
                        </Nav>
                    </Col>
                    <Col md={6} sm={6}>
                        <div style={{textAlign:"center"}}>
                            <AccountCircleOutlinedIcon style={{height:"10vh",width:"10vw"}}></AccountCircleOutlinedIcon>
                            <h3 >Lab Profile</h3>
                        </div>
                        
                        <div className="user-info" style={{marginTop:"5vh"}}>
                            <div className="user-field">
                                <h4>Name : {labInfo.labName} </h4>
                            </div>
                            <div className="user-field">
                                <h4>Email : {labInfo.labEmail} </h4>                                
                            </div>
                            <div className="user-field">
                                <h4>Contact No : {labInfo.labContact} </h4>                                
                            </div>
                            <div className="user-field">
                                <h4>Address: <span>{labInfo.labAddress}</span></h4>                                
                            </div>
                            <div className="user-field">
                                <h4>Location: <span>{labInfo.labLocation}</span></h4>                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default LabDashboard;