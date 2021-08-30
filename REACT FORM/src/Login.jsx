import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Login extends Component {
 


     

      validation1(){  
        var admin=document.getElementById("admin").value;  
        var password=document.getElementById("password").value;  
         
    
        if(admin==='' || password===''){  
        alert("Please eneter all credentials"); 
      
        
        }  

        else if (admin==='admin123' && password==='admin'){
            alert("hi")
            window.location.href = "/details";
            return <Link to = "/details"></Link>
         
          
        }

        else{
            alert("Invalid Credentials")
            
        
          
        }      
         }  
    
      loginSubmit = (e) =>{
        // localStorage.setItem('data','data')
        if (this.validation1()){
          e.preventDefault();
   
        }
      
      }
      
      render() {
   
        return (
          <div className="App">
            <h2>ADMIN PANEL LOGIN</h2>
    
   
            <form ref="myForm1" className="myForm1" id="formreset1">
    
              <input type="text"  id="admin" placeholder="email" className="formField1" />
              <input type="password" id="password" placeholder="password" className="formField1" />
              
    
              <button onClick={(e)=>this.loginSubmit(e)} className="myButton">Submit</button>
            </form>
          
            <br/>
           
          
          </div>
        );
      }
    
}

export default Login;
