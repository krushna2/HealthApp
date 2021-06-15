import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import Cookie from 'js-cookie';

import { LAB_APP_LIST_FAILED, LAB_APP_LIST_SUCCESS, LAB_APP_UPDATE, LAB_APP_UPDATE_FAILED, LAB_LOADING, LAB_LOGIN_FAILED, LAB_REGISTER_FAILED, LAB_REGISTER_REQUEST, SET_CURRENT_LAB } from "./labActionTypes";
// Register User
export const registerLab = (labData, history) => dispatch => {
  dispatch({
      type:LAB_REGISTER_REQUEST
  })
  axios
    .post("/api/labs/register",labData)
    .then(res => history.push("/lablogin")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: LAB_REGISTER_FAILED,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginLab = labData => dispatch => {
  dispatch(setLabLoading)
  axios
    .post("/api/labs/login",labData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage

      const { token } = res.data;
      localStorage.setItem("labJwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      localStorage.setItem("labInfo",JSON.stringify(decoded))
      // Set current user
      dispatch(setCurrentLab(decoded));
    })
    .catch(err =>
      dispatch({  
        type: LAB_LOGIN_FAILED,
        payload: err.response
      })
    );
};
// Set logged in user
export const setCurrentLab = decoded => {
  return {
    type: SET_CURRENT_LAB,
    payload: decoded
  };
};
// User loading
export const setLabLoading = () => {
  return {
    type: LAB_LOADING
  };
};
// Log user out
export const logoutLab = (history) => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("labJwtToken");
  localStorage.removeItem("labInfo");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentLab({}))

  history.push("/lablogin")
};


export const listLabAppointment=(labID)=>async(dispatch)=>{
    try{  
        // dispatch({type:USER_APP_LIST_REQUEST})
        // console.log("labID ",labID)
        const appointments = await axios.get("/api/labs/appointments/request/"+labID);
        // console.log("from server app request ",appointments)
        dispatch({type:LAB_APP_LIST_SUCCESS,payload:appointments.data})     
    }catch(err){
      dispatch({type:LAB_APP_LIST_FAILED,payload:err.message})
    }
}

export const confirmUserApp=(labInfo,user,labAppId,slot)=>async(dispatch)=>{
    try{  
          const lab = {...labInfo,...slot}
          const appointment= await axios.patch("/api/users/appointment/"+user.userId,lab);
          if(appointment){
            alert("Appointment is confirmed for "+user.userName+" on "+slot.date+" at "+slot.time);
            const updated = await axios.patch("/api/labs/appointment/request/"+labInfo.labId,labAppId);
            console.log("update user app list ",updated.data)
            if(updated){
              dispatch({type:LAB_APP_LIST_SUCCESS,payload:updated.data})
            }
          }
    }catch(err){
      alert("Error is occured "+err.message)
    }
}

export const sendReport=(report,userId)=>async(dispatch)=>{
    const result= await axios.post('https://diabeteshealthapp.herokuapp.com/predict',report);
    if(result){
      alert(result)
    }
}
// export const listLab=()=>async (dispatch)=>{
//   try{
//       const labs =  await axios.get("/api/labs/");
//       console.log("lab list ",labs)
//       dispatch({type:LAB_LIST_SUCCESS,payload:labs.data})
 
//   }catch(err){
//     dispatch({type:LAB_LIST_FAILED,payload:err.message})
//   }
// }