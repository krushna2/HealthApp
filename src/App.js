import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


 import Header from './components/Header';
 import Home from './components/Home';
 import About from './components/About';
 import Doctors from './components/Doctors';
 import Appointment from './components/Appointment';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/doctors" component={Doctors}/>
          <Route exact path="/appointment" component={Appointment}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
