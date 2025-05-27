import { React } from "react";
import Footer from "./components/Footer.js";
import AppNavBar from "./components/AppNavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import "./App.css";
import Affiliates from "./pages/AffiliatesLinks.js";
import Services from "./pages/Services.js";

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
              <Services />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route
          path="/affiliate-links"
          element={
            <>
              <AppNavBar />
              <Affiliates />
              <Footer />
            </>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<h1>404! This page doesn't exist</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
