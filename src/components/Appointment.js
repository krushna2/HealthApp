import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import {listUserAppointment} from '../actions/userActions';
import Button from "@material-ui/core/Button";

const Appointment = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userAppointmentList = useSelector(state => state.userAppointmentList)
    const {loading,appointmentList,error}=userAppointmentList

    console.log(appointmentList)

    useEffect(() => {
        dispatch(listUserAppointment(userInfo.id))
        return () => {
            // cleanup
        }
    }, [userAppointmentList])
    return(
        <div>
            {
                error ? <div>{error}</div> :
                loading ? <div>Loading...</div>:
                appointmentList.map(appointment =>{
                    <Animated key={appointment.id} >
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
                                </Row>
                        </Container>
                    </Animated>
                })      
            }  
        </div>
    );
}
export default Appointment;