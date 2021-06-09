import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col,InputGroup,Form,FormControl} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import { confirmUserApp, listLabAppointment } from '../actions/labActions';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

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

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const submitHandler=(e)=>{
        e.preventDefault();
        alert("appointment is accepted")
        // dispatch(confirmUserApp(props.labinfo,props.user,{date,time}));
    }
   

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
                                            <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained" onClick={handleOpen}>Accept</Button>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                className={classes.modal}
                                                open={open}
                                                onClose={handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                timeout: 500,
                                                }}
                                            >
                                                <Fade in={open}>
                                                <div className={classes.paper}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="date">
                                                            <Form.Label>Date:</Form.Label>
                                                            <Form.Control type="text" />
                                                            <Form.Text className="text-muted">
                                                            Date format:-DD/MM/YYYY
                                                            </Form.Text>
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Time</Form.Label>
                                                            <Form.Control type="text"/>
                                                        </Form.Group>
                                                        <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained" onClick={handleClose}>Confirm</Button>
                                                    </Form>
                                                </div>
                                                </Fade>
                                            </Modal>
                                            <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained">Cancel</Button>
                                        </div>
                                    </Col>
                                    </Row>
                            </Container>
                        </Animated> 
                    )   
            }  
               <div>
               </div>         
        </div>
    );
}
export default LabAppointment;