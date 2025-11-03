'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const monthlySpend = [
  { month: 'Jan', amount: 45000 },
  { month: 'Feb', amount: 48000 },
  { month: 'Mar', amount: 46500 },
  { month: 'Apr', amount: 51000 },
  { month: 'May', amount: 49500 },
  { month: 'Jun', amount: 52000 },
]

const costBreakdown = [
  { name: 'Cloud Services', value: 156000, color: '#3b82f6' },
  { name: 'Hardware', value: 89000, color: '#8b5cf6' },
  { name: 'Software Licenses', value: 67000, color: '#ec4899' },
  { name: 'Support & Maintenance', value: 43000, color: '#f59e0b' },
]

export default function FinanceDashboard() {
  const totalSpend = costBreakdown.reduce((sum, item) => sum + item.value, 0)
  const avgMonthlySpend = monthlySpend.reduce((sum, item) => sum + item.amount, 0) / monthlySpend.length

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Annual Spend</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">
            ${(totalSpend / 1000).toFixed(0)}K
          </div>
          <div className="mt-2 text-sm text-gray-600">Year to date</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Avg Monthly Cost</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">
            ${(avgMonthlySpend / 1000).toFixed(1)}K
          </div>
          <div className="mt-2 text-sm text-green-600">↓ 3.2% vs last quarter</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Budget Utilization</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">78%</div>
          <div className="mt-2 text-sm text-gray-600">$110K remaining</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Spending Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySpend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
              />
              <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {costBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Cost by Service</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AWS Cloud</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$28,500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$342,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">↓ 5.2%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Azure Services</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$12,200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$146,400</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">↑ 2.1%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hardware Depreciation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$7,400</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$89,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">→ 0%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Software Licenses</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$5,600</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$67,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">↓ 1.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
