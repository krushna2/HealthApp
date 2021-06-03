import { LAB_APP_LIST_FAILED, LAB_APP_LIST_SUCCESS, LAB_LOADING, LAB_LOGIN_FAILED, LAB_REGISTER_FAILED, LAB_REGISTER_REQUEST, SET_CURRENT_LAB } from "../actions/labActionTypes";
 
    const isEmpty = require("is-empty");
    const initialState = {
      isAuthenticated: false,
      labInfo: {},
      loading: false
    };
    export const loginLabReducer = (state = initialState, action)=> {
      switch (action.type) {
        case SET_CURRENT_LAB:
          return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            labInfo: action.payload,
            loading:false
          };
        case LAB_LOADING:
          return {
            ...state,
            loading: true
          };
        case LAB_LOGIN_FAILED:
          return {
            error:action.payload,
            loading:false
          }
        default:
          return state;
      }
    }
  
    export const registerLabReducer=(state = {}, action)=>{
        switch(action.type){
          case LAB_REGISTER_REQUEST:
            return {loading:true}
          
          case LAB_REGISTER_FAILED:
            return {loading:false,error:action.payload}
          
          default:
            return state;
        }
    }
  
    export const listLabAppointmentReducer=(state={appointmentList:[],loading:true},action)=>{
        switch(action.type){
          // case USER_APP_LIST_REQUEST:
          //   return {...state,loading:true,appointmentList:[]}
          case LAB_APP_LIST_SUCCESS:
            return {...state,loading:false,appointmentList:action.payload}
          case LAB_APP_LIST_FAILED:
            return {...state,loading:false,error:action.payload}
          default:
            return state;
        }
    }
  
    // export const listLabReducer=(state={labs:[],loading:true},action)=>{
    //     switch(action.type){
    //       case LAB_LIST_SUCCESS:
    //         return {...state,loading:false,labs:action.payload};
    //       case LAB_LIST_FAILED:
    //         return {...state,loading:false,error:action.payload};
    //       default:
    //         return state;
    //     }
    // }