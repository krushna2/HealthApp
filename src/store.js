import { createStore,combineReducers ,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { listUserAppointmentReducer, loginUserReducer, registerUserReduce } from "./reducers/userReducer";

const userInfo=localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null; 
const appointmentList=localStorage.getItem("userAppointmentList")?JSON.parse(localStorage.getItem("userAppointmentList")):[];

const initialState = {userLogin:{userInfo},
      userAppointmentList:{appointmentList}
};
const middleware = [thunk];

const reducer = combineReducers({
  userRegister:registerUserReduce,
  userLogin:loginUserReducer,
  userAppointmentList:listUserAppointmentReducer
})
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;