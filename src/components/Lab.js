import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {Animated} from 'react-animated-css';
import Button from "@material-ui/core/Button";
import {listLab, makeReqToLab} from '../actions/userActions';

const Lab = () => {

    const dispatch = useDispatch();
    const labList = useSelector(state => state.labList)
    const {loading,labs,error}=labList;
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo}=userLogin
    console.log(userInfo)

    const requestHandler=(labId,user)=>{
        dispatch(makeReqToLab(labId,user))
    }

    useEffect(() => {
        dispatch(listLab())
        return () => {
            // cleanup
        }
    }, [labs,dispatch])
    return(
        <div >
            {
                error?<div>{error}</div>:
                loading?<div>Loading...Please Wait...</div>:
                labs.map( lab =>
                    <Animated key={lab._id} >
                        <div style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginTop:"2vh",paddingTop:"2vh"}}>
                        <Container >
                            <Row >
                                
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Name: <span style={{fontWeight:"normal"}}>{lab.labName}</span> </h5> 
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Location: <span style={{fontWeight:"normal"}}>{lab.labLocation}</span> </h5> 
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Contact: <span style={{fontWeight:"normal"}}>{lab.labContact}</span> </h5>
                                    </div>
                                </Col>
                                <Col md={6} sm={6}>
                                    <div>
                                        <h5>Lab Address: <span style={{fontWeight:"normal"}}>{lab.labAddress}</span> </h5>
                                    </div>
                                </Col>
                                <Col md={12} sm={12}>
                                    <div>
                                        <Button type="submit" style={{marginTop:"2vh",height:"7vh",backgroundColor:"#a5c422",color:"white",marginBottom:"2vh"}}
                                         onClick={() => requestHandler(lab._id,userInfo)} variant="contained">Make Request</Button>
                                    </div>
                                </Col>
                                
                            </Row>
                        </Container>
                        </div>
                    </Animated>
                )
            }
        </div>
    );
}
export default Lab;