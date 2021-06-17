import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';

const HealthInsurance = () => {
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Government health insurance policies.</h1>
            <Animated >
                            <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                <Row>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h3>1) Aam Aadmi Bima Yojana</h3>
                                            The Aam Aadmi Bima Yojana is a security scheme that provides benefits to low income individuals in case of death or disability. The scheme is targeted at people working in 48 specific vocations like carpentry, handloom weaving, fishing, cobblers, auto drivers etc.

                                            For a premium of Rs. 300 per year, the scheme promises an assured sum of Rs. 30,000 after natural death, and Rs. 75,000 in case of accidental death of the policyholder. Only an earning member or head of the family can be insured under this scheme.

                                            Link : https://www.policeresults.com/lic-aam-aadmi-bima-yojana/ 
                                            Information link : https://pmmodiyojana.in/lic-aam-aadmi-bima-yojana/

                                        </div>
                                    </Col>
                                    </Row>
                            </Container>
                        </Animated>
        </div>
    );
}

export default HealthInsurance;