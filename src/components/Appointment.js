import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";

const Appointment = () => {
    return(
        <div >
            <Animated>
                <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"3vh",paddingBottom:"3vh"}}>
                    <Row>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Name:</h5> 
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Location:</h5> 
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Email:</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Contact:</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Address:</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Appointment Status:</h5>
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Confirm</Button>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Cancel</Button>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Make Request</Button>
                        </Col>

                    </Row>
                </Container>
            </Animated>
        </div>
    );
}
export default Appointment;