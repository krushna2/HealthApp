import {
  LAB_LIST_FAILED,
  LAB_LIST_SUCCESS,
    SET_CURRENT_USER,
  USER_APP_LIST_FAILED,
  // USER_APP_LIST_REQUEST,
  USER_APP_LIST_SUCCESS,
    USER_LOADING,
    USER_LOGIN_FAILED
  } from "../actions/userActionTypes";
import { USER_REGISTER_REQUEST, USER_REGISTER_FAILED } from "../actions/userActionTypes";
  const isEmpty = require("is-empty");
  const initialState = {
    isAuthenticated: false,
    userInfo: {},
    loading: false
  };
  export const loginUserReducer = (state = initialState, action)=> {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          userInfo: action.payload,
          loading:false
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      case USER_LOGIN_FAILED:
        return {
          error:action.payload,
          loading:false
        }
      default:
        return state;
    }
  }

  export const registerUserReduce=(state = {}, action)=>{
      switch(action.type){
        case USER_REGISTER_REQUEST:
          return {loading:true}
        
        case USER_REGISTER_FAILED:
          return {loading:false,error:action.payload}
        
        default:
          return state;
      }
  }

  export const listUserAppointmentReducer=(state={appointmentList:[],loading:true},action)=>{
      switch(action.type){
        // case USER_APP_LIST_REQUEST:
        //   return {...state,loading:true,appointmentList:[]}
        case USER_APP_LIST_SUCCESS:
          return {...state,loading:false,appointmentList:action.payload}
        case USER_APP_LIST_FAILED:
          return {...state,loading:false,error:action.payload}
        default:
          return state;
      }
  }

  export const listLabReducer=(state={labs:[],loading:true},action)=>{
      switch(action.type){
        case LAB_LIST_SUCCESS:
          return {...state,loading:false,labs:action.payload};
        case LAB_LIST_FAILED:
          return {...state,loading:false,error:action.payload};
        default:
          return state;
      }
  }