import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import AppNavBar from "./components/AppNavBar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="appContainer">
          <AppNavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route render={() => <h1>404! This page doesn't exist</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
