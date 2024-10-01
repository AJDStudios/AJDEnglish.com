import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function CustomLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);


    return (
      <nav className="nav">
        <span
          className={`burger ${showMenu ? 'open' : ''}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? '✕' : '☰'}
        </span>
  
        {showMenu && (
          <div className="menu">
            <ul className="nav-links">
              <CustomLink to="/Services">Services</CustomLink>          
              <CustomLink to="/AboutAD">About AD</CustomLink>
              <CustomLink to="/Testimonials">Testimonials</CustomLink>
              <CustomLink to="/MyMission">My Mission</CustomLink>
              <CustomLink to="/Contact">Contact</CustomLink>
              <CustomLink to="/Qualifications">Qualifications</CustomLink>
            </ul>
          </div>
        )}
      </nav>
    );
  }
  
export { CustomLink, Navigation };
