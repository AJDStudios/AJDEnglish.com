import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navigation } from './Nav.js';
import DeskNavbar from "./DeskNav.js";
import logo from "../logo.webp";
import '../styles/Header.css';
import { FaCog } from 'react-icons/fa';


function Header() {
  const [showSettings, setShowSettings] = useState(false);

function handleSettingsToggle() {
  setShowSettings(!showSettings);
}

  return (
    <header className="header">
        <div className="container">
            <Link to="/" className="site-logo">
                <img src={logo} alt="Logo" />
            </Link>
            

            <Navigation />

            <DeskNavbar />

            <div className="settings">
              <FaCog className="settings-icon" onClick={handleSettingsToggle} />
              {showSettings && (
                <div className="settings-dropdown">
                  <ul>
                    <li>Theme: Light/Dark</li>
                    <li> English: 🏴󠁧󠁢󠁥󠁮󠁧󠁿</li>
                    <li> French: 🇫🇷</li>
                    <li> German: 🇩🇪</li>
                    <li> Spanish: 🇪🇸</li>
                    <li> Czech: 🇨🇿</li>
                    <li> Russian: 🇷🇺</li>
                    <li> Welsh: 🏴󠁧󠁢󠁷󠁬󠁳󠁿</li>
                    <li> Ukrainian: 🇺🇦</li>
                    <li> Latin: 💻</li>
                  </ul>
                </div>
              )}
            </div>
        </div>            
    </header>
  );
}

export default Header;
