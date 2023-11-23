import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Home from './components/Home/Home';


function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={isSignIn ? <Home /> : <Login onSignup={() => setIsSignIn(true)} />}  />
      </Routes>
    </Router>
  );
}

export default App;






