import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { listReport } from '../actions/userActions';

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


const Reports = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [pregnancies, setPregnancies] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [skinThickness, setSkinThickness] = useState(0);
    const [insulin, setInsulin] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);
    const [age, setAge] = useState(0);
    const handleOpen = (report) => {
        setOpen(true);
        setPregnancies(report.pregnancies);
        setGlucose(report.glucose);
        setBloodPressure(report.bloodPressure);
        setSkinThickness(report.skinThickness);
        setInsulin(report.insulin);
        setBmi(report.bmi);
        setDiabetesPedigreeFunction(report.diabetesPedigreeFunction);
        setAge(report.age);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    const reportList = useSelector(state => state.reportList)
    const {loading,reports,error}=reportList

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listReport(userInfo.id))
        return () => {
            // cleanup
        }
    }, [reports])
    return(
        <div>
            {
                error?<div>{error}</div>:
                loading?<div>Loading...Please wait...</div>:
                reports.map(report => 
                    <Animated key={report._id} >
                            <Container >
                                    <Row>
                                        <Col md={10} sm={10} style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                                            <div>
                                                {
                                                    report.prediction==="Diabetic"?
                                                    <div style={{color:"red"}}  >
                                                        Risk Found
                                                    </div>:
                                                    <div style={{color:"green"}}>
                                                        Out OF Danger
                                                    </div>
                                                }
                                            </div>
                                        </Col>
                                        <Col md={2} sm={2}>
                                            <Button type="submit" style={{marginTop:"4vh",height:"5vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}} variant="contained" onClick={()=>handleOpen(report)} >View</Button>
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
                                                    <h2 id="transition-modal-title">Test Report</h2>
                                                    <div>
                                                        <h4>Pregnancies : <span> {pregnancies} </span> </h4>
                                                        <h4>Glucose : <span> {glucose} </span></h4>
                                                        <h4>BloodPressure : <span> {bloodPressure} </span></h4>
                                                        <h4>SkinThickness : <span> {skinThickness} </span></h4>
                                                        <h4>Insulin : <span> {insulin} </span></h4>
                                                        <h4>BMI : <span> {bmi} </span></h4>
                                                        <h4>DiabetesPedigreeFunction : <span> {diabetesPedigreeFunction} </span></h4>
                                                        <h4>Age : <span> {age} </span></h4>
                                                    </div>
                                                </div>
                                                </Fade>
                                            </Modal>
                                        </Col>
                                        
                                    </Row>
                            </Container>
                        </Animated>
                    )
            }
        </div>
    );
}
export default Reports;