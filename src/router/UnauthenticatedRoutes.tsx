import { Route, Routes } from 'react-router-dom';
import PostList from '../components/screens/authenticated/PostList';
import PostPage from '../components/screens/authenticated/PostPage';
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
      <Route path="/posts" element={<PostList />} />
      <Route path="post/:id" element={<PostPage />} />
    </Routes>
  )
}
