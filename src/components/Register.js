import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import Doctor from '../images/Doctor3.png';
import {registerUser} from "../actions/userActions"

const Register = (props) =>{
    const labelStyle = {
        color:'#393939',
        fontWeight:'500',
        display:'inline-block',
        marginBottom:'5px'
    }

    const formControl = {
        background:'#f9f9f9',
        border:'none',
        borderRadius:'3px',
        fontSize:'14px',
        fontWeight:'normal',
        marginBottom:'15px',
        transition:'all ease-in-out 0.4s',
        display:'block',
        width:'100%',
        color:'#555',
        height:'45px'
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNum, setMobileNum] = useState(0)
    const [adharNum, setAdharNum] = useState(0)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const {loading,error}=userRegister

    const submitHandler=(e)=>{
        e.preventDefault()
        const newUser={
            name,
            email,
            mobileNum,
            adharNum,
            password,
            password2
        }
        if(name && email && mobileNum && adharNum && password && password2 )
            if(password===password2)
                dispatch(registerUser(newUser,props.history))
            else
                alert("Password Not match")
        else
            alert("Please fill all fields")
    }
    return(
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <img alt="register" style={{height:"100%",marginTop:"5vh"}} className="img-responsive" src={Doctor}></img>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="appointment-form" role="form" onSubmit={submitHandler} >
                            <Animated animationIn="flipInX">
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Registration</h2>
                                </div>
                                <div>
                                    {loading && <div style={{font:"bold",color:"green"}} >Loading....</div> }
                                    {error && <div style={{color:"red"}} >{error}</div>}
                                </div>
                            </Animated> 
                            <Animated animationIn="flipInX">
                                <div>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Name</Form.Label>
                                            <Form.Control style={formControl} 
                                            type="text" onChange={ e => setName(e.target.value)} placeholder="Full Name"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Email</Form.Label>                                   
                                            <Form.Control style={formControl} type="email"                                     
                                            onChange={ e => setEmail(e.target.value)} placeholder="Your Email"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Phone Number</Form.Label>                                        
                                            <Form.Control style={formControl} type="tel"                     
                                            onChange={ e => setMobileNum(e.target.value)} placeholder="Phone"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle} htmlFor="selectdep">Adhar Number</Form.Label>
                                            <Form.Control style={formControl} type="text" 
                                            onChange={ e => setAdharNum(e.target.value)} placeholder="Adhar Number"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle}>Password</Form.Label>
                                            
                                            <Form.Control style={formControl} type="password" 
                                            
                                            onChange={ e => setPassword(e.target.value)} placeholder="Enter Password"/>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <Form.Label style={labelStyle} htmlFor="selectdep">Confirm Password</Form.Label>
                                           
                                            <Form.Control style={formControl} type="password" 
                                         
                                            onChange={ e => setPassword2(e.target.value)} placeholder="Re-enter password"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Group>
                                                <Button type="submit" style={{width:"100%",marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white"}} variant="contained">Register</Button>
                                            </Form.Group>
                                            <div><a href="/login">Already have an account</a></div>
                                            <div><a href="/labregister">For Lab Registration</a></div>
                                        </Col>
                                    </Row>
                                </div>
                            </Animated>
                        </Form>
                    </Col>     
                </Row>
            </Container>
        </div>
    );
}

export default Register;