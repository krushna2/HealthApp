import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col,InputGroup,Modal,FormControl} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import { listLabAppointment } from '../actions/labActions';
// import Button from "@material-ui/core/Button";

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Set Appointment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Date</InputGroup.Text>
                    <FormControl aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Time</InputGroup.Text>
                    <FormControl aria-label="First name" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained">Confirm</Button>
            </Modal.Footer>
          </Modal>
        );
      }

const LabAppointment = () => {

    const dispatch = useDispatch()

    const labLogin = useSelector(state => state.labLogin)
    const {labInfo}=labLogin
    const labAppointmentList = useSelector(state => state.labAppointmentList)
    const {loading,appointmentList,error}=labAppointmentList
   
    useEffect(() => {
            dispatch(listLabAppointment(labInfo.labId))
        return () => {
            // cleanup
        }
    }, [appointmentList])

    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
            {
                error ? <div>{error}</div> :
                loading ? <div>Loading...</div>:
                    appointmentList.map(appointment =>
                        <Animated key={appointment._id} >
                            <Container style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                <Row>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5>User Name: {appointment.name} </h5> 
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5> Email: {appointment.email} </h5>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6}>
                                        <div>
                                            <h5> Contact No: {appointment.mobileNum} </h5>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12}>
                                        <div>
                                            <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained" onClick={() => setModalShow(true)}>Accept</Button>
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                            <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained">Cancel</Button>
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
export default LabAppointment;