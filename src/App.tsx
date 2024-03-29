import React, { useEffect } from 'react';
import './App.css';
import './providers/localization/i18next';
import AuthorizationProvider from './providers/auth/useGetAuth';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/Header';
import AuthenticatedRoutes from './router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './router/UnauthenticatedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { authAtom } from './store';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from './components/UI/Footer';
import HeaderV2 from './components/UI/HeaderV2';

function App() {
  const [ auth,setAuth ] = useRecoilState(authAtom);
  const routes = auth ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes/>;
  const queryClient = new QueryClient()

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      axios.post("http://localhost:6950/auth/check-user-token", {
        token: localStorage.getItem("token")
      })
      .then((response) => {
        setAuth(true);
      })
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
    <AuthorizationProvider>
      <BrowserRouter>
      <HeaderV2
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
        <Footer/>
      </BrowserRouter>,
    </AuthorizationProvider>
    </QueryClientProvider>
  );
}

export default App;
