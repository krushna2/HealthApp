import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';

 import Header from './components/Header';
 import Home from './components/Home';
 import About from './components/About';
 import Doctors from './components/Doctors';
 import Appointment from './components/Appointment';
 import Register from './components/Register';
 import Login from './components/Login';
 import LabRegister from "./components/LabRegister";
import LabLogin from './components/LabLogin';
import Profile from './components/Profile';
import Lab from "./components/Lab";

function App() {

  return (
    
      <BrowserRouter>
        <div className="App">
            <Header/>
          <div>
            <Route exact path="/header" component={Header}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/appointment" component={Appointment}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/labregister" component={LabRegister}/>
            <Route exact path="/lablogin" component={LabLogin}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/lab" component={Lab} />
          </div>
        </div>
      </BrowserRouter>
    
    
  );
}

export default App;
