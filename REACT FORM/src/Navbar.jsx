import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
export class Navbar extends Component {
    render(){
      return(
      <>


    
              <div>
              <ul id="nav">
                <p>MANAGER</p>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            
           
              </ul>
            </div>
</>
      )
    }
}

export default Navbar;