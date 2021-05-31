import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import Button from "@material-ui/core/Button";
import {Animated} from 'react-animated-css';
import Doctor from '../images/Doctor3.png';
import { loginUser } from '../actions/userActions';

const Login = (props) =>{
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo,loading,error}=userLogin
    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {
            //cleanup
        }
    }, [userInfo,props.history])

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(loginUser({email,password}))
    }

    return(
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={6}>
                        <Animated>
                            <img alt="login" style={{height:"100%",marginTop:'5vh'}} className="img-responsive" src={Doctor}></img>
                        </Animated>
                    </Col>
                    <Col md={6} sm={6}>
                        <Form className="appointment-form" role="form" onSubmit={submitHandler} >
                            <Animated animationIn="flipInX">
                                <div className="section-title" style={{paddingBottom:'20px'}}>
                                    <h2 style={{marginTop:'5vh'}}>Login</h2>
                                </div>
                                <div>
                                    {loading && <div style={{font:"bold",color:"green"}} >Loading....</div> }
                                    {error && <div style={{color:"red"}} >{error}</div>}
                                </div>
                            </Animated>
                            <Animated animationIn="flipInX">
                                <div>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>E-mail</Form.Label>
                                            <Form.Control style={formControl} type="email" 
                                            onChange={ e => setEmail(e.target.value)}  placeholder="User E-mail"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Label style={labelStyle}>Password</Form.Label>
                                            <Form.Control style={formControl} type="password" 
                                            onChange={ e => setPassword(e.target.value)} placeholder="Enter Password"/>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Form.Group>
                                                <Button type="submit" style={{width:"100%",marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white"}} variant="contained">Login</Button>
                                            </Form.Group>
                                            <a href="/register">New User?</a>
                                            <div>
                                                <a href="/lablogin">For Lab Login</a>
                                            </div>
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

export default Login;