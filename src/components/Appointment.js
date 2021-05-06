import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import {Animated} from 'react-animated-css';
import appointment from '../images/appointment-image.jpg';

const Appointment = () =>{
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
        <div style={{backgroundColor:'#fff'}}>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <img className="img-responsive" src={appointment}></img>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="appointment-form" role="form" method="post" action="#">
                            <Animated>
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Make an Appointment</h2>
                                </div>
                            </Animated>
                            <Animated>
                                <div>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Name</Form.Label>
                                            <Form.Control style={formControl} type="text" placeholder="Full Name"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Email</Form.Label>
                                            <Form.Control style={formControl} type="email" placeholder="Your Email"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Date</Form.Label>
                                            <Form.Control style={formControl} type="date" placeholder="Your Email"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle} htmlFor="selectdep">Select Department</Form.Label>
                                            <Form.Control style={formControl} as="select" id="selectdep">
                                                <option value="0">General Health</option>
                                                <option value="1">Cardiology</option>
                                                <option value="2">Dental</option>
                                                <option value="3">Medical Research</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Phone Number</Form.Label>
                                            <Form.Control style={formControl} type="tel" placeholder="Phone"/>
                                            <Form.Label style={labelStyle}>Additional Message</Form.Label>
                                            <Form.Control style={formControl} as="textarea" rows={3} />
                                            <Form.Group>
                                                <Button style={{width:"100%",marginTop:"2vh",height:"7vh"}} variant="contained" color="primary">Submit Button</Button>
                                            </Form.Group>
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

export default Appointment;