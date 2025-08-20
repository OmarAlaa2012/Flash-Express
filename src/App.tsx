import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthPage } from './components/auth/AuthPage';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { AdminDashboard } from './components/dashboard/AdminDashboard';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { CourierDashboard } from './components/dashboard/CourierDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/auth" />;
};

const DashboardHome: React.FC = () => {
  const { user } = useAuth();

  switch (user?.role) {
    case 'admin':
    case 'hr':
      return <AdminDashboard />;
    case 'courier':
      return <CourierDashboard />;
    case 'user':
    default:
      return <UserDashboard />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="analytics" element={<AdminDashboard />} />
            <Route path="shipments" element={<div>Shipments Management</div>} />
            <Route path="users" element={<div>User Management</div>} />
            <Route path="applications" element={<div>Courier Applications</div>} />
            <Route path="deliveries" element={<CourierDashboard />} />
            <Route path="earnings" element={<div>Earnings Details</div>} />
            <Route path="track" element={<div>Package Tracking</div>} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;