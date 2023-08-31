import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Topics from './components/Topics';
import OrgCommitte from './components/OrgCommitte';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-conference" element={<About />} />
          <Route exact path="/organising-committee" element={<OrgCommitte />} />
          <Route exact path="/conference-topics" element={<Topics />} />
        </Routes>
      <Footer />
      </>
    </Router>
  );
}

export default App;
