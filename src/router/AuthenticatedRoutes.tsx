import { Route, Routes } from 'react-router-dom';
import Dashboard from '../screens/authenticated/Dashboard';
import EditUser from '../screens/authenticated/edit-user/EditUser';
import PostList from '../screens/authenticated/PostList';
import PostPage from '../screens/unauthenticated/PostPage';
import UserProfile from '../screens/authenticated/UserProfile';
import UserSettings from '../screens/authenticated/user-settings/UserSettings';
import NotFoundPage from '../screens/NotFoundPage';
import CreatePost from '../screens/authenticated/create-post/CreatePost';
import Home from '../screens/unauthenticated/Home';
import DraftsList from '../screens/authenticated/DraftList';
import About from '../screens/unauthenticated/About/About';
import SendAdminInvitation from '../screens/authenticated/send-admin-invitation/SendAdminInvitation';

export default function AuthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/send-admin-invitation" element={<SendAdminInvitation />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/drafts" element={<DraftsList />} />
      <Route path="*" element={<NotFoundPage/>} />
      <Route path="post/:id" element={<PostPage />} />
      <Route path="/user-settings" element={<UserSettings/>} />
      <Route path="/edit-user" element={<EditUser />} />
      <Route path="user/:id" element={<UserProfile/>} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}
