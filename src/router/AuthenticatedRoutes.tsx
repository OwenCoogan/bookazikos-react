import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/screens/authenticated/Dashboard';

export default function AuthenticatedRoutes() {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
