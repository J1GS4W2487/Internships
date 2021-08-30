
import React, { Component } from 'react';

import './App.css';
import Details from './Details';
import {Switch, Link, Route} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';





export default class App extends Component {

  
  render() {




    return (
    
          <>
          
      < Navbar />

      {/* < Link to="/">Hi</Link>
      < Link to = "/details">Registration</Link> */}

     <Switch>   
    
      <Route exact path="/details" component = {Details} /> 
      <Route exact path="/login" component = {Login} /> 
    
      </Switch> 

   
     
    </>
      
    )
  }
}


