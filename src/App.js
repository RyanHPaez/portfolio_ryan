import React from "react";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  Navigation,  Home,  Skill,  Contact} from "./components";

function App() {
  return (
    <div className="App">
     <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
     
      
    </Routes>
    {/* <Footer /> */}
  </Router>
    </div>
  );
}

export default App;
