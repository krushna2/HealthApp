import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';

const NearHospital = () => {
    return (
        <div>
            <Animated >
                            <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h5>Hospital Name: </h5> 
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h5> Address: </h5>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h5> Email: </h5>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h5> Contact No: </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Animated> 
        </div>
    );
}

export default NearHospital;