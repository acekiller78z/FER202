import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          } />
          <Route path="/post/:id" element={
            <PrivateRoute>
              <PostDetail />
            </PrivateRoute>
          } />
          <Route path="*" element={<h2>404 - Trang không tìm thấy</h2>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;