import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {

  // const admin = {
  //   email: "admin@ad.com",
  //   password: "password"
  // }




  return (
    <div className="App">
     {(user.email !== "") ? (
       <div className="HELLO!">
         <h2>Welcome, <span>{user.name}</span></h2>
          <button> logout</button>
          </div>
     ) : (
       <LoginForm Login = { Login } error = { error } />
     )}
    </div>
  );
}

export default App;
