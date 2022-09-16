import React from 'react';
import './App.css';
import AuthorizationProvider from './providers/auth/useGetAuth';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/Header';
import { useAuthorizationContext } from './providers/auth/AuthContext';
import AuthenticatedRoutes from './router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './router/UnauthenticatedRoutes';
function App() {
  const { authenticated } = useAuthorizationContext();
  return (
    <AuthorizationProvider>
      <BrowserRouter>
      <Header
        authenticated={authenticated}
      />
        {
          authenticated === true ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>
        }
      </BrowserRouter>,
    </AuthorizationProvider>
  );
}

export default App;
