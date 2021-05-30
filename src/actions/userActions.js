import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  USER_REGISTER_FAILED,USER_REGISTER_REQUEST,
  SET_CURRENT_USER,
  USER_LOADING,
  USER_LOGIN_FAILED,
  USER_APP_LIST_FAILED,
  USER_APP_LIST_SUCCESS,
  USER_APP_LIST_REQUEST
} from "./userActionTypes";
// Register User
export const registerUser = (userData, history) => dispatch => {
  dispatch({
      type:USER_REGISTER_REQUEST
  })
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  dispatch(setUserLoading)
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage

      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      localStorage.setItem("userInfo",JSON.stringify(decoded))
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err.response
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = (history) => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("userInfo");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
 
};

export const listUserAppointment=(userID)=>async(dispatch)=>{
    try{  
          dispatch({type:USER_APP_LIST_REQUEST})
          const {appointments} = await axios.get("/api/users/appointments/"+userID);
          if(appointments){
            localStorage.setItem("userAppointmentList",JSON.stringify(appointments))
            dispatch({type:USER_APP_LIST_SUCCESS,payload:appointments})
          }else{
            dispatch({type:USER_APP_LIST_SUCCESS,payload:[]})
          }      
    }catch(err){
      dispatch({type:USER_APP_LIST_FAILED,payload:err.message})
    }
}