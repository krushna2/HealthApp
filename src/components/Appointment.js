import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import {listUserAppointment} from '../actions/userActions';
// import Button from "@material-ui/core/Button";

const Appointment = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const userAppointmentList = useSelector(state => state.userAppointmentList)
    const {loading,appointmentList,error}=userAppointmentList

    useEffect(() => {
            dispatch(listUserAppointment(userInfo.id))
        return () => {
            // cleanup
        }
    }, [appointmentList])
    return(
        <div>
            {
                error ? <div>{error}</div> :
                loading ? <div>Loading...</div>:
                    appointmentList.map(appointment =>
                        <Animated key={appointment._id} >
                            <Container >
                                <Row style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Lab Name: <span style={{fontWeight:"normal"}}>{appointment.labName}</span></h5> 
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Lab Location: <span style={{fontWeight:"normal"}}>{appointment.labLocation}</span></h5> 
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Lab Email: <span style={{fontWeight:"normal"}}>{appointment.labEmail}</span></h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Lab Contact: <span style={{fontWeight:"normal"}}>{appointment.labContact}</span></h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Lab Address: <span style={{fontWeight:"normal"}}>{appointment.labAddress}</span></h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Appointment status: <span style={{fontWeight:"normal"}}>{appointment.status ? <span>Confirmed</span>: <span>Pending</span> } </span></h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Appointment Date: <span style={{fontWeight:"normal"}}>{appointment.date }</span> </h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>Appointment Time: <span style={{fontWeight:"normal"}}>{appointment.time }</span> </h5>
                                        </div>
                                    </Col>
                                    </Row>
                            </Container>
                        </Animated>
                    )   
            }  
        </div>
    );
}
export default Appointment;