import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Hospital from '../images/hospital.jpg';
import Button from "@material-ui/core/Button";
import { listHospitals } from '../actions/userActions';

const Hospitals = (props) => {
    const [latitude, setLat] = useState(0.0);
    const [longitude, setLog] = useState(0.0);
    var crd="";

    function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        setLat(crd.latitude);
        setLog(crd.longitude);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
  
    // const findPosition=()=>{
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(setPosition);
    //       } else { 
    //         alert('Geolocation is not supported by this browser.')
    //       }
    // }
    // const setPosition=(position)=>{
    //     setLat(position.coords.latitude);
    //     setLog(position.coords.longitude);
    // }
  
    const dispatch = useDispatch();
    useEffect(() => {
        if(crd.latitude && crd.longitude){
            dispatch(listHospitals(props.history,{latitude,longitude}));
        }
        return () => {
            // cleanup
        }
    }, [latitude,longitude])

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      
      
      

    return(
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <img alt="register" style={{height:"100%",marginTop:"5vh"}} className="img-responsive" src={Hospital}></img>
                    </Col>
                    <Col md={6} sm={6}>
                        <Animated>
                            <div style={{height:"100%",marginTop:"5vh"}}>
                                <p>
                                A patient approaching a doctor expects medical treatment with all the knowledge and skill that the doctor possesses to bring relief to his medical problem.
                                The relationship takes the shape of a contract retaining the essential elements of tort. A doctor owes certain duties to his patient and a breach of any of these duties gives a cause of action for negligence against the doctor.
                                The doctor has a duty to obtain prior informed consent from the patient before carrying out diagnostic tests and therapeutic management. The services of the doctors are covered under the provisions of the Consumer Protection Act, 1986 and a patient can seek redressal of grievances from the Consumer Courts. 
                                Case laws are an important source of law in adjudicating various issues of negligence arising out of medical treatment.
                                </p>    
                                <p>
                                    For maintain above relation and provide some helps to patient, we provide a facility called nearby hospital.
                                    We shows you to the best hospitals from your area using your location and provide their address and information releated to them.
                                </p>
                                <Button type="button" style={{width:"100%",height:"7vh",backgroundColor:"#a5c422",color:"white"}} onClick={()=>navigator.geolocation.getCurrentPosition(success, error, options)} variant="contained">Find Hospitals</Button>
                            </div>
                        </Animated>    
                    </Col>     
                </Row>
            </Container>
        </div>
    );
}

export default Hospitals;