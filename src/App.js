import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

 import Header from './components/Header';
 import Home from './components/Home';
 import About from './components/About';
 import Doctors from './components/Doctors';
 import Appointment from './components/Appointment';
 import Register from './components/Register';
 import Login from './components/Login';
 import LabRegister from "./components/LabRegister";
import LabLogin from './components/LabLogin';
import Lab from "./components/Lab";
import Dashboard from './components/Dashboard';
import LabDashboard from './components/LabDashboard';
import LabAppointment from './components/LabAppointment';
import PathoLabs from './components/PathoLabs';
import Hospitals from './components/Hospitals';
import HealthInsurance from './components/HealthInsurance';
import Footer from './components/Footer';
import Report from './components/Report';
import Reports from './components/Reports';

function App() {

  return (
    
      <BrowserRouter>
        <div className="App">
            <Header/>
          <div>
            <Route exact path="/header" component={Header}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/appointment" component={Appointment}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/labregister" component={LabRegister}/>
            <Route exact path="/lablogin" component={LabLogin}/>
            {/* <Route exact path="/profile" component={Profile}/> */}
            <Route exact path="/lab" component={Lab} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/labdashboard" component={LabDashboard}/>
            <Route exact path="/labappointment" component={LabAppointment} />
            <Route exact path="/patholabs" component={PathoLabs}/>
            <Route exact path="/hospitals" component={Hospitals}/>
            <Route exact path="/healthinsurance" component={HealthInsurance}/>
            <Route exact path="/report" component={Report}/>
            <Route exact path="/reports" component={Reports}/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    
    
  );
}

export default App;
