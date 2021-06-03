import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import Doctor from '../images/Doctor3.png';


const Report = () =>{
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
                        <img alt="register" style={{height:"100%",marginTop:"5vh"}} className="img-responsive" src={Doctor}></img>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="report-form" role="form" >
                            <Animated animationIn="flipInX">
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Fill Report</h2>
                                </div>
                            </Animated> 
                            <Animated animationIn="flipInX">
                                <div>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Pregnancies</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Glucose</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>BloodPressure</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>SkinThuckness</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Insulin</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>BMI</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>DiabetesPedigreeFunction</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Age</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Group>
                                                <Button type="submit" style={{width:"100%",marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white"}} variant="contained">Upload</Button>
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

export default Report;