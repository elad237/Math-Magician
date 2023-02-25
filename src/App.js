import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Nav from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <div className="component-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
