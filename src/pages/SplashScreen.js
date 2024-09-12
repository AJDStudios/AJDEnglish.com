import React from 'react';
import '../styles/SplashScreen.css';
import Splash from '../splash.webp';

const SplashScreen = () => {
  return (
    <div className="splash-screen" data-testid="splash-screen">
      <div className="splash-header">
        <img src={Splash} alt="Selfie of AD with students" className="splash-image" />
      </div>
        <div className="splash-text">
          <p>
          Welcome to A J D English!
          <br></br>
          <br></br>
          Experience flexible, student-led lessons designed to build your confidence and communication skills. 
          <br></br>
          <br></br>
          Forget the traditional classroom—our online sessions are tailored to your needs, allowing you to learn at your pace, on your schedule. 
          <br></br>
          <br></br>
          Speak fluently and comfortably in any situation.
          </p>
        </div>
    </div>
  );
};

export default SplashScreen;