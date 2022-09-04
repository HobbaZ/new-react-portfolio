import React from 'react';

import Content from './pages/Content';
import Footer from './components/Footer';
import AppNavBar from './components/AppNavBar';

import './App.css';

function App() {

  return (
    <div>
        <AppNavBar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;