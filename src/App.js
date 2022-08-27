import React from 'react';

import Home from './pages/Home';
import Footer from './components/Footer';
import AppNavBar from './components/AppNavBar';

import './App.css';

function App() {
  return (
    <>
        <AppNavBar/>
        <Home />
        <Footer />
    </>
  );
}

export default App;