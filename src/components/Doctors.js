import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Animated} from 'react-animated-css';
import team1 from '../images/team-image1.jpg';
import team2 from '../images/team-image2.jpg';
import team3 from '../images/team-image3.jpg';

const Doctors = () => {
    const fastyle = {
        marginRight:'5px',
        display:'inline-block',
        fontSize:'inherit',
        textRendering:'auto',
        fontSmooothing:'antialiased'
    }
    const social = {
        fontWeight:'500',
        display:'inline-block',
        listStyle:'none',
    }
    const sociallist = {
        background:"#ffffff",
        borderRadius:'100%',
        fontSize:'20px',
        width:'50px',
        height:'50px',
        lineHeight:'50px',
        margin:'0 2px 0 2px',
        color:'#464646',
        textDecoration:'none',
        textAlign:'center',
        transition:'all 0.4s ease-in-out',
        position:'relative'
    }
    return(
        <div>
            <Container>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <Row>
                    <Col md={6} sm={6}>
                        <div>
                            <h2 style={{color:'#272727',fontSize:'3em',paddingBottom:'10px'}}>Our Doctors</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={6}>
                        <div className="team-thumb">
                            <img className="img-responsive" alt="team1" src={team1} style={{verticalAlign:'middle'}}></img>
                            <div className="team-info">
                                <h3>Nate Baston</h3>
                                <p>General Principal</p>
                                <div className="team-contact-info">
                                    <p><PhoneEnabledOutlinedIcon style={fastyle}></PhoneEnabledOutlinedIcon>"010-020-030"</p>
                                    <p><MailOutlineIcon style={fastyle}></MailOutlineIcon><a style={{color:'#757575'}} href="#">general@company.com</a></p>
                                </div>
                                <ul className="social-icons">
                                    <li style={social}><a style={sociallist} href=""><LinkedInIcon></LinkedInIcon></a></li>
                                    <li style={social}><a style={sociallist} href=""><MailOutlineIcon></MailOutlineIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="team-thumb">
                            <img className="img-responsive" alt="team1" src={team2} style={{verticalAlign:'middle'}}></img>
                            <div className="team-info">
                                <h3>Jason Stewart</h3>
                                <p>Pregnancy</p>
                                <div className="team-contact-info">
                                    <p><PhoneEnabledOutlinedIcon style={fastyle}></PhoneEnabledOutlinedIcon>"010-020-030"</p>
                                    <p><MailOutlineIcon style={fastyle}></MailOutlineIcon><a style={{color:'#757575'}} href="#">pregnancy@company.com</a></p>
                                </div>
                                <ul className="social-icons">
                                    <li style={social}><a style={sociallist} href=""><FacebookIcon></FacebookIcon></a></li>
                                    <li style={social}><a style={sociallist} href=""><LinkedInIcon></LinkedInIcon></a></li>
                                    <li style={social}><a style={sociallist} href=""><MailOutlineIcon></MailOutlineIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="team-thumb">
                            <img className="img-responsive" alt="team1" src={team3} style={{verticalAlign:'middle'}}></img>
                            <div className="team-info">
                                <h3>Misha Nakahara</h3>
                                <p>Cardiology</p>
                                <div className="team-contact-info">
                                    <p><PhoneEnabledOutlinedIcon style={fastyle}></PhoneEnabledOutlinedIcon>"010-020-030"</p>
                                    <p><MailOutlineIcon style={fastyle}></MailOutlineIcon><a style={{color:'#757575'}} href="#">cardiology@company.com</a></p>
                                </div>
                                <ul className="social-icons">
                                    <li style={social}><a style={sociallist} href=""><FacebookIcon></FacebookIcon></a></li>
                                    <li style={social}><a style={sociallist} href=""><LinkedInIcon></LinkedInIcon></a></li>
                                    <li style={social}><a style={sociallist} href=""><MailOutlineIcon></MailOutlineIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Animated>
            </Container>
        </div>
    );
}

export default Doctors;