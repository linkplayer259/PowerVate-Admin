export default function SettingsPage({ adminData }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Settings</h3>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Profile Information</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue={adminData?.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue={adminData?.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              />
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Change Password</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
              />
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Update Password
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Application Settings</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-900 transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </label>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">SMS Alerts</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-900 transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
