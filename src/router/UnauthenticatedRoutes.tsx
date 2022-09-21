import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../components/screens/NotFoundPage';
import Home from '../components/screens/unauthenticated/Home';
import Login from '../components/screens/unauthenticated/Login/Login';
import Register from '../components/screens/unauthenticated/Register/Register';

export default function UnauthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}
