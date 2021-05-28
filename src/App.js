import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


 import Header from './components/Header';
 import Home from './components/Home';
 import About from './components/About';
 import Doctors from './components/Doctors';
 import Appointment from './components/Appointment';
 import Register from './components/Register';
 import Login from './components/Login';
 import LabRegister from "./components/LabRegister";
 import { Provider } from "react-redux";
 import store from "./store";

function App() {
  
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/appointment" component={Appointment}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/labregister" component={LabRegister}/>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
