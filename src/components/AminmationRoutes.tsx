import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import {  Home, Skill, Contact } from "../components";
// import { useLocation } from "@reach/router";
import {AnimatePresence} from "framer-motion"

function AminmationRoutes() {
    const location= useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location ={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AminmationRoutes