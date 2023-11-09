import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Topics from "./components/Topics";
import OrgCommitte from "./components/OrgCommitte";
import AdvCommittee from "./components/AdvCommittee";
import Contact from "./components/Contact";
import Downloads from "./components/Downloads";
import Publication from "./components/Publication";

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-conference" element={<About />} />
          <Route exact path="/organising-committee" element={<OrgCommitte />} />
          <Route exact path="/advisory-committee" element={<AdvCommittee />} />
          <Route exact path="/conference-topics" element={<Topics />} />
          <Route exact path="/publication" element={<Publication />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/downloads" element={<Downloads />} />
        </Routes>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
