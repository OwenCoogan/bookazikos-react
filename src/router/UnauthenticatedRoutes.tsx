import { Route, Routes } from 'react-router-dom';
import Home from '../components/screens/unauthenticated/Home';
import Login from '../components/screens/unauthenticated/Login';

export default function UnauthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
