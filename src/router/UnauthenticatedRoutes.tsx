import { Route, Routes } from 'react-router-dom';
import CreatePost from '../components/screens/unauthenticated/create-post/CreatePost';
import Home from '../components/screens/unauthenticated/Home';
import Login from '../components/screens/unauthenticated/Login/Login';
import Register from '../components/screens/unauthenticated/Register/Register';

export default function UnauthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}
