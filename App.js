import React from 'react';
import './App.css';
import Nav from './Nav';
import Clothes from './Clothes';
import Clubs from './Clubs';
import Play from './Play';
import Courses from './Courses';
import Home from './Home';
import Step from './Step';
import Laststep from './Laststep';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path ="/clothes" element={<Clothes />}/>
          <Route path ="/clubs" element={<Clubs />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/courses/:id" element={<Step />}/>
          <Route path="/courses/:id/:num" element={<Laststep />}/>
          <Route path="/play" element={<Play />}/>
        </Routes>
        < Footer />
      </div>
    </Router>
  );
}


export default App;