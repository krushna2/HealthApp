import {
    SET_CURRENT_USER,
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