import React from 'react';
import './App.css';
import AuthorizationProvider from './providers/auth/useGetAuth';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/Header';
import { useAuthorizationContext } from './providers/auth/AuthContext';
import AuthenticatedRoutes from './router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './router/UnauthenticatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/store';
function App() {
  const { authenticated } = useAuthorizationContext();
  return (
    <AuthorizationProvider>
      <BrowserRouter>
      <Header
        authenticated={authenticated}
      />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {
          authenticated === true ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>
        }
      </BrowserRouter>,
    </AuthorizationProvider>
  );
}

export default App;
