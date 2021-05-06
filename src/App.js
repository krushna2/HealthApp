import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


 import Header from './components/Header';
 import Home from './components/Home';
 import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
