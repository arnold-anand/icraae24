import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Committe from './components/Committe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conference from './components/Conference';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/committe" element={<Committe />} />
          <Route exact path="/about-conference" element={<Conference />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
