import { Route, Routes } from 'react-router-dom';
import Home from '../components/screens/unauthenticated/Home';
import Login from '../components/screens/unauthenticated/Login/Login';
import Register from '../components/screens/unauthenticated/Register/Register';

export default function UnauthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}
