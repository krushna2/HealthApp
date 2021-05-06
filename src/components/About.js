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
                                Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.<br></br>
        
                                Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.
                            </div>
                            <Figure className="figure">
                                <Figure.Image className="author-img" alt="" src={author}/>
                                <Figure.Caption>
                                    <h3>Dr.Neil Jackson</h3>
                                    <p>General Principal</p>
                                </Figure.Caption>
                            </Figure>
                            </Animated>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;