import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation} from "./components";
import React from "react";
// import { useLocation } from "@reach/router";
import AminmationRoutes from "./components/AminmationRoutes";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navigation />
       <AminmationRoutes />
      </Router>
    </div>
  );
}

export default App;