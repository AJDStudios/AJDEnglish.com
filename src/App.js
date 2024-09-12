import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from "./components/Footer";
import Services from "./pages/Services.js";
import AboutAD from "./pages/AboutAD.js";
import Testimonials from "./pages/Testimonials.js";
import MyMission from "./pages/MyMission.js";
import Contact from "./pages/Contact.js";
import SplashScreen from './pages/SplashScreen.js';
import './styles/App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Set this flag to indicate if the app is still loading or ready

  // Simulate loading process
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="app">
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/Services" element={<Services />} /> 
            <Route path="/AboutAD" element={<AboutAD />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/MyMission" element={<MyMission />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer /> 
        </Router>
      )}
    </div>
  );
};

export default App;
