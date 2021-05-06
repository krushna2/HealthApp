import React from 'react';
import {Container,Row,Col,Figure} from 'react-bootstrap';
import author from '../images/author-image.jpg';

const About = () => {
    return(
        <div className="about">
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <div className="about-info">
                            <h2 className="wow fadeInUp animated" data-wow-delay="0.6s" style={{visibility:'visible',animationDelay:'0.6s',animationName:"fadeInUp"}}>Welcome to Your Health Center</h2>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;