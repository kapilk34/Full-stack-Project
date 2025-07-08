import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Dashboard from '../Pages/Dashboard';
import ProtectedRoute from '../Components/ProtectedRoute';
import AdminDashboard from '../Pages/AdminDashboard';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/adminDashboard',
    element: (
      <ProtectedRoute>
        <AdminDashboard/>
      </ProtectedRoute>
    )
  }
]);
export default router;