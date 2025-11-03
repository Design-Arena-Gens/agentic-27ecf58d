'use client'

import { useState } from 'react'
import FinanceDashboard from '@/components/FinanceDashboard'
import ManagementDashboard from '@/components/ManagementDashboard'
import ITDashboard from '@/components/ITDashboard'

type Role = 'finance' | 'management' | 'it'

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>('management')

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">IT Infrastructure Dashboard</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedRole('finance')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedRole === 'finance'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Finance
              </button>
              <button
                onClick={() => setSelectedRole('management')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedRole === 'management'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Management
              </button>
              <button
                onClick={() => setSelectedRole('it')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedRole === 'it'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                IT Team
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedRole === 'finance' && <FinanceDashboard />}
        {selectedRole === 'management' && <ManagementDashboard />}
        {selectedRole === 'it' && <ITDashboard />}
      </div>
    </main>
  )
}
