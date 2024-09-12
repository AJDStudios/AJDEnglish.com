import React from "react";
import { Link } from 'react-router-dom';
import { Navigation } from './Nav.js';
import DeskNavbar from "./DeskNav.js";
import logo from "../logo.webp";
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <Link to="/" className="site-logo">
                <img src={logo} alt="Logo" />
            </Link>
            

            <Navigation />

            <DeskNavbar />
        </div>            
    </header>
  );
}

export default Header;
