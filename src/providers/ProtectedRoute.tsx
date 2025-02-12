import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!user) {
    return <Navigate to="/auth/signup" state={{ from: location }} replace />;
  }


  if (user && (location.pathname === '/auth/signup' || location.pathname === '/auth/login')) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};