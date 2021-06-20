import React from 'react';
import {useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';

const NearHospital = () => {
    const hospitalList = useSelector(state => state.hospitalList);
    const {loading,hospitals,error}=hospitalList;
    console.log("Redux Hospital List ",hospitals)
    return (
        <div>
            {
                error?<div>{error}</div>:
                loading?<div>Loading...Please wait</div>:
                hospitals.map(hospital => 
                    <Animated key={hospital.id} >
                            <Container >
                                <Row>
                                    <Col md={12} sm={12} style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                        <div>
                                            <h5>Hospital Name : {hospital.title}</h5>
                                        </div>
                                        <div>
                                            <h5> Address: {hospital.address.label}</h5>
                                        </div>
                                        <div>
                                            <h5>City : {hospital.address.city}</h5>
                                        </div>
                                        <div>
                                            <h5>County : {hospital.address.county}</h5>
                                        </div>
                                        <div>
                                            <h5>State : {hospital.address.state}</h5>
                                        </div>
                                        <div>
                                            <h5>Country : {hospital.address.countryName}</h5>
                                        </div>
                                        <div>
                                            <h5>Postal Code : {hospital.address.postalCode}</h5>
                                        </div>
                                    </Col>
                                    {/* <Col md={12} sm={12}>
                                        <div>
                                            <h5> Email: </h5>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <h5> Contact No: </h5>
                                        </div>
                                    </Col> */}
                                </Row>
                            </Container>
                        </Animated>    
                )
            }
             
        </div>
    );
}

export default NearHospital;