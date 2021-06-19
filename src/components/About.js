import React from 'react';
import {Container,Row,Col,Figure} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import author from '../images/author-image.jpg';

const About = () => {
    return(
        <div className="about">
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <div className="about-info">
                            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                                <h2 style={{color:'#272727',paddingBottom:'10px'}} >Welcome to Your Health Center</h2>
                            <div>
                                The system we are trying to build is a web based system that will used by patients and pathological labs.
                                System will store users all the documents in their profile to reduce the paperback storage of the health related documents.
                                Pathology appointments are also made through the system so that users can reach out to the nearby testing labs easily.
                                More specifically, this system is designed to give the prediction of risk of any disease patient could have based on his report.
                                This system also provide nearby hospitals facility from that you will get all hospitals information from your locality.
                            </div>
                            {/* <Figure className="figure">
                                <Figure.Image className="author-img" alt="" src={author}/>
                                <Figure.Caption>
                                    <h3>Dr.Neil Jackson</h3>
                                    <p>General Principal</p>
                                </Figure.Caption>
                            </Figure> */}
                            </Animated>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;