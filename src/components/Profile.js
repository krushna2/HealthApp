import React from 'react';
import {useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';


const Profile = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    return(
        <div >
            <Animated>
                <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                    <Row>
                        <Col md={12} sm={12}>
                            <div>
                                <h5>Name : </h5>{userInfo.name}
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <div>
                                <h5>Email : </h5>{userInfo.email}
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <div>
                                <h5>Mobile No: </h5>{userInfo.mobileNum}
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <div>
                                <h5>Aadhar No : </h5>{userInfo.adharNum}
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Animated>
        </div>
    );
}
export default Profile;