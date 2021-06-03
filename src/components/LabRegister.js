import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col,Form} from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import {Animated} from 'react-animated-css';
import Doctor from '../images/Doctor3.png';
import { registerLab } from '../actions/labActions';

const LabRegister = (props) =>{
    const labelStyle = {
        color:'#393939',
        fontWeight:'500',
        display:'inline-block',
        marginBottom:'5px'
    }

    const formControl = {
        background:'#f9f9f9',
        border:'none',
        borderRadius:'3px',
        fontSize:'14px',
        fontWeight:'normal',
        marginBottom:'15px',
        transition:'all ease-in-out 0.4s',
        display:'block',
        width:'100%',
        color:'#555',
        height:'45px'
    }

    const [labName, setLabName] = useState('');
    const [labEmail, setLabEmail] = useState('');
    const [labContact, setLabContact] = useState(0);
    const [labAddress, setLabAddress] = useState('');
    const [labLocation, setLabLocation] = useState('');
    const [labPassword, setLabPassword] = useState('');
    const [labPassword2, setLabPassword2] = useState('');

    const dispatch = useDispatch();

    const labRegister = useSelector(state => state.labRegister);
    const {loading,error}=labRegister

    const submitHandler=(e)=>{
        e.preventDefault()
        const newLab={
            labName,
            labEmail,
            labContact,
            labAddress,
            labLocation,
            labPassword,
            labPassword2
        }
        if(labName && labEmail && labContact && labAddress && labLocation && labPassword2 && labPassword )
            if(labPassword===labPassword2)
                dispatch(registerLab(newLab,props.history))
            else
                alert("Password Not match")
        else
            alert("Please fill all fields")
    }
    return(
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <img alt="register" style={{height:"100%",marginTop:"5vh"}} className="img-responsive" src={Doctor}></img>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="appointment-form" role="form" onSubmit={submitHandler} >
                            <Animated animationIn="flipInX">
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Registration</h2>
                                </div>
                                <div>
                                    {loading && <div style={{font:"bold",color:"green"}} >Loading....</div> }
                                    {error && <div style={{color:"red"}} >{error}</div>}
                                </div>
                            </Animated>
                            <Animated animationIn="flipInX">
                                <div>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Lab Name</Form.Label>
                                            <Form.Control style={formControl} type="text" 
                                            onChange={ e => setLabName(e.target.value) } placeholder="Lab Name"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Email</Form.Label>
                                            <Form.Control style={formControl} type="email" 
                                            onChange={ e => setLabEmail(e.target.value) } placeholder="Your Email"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Contact Number</Form.Label>
                                            <Form.Control style={formControl} type="tel" 
                                            onChange={ e => setLabContact(e.target.value) } placeholder="Contact"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Password</Form.Label>
                                            <Form.Control style={formControl} type="password" 
                                            onChange={ e => setLabPassword(e.target.value) } placeholder="Enter Password"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle} htmlFor="selectdep">Confirm Password</Form.Label>
                                            <Form.Control style={formControl} type="password" 
                                            onChange={ e => setLabPassword2 (e.target.value) } placeholder="Re-enter password"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Address</Form.Label>
                                            <Form.Control style={formControl} as="textarea" onChange={ e => setLabAddress(e.target.value) } rows={3} />
                                            <Col md={6} sm={6}>
                                                <Form.Label style={labelStyle}>Lab Location</Form.Label>
                                                <Form.Control style={formControl} type="text" 
                                                onChange={ e => setLabLocation(e.target.value) } placeholder="Lab Location"/>
                                            </Col>
                                            <Form.Group>
                                                <Button type="submit" style={{width:"100%",marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white"}} variant="contained">Register</Button>
                                            </Form.Group>
                                            <a href="/login">Already have an account</a>
                                        </Col>
                                    </Row>
                                </div>
                            </Animated>
                        </Form>
                    </Col>     
                </Row>
            </Container>
        </div>
    );
}

export default LabRegister;