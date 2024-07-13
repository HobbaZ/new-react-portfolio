import { useState, useEffect, React } from "react";
import Footer from "./components/Footer";
import AppNavBar from "./components/AppNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import DodgeBlocks from "./pages/games/DodgeBlocks/Main";
import Games from "./pages/Games";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with AppNavBar and Footer */}
        <Route
          path="/"
          element={
            <>
              <AppNavBar />
              <About />
              <Projects />
              {/*<Games />*/}
              <ContactMe />
              <Footer />
            </>
          }
        />

        {/* Routes without AppNavBar and Footer */}
        <Route path="/games/dodge-blocks" element={<DodgeBlocks />} />

        {/* 404 Route */}
        <Route path="*" element={<h1>404! This page doesn't exist</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
