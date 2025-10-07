export default function DiscountPage() {
  const discounts = [
    { id: 1, code: 'WELCOME20', discount: '20%', status: 'Active', used: 45, limit: 100 },
    { id: 2, code: 'SUMMER50', discount: '50%', status: 'Active', used: 23, limit: 50 },
    { id: 3, code: 'NEWYEAR30', discount: '30%', status: 'Expired', used: 100, limit: 100 }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Discount Management</h3>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
          Create Discount
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {discounts.map((discount) => (
              <tr key={discount.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{discount.code}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{discount.discount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    discount.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {discount.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {discount.used} / {discount.limit}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-900 h-2 rounded-full"
                      style={{ width: `${(discount.used / discount.limit) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-900 hover:text-blue-700 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
