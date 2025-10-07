export default function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '1,234', color: 'bg-blue-100 text-blue-900' },
    { label: 'Total Doctors', value: '45', color: 'bg-green-100 text-green-900' },
    { label: 'Active Discounts', value: '12', color: 'bg-purple-100 text-purple-900' },
    { label: 'Revenue', value: '$45,230', color: 'bg-yellow-100 text-yellow-900' }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Dashboard Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">New user registered</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Doctor profile updated</span>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">New discount created</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
