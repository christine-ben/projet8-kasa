import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './page/About';
import PageErreur from './page/Erreur';
import Home from './page/Home';
import HomePage from './page/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/HomePage/:id" element={<HomePage />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  );
}

export default App;
