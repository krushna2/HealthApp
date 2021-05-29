import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";

const Lab = () => {
    return(
        <div >
            <Animated>
                <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
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
                                <h5>Lab Contact:</h5>
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Lab Address:</h5>
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <div>
                                <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained">Make Request</Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Animated>
        </div>
    );
}
export default Lab;