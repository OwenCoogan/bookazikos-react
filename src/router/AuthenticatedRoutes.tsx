import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/screens/authenticated/Dashboard';
import PostList from '../components/screens/authenticated/PostList';
import PostPage from '../components/screens/authenticated/PostPage';
import NotFoundPage from '../components/screens/NotFoundPage';
import CreatePost from '../components/screens/unauthenticated/create-post/CreatePost';

export default function AuthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="*" element={<NotFoundPage/>} />
      <Route path="post/:id" element={<PostPage />} />
    </Routes>
  )
}
