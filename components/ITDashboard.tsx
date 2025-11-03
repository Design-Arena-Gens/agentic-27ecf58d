'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'

const serverStatus = [
  { name: 'Web Servers', online: 28, offline: 2 },
  { name: 'App Servers', online: 15, offline: 0 },
  { name: 'Database Servers', online: 12, offline: 1 },
  { name: 'Cache Servers', online: 8, offline: 0 },
]

const networkTraffic = [
  { time: '00:00', inbound: 45, outbound: 32 },
  { time: '04:00', inbound: 38, outbound: 28 },
  { time: '08:00', inbound: 82, outbound: 65 },
  { time: '12:00', inbound: 95, outbound: 78 },
  { time: '16:00', inbound: 88, outbound: 71 },
  { time: '20:00', inbound: 65, outbound: 52 },
]

export default function ITDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Total Servers</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">66</div>
          <div className="mt-2 text-sm text-green-600">63 online, 3 offline</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">CPU Usage</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">68%</div>
          <div className="mt-2 text-sm text-gray-600">Across all servers</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Memory Usage</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">74%</div>
          <div className="mt-2 text-sm text-yellow-600">2 servers &gt; 90%</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">Open Tickets</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">12</div>
          <div className="mt-2 text-sm text-gray-600">4 critical, 8 normal</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Server Status by Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serverStatus}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
              />
              <Legend />
              <Bar dataKey="online" fill="#10b981" name="Online" radius={[8, 8, 0, 0]} />
              <Bar dataKey="offline" fill="#ef4444" name="Offline" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Network Traffic (Gbps)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={networkTraffic}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
              />
              <Legend />
              <Line type="monotone" dataKey="inbound" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} name="Inbound" />
              <Line type="monotone" dataKey="outbound" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} name="Outbound" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Critical Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Database Server DB-03 offline</div>
                <div className="text-xs text-gray-600 mt-1">Primary database server unresponsive. Failover to replica initiated.</div>
                <div className="text-xs text-gray-500 mt-1">15 minutes ago</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">High memory usage on WEB-12, WEB-15</div>
                <div className="text-xs text-gray-600 mt-1">Memory usage exceeding 90% threshold. Consider scaling.</div>
                <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">SSL certificate expiring in 7 days</div>
                <div className="text-xs text-gray-600 mt-1">Certificate for api.example.com needs renewal.</div>
                <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Disk space critical on APP-08</div>
                <div className="text-xs text-gray-600 mt-1">Only 2GB remaining on /var partition. Immediate action required.</div>
                <div className="text-xs text-gray-500 mt-1">3 hours ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure Details</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Storage Capacity</span>
                <span className="font-medium text-gray-900">68% used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">234 TB of 345 TB used</div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Bandwidth Utilization</span>
                <span className="font-medium text-gray-900">55% used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Peak: 95 Gbps of 100 Gbps capacity</div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Backup Completion</span>
                <span className="font-medium text-gray-900">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Last backup: 2 hours ago</div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500">Active Connections</div>
                  <div className="text-lg font-semibold text-gray-900">1,247</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Requests/sec</div>
                  <div className="text-lg font-semibold text-gray-900">3,421</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Avg Response Time</div>
                  <div className="text-lg font-semibold text-gray-900">142ms</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Error Rate</div>
                  <div className="text-lg font-semibold text-gray-900">0.08%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Server Inventory</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Server ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uptime</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">WEB-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Web Server</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Online</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">62%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">71%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42d 18h</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">APP-05</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">App Server</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Online</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">78%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">82%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">58%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28d 5h</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DB-03</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Database</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Offline</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">--</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">WEB-12</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Web Server</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Warning</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">68%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">92%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">67%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35d 12h</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CACHE-02</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cache Server</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Online</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">56%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">52d 3h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
