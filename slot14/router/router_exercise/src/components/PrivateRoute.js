import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  return isLoggedIn ? children : (
    <Navigate to="/login" state={{ message: 'Vui lòng đăng nhập để truy cập trang này' }} />
  );
}

export default PrivateRoute;