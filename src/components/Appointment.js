import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
<<<<<<< HEAD
import {listUserAppointment} from '../actions/userActions';
=======
import Button from "@material-ui/core/Button";
>>>>>>> 584c518c6550942f27c104660c3b6f7ea8d7b577

const Appointment = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userAppointmentList = useSelector(state => state.userAppointmentList)
    const {loading,appointmentList,error}=userAppointmentList

    console.log(userAppointmentList)

    useEffect(() => {
        dispatch(listUserAppointment(userInfo.id))
        return () => {
            // cleanup
        }
    }, [userAppointmentList])
    return(
<<<<<<< HEAD
        <div>
            {
                error ? <div>{error}</div> :
                loading ? <div>Loading...</div>:
                appointmentList.map(appointment =>
                    <Animated>
                        <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                            <Row>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Name:{appointment.labName}</h5> 
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Location: {appointment.labLocation}</h5> 
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Email: {appointment.labEmail}</h5>
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Contact:{appointment.labContact}</h5>
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Address: {appointment.labAddress}</h5>
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Appointment status: {appointment.status ? <span>Confirmed</span>: <span>Pending</span> } </h5>
                                    </div>
                                </Col>
=======
        <div >
            <Animated>
                <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"3vh",paddingBottom:"3vh"}}>
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
                                <h5>Lab Email:</h5>
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
                        <Col md={6} sm={6}>
                            <div>
                                <h5>Appointment Status:</h5>
                            </div>
                        </Col>
                        <Col md={12} sm={12}>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Confirm</Button>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Cancel</Button>
                            <Button type="submit" style={{marginTop:"2vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginRight:"2vw"}} variant="contained">Make Request</Button>
                        </Col>
>>>>>>> 584c518c6550942f27c104660c3b6f7ea8d7b577

                            </Row>
                        </Container>
                    </Animated>    
                )
                
            }
            
        </div>
    );
}
export default Appointment;