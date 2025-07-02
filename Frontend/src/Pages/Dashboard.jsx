import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart3, ShoppingBag, TrendingUp, Users, Activity, Search, Bell, Settings, HelpCircle, LogOut } from 'lucide-react';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { Card, CardHeader, CardContent } from '@mui/material';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, logout } = useAuth();

  useEffect(() => {
    fetch('http://localhost:5000/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch users:', err);
        setLoading(false);
      });
  }, [token]);

  // Sample data for charts
  const monthlyRevenue = [4000, 3000, 6000, 8000, 5000, 9000, 12000, 11000, 15000, 13000, 17000, 20000];
  const userGrowth = [100, 150, 200, 300, 500, 700, 1000, 1300, 1700, 2000, 2400, 3000];
  const productCategories = [
    { id: 0, value: 35, label: 'Electronics' },
    { id: 1, value: 25, label: 'Clothing' },
    { id: 2, value: 20, label: 'Home Goods' },
    { id: 3, value: 15, label: 'Books' },
    { id: 4, value: 5, label: 'Other' },
  ];
  const trafficSources = {
    direct: 45,
    organic: 25,
    referral: 20,
    social: 10
  };

  const statCards = [
    { title: 'Total Revenue', value: '$75,500', change: '+10%', color: 'bg-blue-600', icon: BarChart3 },
    { title: 'Total Orders', value: '31,500', change: '+8%', color: 'bg-purple-600', icon: ShoppingBag },
    { title: 'Total Sales', value: '$24,500', change: '+12%', color: 'bg-green-500', icon: TrendingUp },
    { title: 'Total Users', value: `${users.length}`, change: '+5%', color: 'bg-cyan-500', icon: Users }
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold p-4 m-6">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>

      <div className='flex h-screen'>
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r border-gray-200">
          <nav className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-green-600 bg-green-50 rounded-lg">
              <BarChart3 size={20} />
              <span className="font-medium">Overview</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 hover:bg-purple-50 text-gray-600 hover:text-green-600 rounded-lg">
              <Users size={20} />
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 hover:bg-purple-50 text-gray-600 hover:text-green-600 rounded-lg">
              <Activity size={20} />
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 hover:bg-purple-50 text-gray-600 hover:text-green-600 rounded-lg">
              <ShoppingBag size={20} />
              <span>Manage Products</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 hover:bg-purple-50 text-gray-600 hover:text-green-600 rounded-lg">
              <Settings size={20} />
              <span>Settings</span>
            </a>
            <button
              onClick={logout}
              className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-lg"
            >
              <LogOut size={20} />
              <span>Log out</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className={`${card.color} rounded-xl p-6 text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">{card.title}</p>
                      <p className="text-2xl font-bold mt-1">{card.value}</p>
                      <p className="text-sm text-white/90 mt-1">{card.change}</p>
                    </div>
                    <Icon size={32} className="text-white/60" />
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <Card className="p-4">
              <CardHeader title="Monthly Revenue" subheader="Last 12 months" />
              <CardContent>
                <LineChart
                  xAxis={[{ data: Array.from({length: 12}, (_, i) => i + 1), scaleType: 'band' }]}
                  series={[
                    {
                      data: monthlyRevenue,
                      label: 'Revenue ($)',
                      color: '#3b82f6',
                    },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>

            {/* User Growth Chart */}
            <Card className="p-4">
              <CardHeader title="User Growth" subheader="Last 12 months" />
              <CardContent>
                <BarChart
                  xAxis={[{ data: Array.from({length: 12}, (_, i) => i + 1), scaleType: 'band' }]}
                  series={[
                    {
                      data: userGrowth,
                      label: 'Users',
                      color: '#10b981',
                    },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Categories */}
            <Card className="p-4">
              <CardHeader title="Product Categories" subheader="By sales volume" />
              <CardContent>
                <PieChart
                  series={[
                    {
                      data: productCategories,
                      innerRadius: 30,
                      outerRadius: 100,
                      paddingAngle: 5,
                      cornerRadius: 5,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card className="p-4">
              <CardHeader title="Traffic Sources" subheader="Last 30 days" />
              <CardContent>
                <BarChart
                  xAxis={[{ data: Object.keys(trafficSources), scaleType: 'band' }]}
                  series={[
                    {
                      data: Object.values(trafficSources),
                      label: 'Traffic (%)',
                      color: '#8b5cf6',
                    },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Table (placeholder) */}
          <Card className="mt-8">
            <CardHeader title="Recent Activity" />
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Order #{1000 + item}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user{item}@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item} hour{item !== 1 ? 's' : ''} ago</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {item % 2 === 0 ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}