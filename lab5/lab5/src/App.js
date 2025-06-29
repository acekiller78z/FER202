import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={
          <Container className="mt-4"><News /></Container>
        } />
        <Route path="/about" element={
          <Container className="mt-4"><About /></Container>
        } />
        <Route path="/contact" element={
          <Container className="mt-4"><Contact /></Container>
        } />
        <Route path="/quiz" element={
          <Container className="mt-4"><Quiz /></Container>
        } />
        <Route path="*" element={<h2>404 - Trang không tìm thấy</h2>} />
      </Routes>
    </div>
  );
}

export default App;