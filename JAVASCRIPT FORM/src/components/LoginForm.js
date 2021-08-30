import React, { useState } from 'react';


function LoginForm({Login, error}) {

   np
    const [name, setPassword] = useState("");
  

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
    
            <div className="form-inner">
                <h2>Login</h2>
                
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="name" id="name" onChange ={e=> setName(e.target.value)} value={details.name} />
                </div>
                
                <div className= "form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange ={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div className= "form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange ={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                </div>

                <input type="submit" className="btn btn-primary" value="LOGIN"/>



            </div>
          
        </form>  
        
    )
}

export default LoginForm;

