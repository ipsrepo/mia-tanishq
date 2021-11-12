import React from 'react';
import Header from './Components/Layouts/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SignupIntro from './Components/SignupIntro';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className='row'>
          <Login/>
          <SignupIntro />
          
      </div>
      {/* <Signup /> */}

    </div>
  );
}

export default App;
