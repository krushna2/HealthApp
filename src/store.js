import { createStore,combineReducers ,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { listLabAppointmentReducer, registerLabReducer,loginLabReducer } from "./reducers/labReducer";
import { listLabReducer,
   listUserAppointmentReducer, 
   loginUserReducer, 
   registerUserReduce } from "./reducers/userReducer";

const userInfo=localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const labInfo=localStorage.getItem("labInfo") ? JSON.parse(localStorage.getItem("labInfo")) : null;  
// const appointmentList=localStorage.getItem("userAppointmentList")?localStorage.getItem("userAppointmentList"):[];

const initialState = {userLogin:{userInfo},
              
};
  
const middleware = [thunk];

const reducer = combineReducers({
  userRegister:registerUserReduce,
  userLogin:loginUserReducer,
  userAppointmentList:listUserAppointmentReducer,
  labList:listLabReducer,
  labRegister:registerLabReducer,
  labLogin:loginLabReducer,
  labAppointmentList:listLabAppointmentReducer,
})
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    
  )
);
export default store;