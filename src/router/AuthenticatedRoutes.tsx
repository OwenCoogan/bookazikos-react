import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/screens/authenticated/Dashboard';
import NotFoundPage from '../components/screens/NotFoundPage';
import CreatePost from '../components/screens/unauthenticated/create-post/CreatePost';

export default function AuthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}
