import { Route, Routes } from 'react-router-dom';
import PostList from '../screens/authenticated/PostList';
import PostPage from '../screens/unauthenticated/PostPage';
import NotFoundPage from '../screens/NotFoundPage';
import About from '../screens/unauthenticated/About/About';
import ContactFormScreen from '../screens/unauthenticated/ContactFormScreen';
import Home from '../screens/unauthenticated/Home';
import Login from '../screens/unauthenticated/Login/Login';
import Register from '../screens/unauthenticated/Register/Register';

export default function UnauthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="*" element={<NotFoundPage/>} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactFormScreen/>} />
    </Routes>
  )
}
