import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav >
        <ul className="nav-links">
            <Link className="link" style={navStyle} to="/"><li>Home</li></Link>
            <Link className="link" style={navStyle} to="/courses"><li>Find a Course</li></Link>
            <Link  className="link" style={navStyle} to="/clothes"><li>What to Wear</li></Link>
            <Link  className="link" style={navStyle} to="/clubs"><li>What Clubs to Use</li></Link>
            <Link  className="link" style={navStyle} to="/play"><li>How to Play</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;