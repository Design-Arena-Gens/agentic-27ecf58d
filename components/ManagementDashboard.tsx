'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts'

const performanceData = [
  { month: 'Jan', uptime: 99.9, incidents: 2 },
  { month: 'Feb', uptime: 99.8, incidents: 3 },
  { month: 'Mar', uptime: 99.95, incidents: 1 },
  { month: 'Apr', uptime: 99.92, incidents: 2 },
  { month: 'May', uptime: 99.97, incidents: 1 },
  { month: 'Jun', uptime: 99.94, incidents: 2 },
]

const resourceUtilization = [
  { resource: 'Compute', utilized: 72, available: 28 },
  { resource: 'Storage', utilized: 68, available: 32 },
  { resource: 'Network', utilized: 55, available: 45 },
  { resource: 'Database', utilized: 81, available: 19 },
]

export default function ManagementDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">System Uptime</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">99.94%</div>
          <div className="mt-2 text-sm text-green-600">↑ 0.02% vs last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Active Incidents</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">3</div>
          <div className="mt-2 text-sm text-gray-600">2 low, 1 medium</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Avg Response Time</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">1.2h</div>
          <div className="mt-2 text-sm text-green-600">↓ 15min vs target</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Team Utilization</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">84%</div>
          <div className="mt-2 text-sm text-gray-600">Optimal range</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Uptime Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis domain={[99.7, 100]} stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                formatter={(value: number) => [`${value}%`, 'Uptime']}
              />
              <Line type="monotone" dataKey="uptime" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Resource Utilization</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resourceUtilization} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
              <YAxis dataKey="resource" type="category" stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Legend />
              <Bar dataKey="utilized" stackId="a" fill="#3b82f6" name="Utilized" />
              <Bar dataKey="available" stackId="a" fill="#e5e7eb" name="Available" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Mean Time To Recovery (MTTR)</div>
                <div className="text-xs text-gray-500">Average time to resolve incidents</div>
              </div>
              <div className="text-2xl font-semibold text-gray-900">2.4h</div>
            </div>
            <div className="h-px bg-gray-200"></div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Service Level Agreement (SLA)</div>
                <div className="text-xs text-gray-500">Compliance with SLA targets</div>
              </div>
              <div className="text-2xl font-semibold text-green-600">98.5%</div>
            </div>
            <div className="h-px bg-gray-200"></div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Capacity Planning</div>
                <div className="text-xs text-gray-500">Months until capacity limit</div>
              </div>
              <div className="text-2xl font-semibold text-gray-900">8.2</div>
            </div>
            <div className="h-px bg-gray-200"></div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">User Satisfaction Score</div>
                <div className="text-xs text-gray-500">IT support satisfaction rating</div>
              </div>
              <div className="text-2xl font-semibold text-gray-900">4.7/5</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Database backup completed</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Security patch deployed</div>
                <div className="text-xs text-gray-500">5 hours ago</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Network latency spike detected</div>
                <div className="text-xs text-gray-500">8 hours ago</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Storage capacity expanded</div>
                <div className="text-xs text-gray-500">1 day ago</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Monthly maintenance completed</div>
                <div className="text-xs text-gray-500">2 days ago</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Critical incident resolved</div>
                <div className="text-xs text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
