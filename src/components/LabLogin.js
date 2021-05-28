import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import {Animated} from 'react-animated-css';
import Doctor from '../images/Doctor3.png';

const LabLogin = () =>{
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
    return(
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <Animated>
                            <img style={{height:"100%",marginTop:'5vh'}} className="img-responsive" src={Doctor}></img>
                        </Animated>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="appointment-form" role="form" method="post" action="#">
                            <Animated animationIn="flipInX">
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Lab Login</h2>
                                </div>
                            </Animated>
                            <Animated animationIn="flipInX">
                                <div>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Lab Name</Form.Label>
                                            <Form.Control style={formControl} type="text" placeholder="User Name"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Password</Form.Label>
                                            <Form.Control style={formControl} type="password" placeholder="Enter Password"/>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Group>
                                                <Button style={{width:"100%",marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white"}} variant="contained">Login</Button>
                                            </Form.Group>
                                            <a href="/register">New User?</a>
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

export default LabLogin;