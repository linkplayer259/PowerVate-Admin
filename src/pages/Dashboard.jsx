import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardPage from '../components/pages/DashboardPage';
import UsersPage from '../components/pages/UsersPage';
import DoctorsPage from '../components/pages/DoctorsPage';
import DiscountPage from '../components/pages/DiscountPage';
import SettingsPage from '../components/pages/SettingsPage';

export default function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const data = localStorage.getItem('adminData');

    if (!token || !data) {
      navigate('/');
      return;
    }

    setAdminData(JSON.parse(data));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'users':
        return <UsersPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'discount':
        return <DiscountPage />;
      case 'settings':
        return <SettingsPage adminData={adminData} />;
      default:
        return <DashboardPage />;
    }
  };

  if (!adminData) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
      />
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, {adminData.name}</h2>
          <p className="text-gray-600 mt-1">{adminData.email}</p>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}
