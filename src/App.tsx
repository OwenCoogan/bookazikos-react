import React from 'react';
import './App.css';
import AuthorizationProvider from './providers/auth/useGetAuth';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/Header';
import AuthenticatedRoutes from './router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './router/UnauthenticatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { authAtom } from './store';
function App() {
  const [ auth ] = useRecoilState(authAtom);
  const routes = auth ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>;

  return (
    <AuthorizationProvider>
      <BrowserRouter>
      <Header
        authenticated={auth}
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
        {routes}
      </BrowserRouter>,
    </AuthorizationProvider>
  );
}

export default App;
