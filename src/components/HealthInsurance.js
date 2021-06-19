import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Healthinsurance from '../images/healthinsurance.jpg';
import Button from "@material-ui/core/Button";

const HealthInsurance = () => {
    return(
        <div>
                            <Container >
                                <Row>
                                    <Animated >
                                    <Col md={12} sm={12}>
                                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"5vh",paddingTop:"2vh",textAlign:"center"}}>
                                            <h3>1) Aam Aadmi Bima Yojana</h3>
                                            The Aam Aadmi Bima Yojana is a security scheme that provides benefits to low income individuals in case of death or disability. The scheme is targeted at people working in 48 specific vocations like carpentry, handloom weaving, fishing, cobblers, auto drivers etc.<br>
                                            </br>
                                            For a premium of Rs. 300 per year, the scheme promises an assured sum of Rs. 30,000 after natural death, and Rs. 75,000 in case of accidental death of the policyholder. Only an earning member or head of the family can be insured under this scheme.

                                            <div>
                                                <Button href="https://www.policeresults.com/lic-aam-aadmi-bima-yojana/" type="submit" style={{height:"5vh",backgroundColor:"#a5c422",color:"white",marginTop:"2vh",marginBottom:"2vh"}} variant="contained">Read More</Button>
                                            </div>
                                        </div>
                                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"5vh",paddingTop:"2vh",textAlign:"center"}}>
                                            <h3>2) Ayushman Bharat Scheme</h3>
                                            The Ayushman Bharat Scheme is a health insurance scheme designed to unify the segmented health sector in India. It comprises two components:Health and Wellness Centres (HWC) and the Pradhan Mantri Jan Arogya Yojana (PM-JAY). The Health and Wellness Centres are supposed to be better developed versions of Primary Healthcare Centres
                                            <div>
                                                <Button href="https://pmjay.gov.in/about/pmjay" type="submit" style={{height:"5vh",backgroundColor:"#a5c422",color:"white",marginTop:"2vh",marginBottom:"2vh"}} variant="contained">Read More</Button>
                                            </div>
                                        </div>
                                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"5vh",paddingTop:"2vh",textAlign:"center"}}>
                                            <h3>3) Awaz Health Insurance Scheme</h3>
                                            The Awaz Health Insurance Scheme was introduced in the state of Kerala and targeted at migrant workers. It offers labourers in Kerala a health insurance plan with an insured sum of Rs. 15,000. It also provides a death benefit of Rs. 2 Lakh in case of death of the policyholder.
                                            <div>
                                                <Button href="https://www.bankbazaarinsurance.com/health-insurance/awaz-health-insurance.html" type="submit" style={{height:"5vh",backgroundColor:"#a5c422",color:"white",marginTop:"2vh",marginBottom:"2vh"}} variant="contained">Read More</Button>
                                            </div>
                                        </div>
                                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"5vh",paddingTop:"2vh",textAlign:"center"}}>
                                            <h3>4) Central Government Health Scheme (CGHS)</h3>
                                            The Central Government Health Scheme is a type of health plan provided by the Central Government of India. Only Central Government employees are eligible for this policy. These include Supreme Court judges, Central Railway Board employees, etc.
                                            <div>
                                                <Button href="https://cghs.gov.in/ " type="submit" style={{height:"5vh",backgroundColor:"#a5c422",color:"white",marginTop:"2vh",marginBottom:"2vh"}} variant="contained">Read More</Button>
                                            </div>
                                        </div>
                                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"5vh",paddingTop:"2vh",textAlign:"center"}}>
                                            <h3>5) Chief Minister's Comprehensive Insurance Scheme</h3>
                                            This state government scheme has been promoted by the government of Tamil Nadu for people residing in the state that are earning less than 75000 per annum. Medical expenses upto Rs. 5 lakh can be claimed using this scheme, and many private as well as government hospitals are a part of this scheme. It is basically a family floater plan by the government, in association with the United India Insurance Company.
                                            <div>
                                                <Button href="https://madurai.nic.in/scheme/chief-ministers-comprehensive-health-insurance-scheme/" type="submit" style={{height:"5vh",backgroundColor:"#a5c422",color:"white",marginTop:"2vh",marginBottom:"2vh"}} variant="contained">Read More</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    </Animated>
                                    </Row>
                            </Container>
                        
        </div>
    );
}

export default HealthInsurance;