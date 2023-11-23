import React, { useState } from 'react';
import './Login.css';

const Login = ({onSignup}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Login successful");
    onSignup(); 
  };
  
  return (
    <div>
      <h1>Sign up your Account</h1>
        <input
          type="email" placeholder='Email'
          value={email} required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password" placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button onClick={handleSignIn}>SignIn</button>

      
    </div>
  );
};

export default Login;



