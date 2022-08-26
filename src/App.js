import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AppNavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <>
    <Router>
        <div><AppNavBar/></div>

          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route render={() => <h1>404! This page doesn't exist</h1>} />
        </Routes>
        </Router>

        <div className='heroImage'>
        <div className='overlay'></div>
      </div>

          <Footer />
    </>
  );
}

export default App;