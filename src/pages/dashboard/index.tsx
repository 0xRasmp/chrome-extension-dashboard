import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Mock data for dashboard
const mockStats = [
  { name: 'Total Users', value: '2,847', change: '+12%', changeType: 'positive' },
  { name: 'Active Sessions', value: '1,234', change: '+5%', changeType: 'positive' },
  { name: 'Revenue', value: '$45,231', change: '+20%', changeType: 'positive' },
  { name: 'Conversion Rate', value: '3.24%', change: '-1%', changeType: 'negative' }
]

const mockRecentActivity = [
  { id: 1, user: 'John Doe', action: 'Created new project', time: '2 minutes ago', avatar: '👤' },
  { id: 2, user: 'Jane Smith', action: 'Updated settings', time: '5 minutes ago', avatar: '👤' },
  { id: 3, user: 'Mike Johnson', action: 'Completed task', time: '10 minutes ago', avatar: '👤' },
  { id: 4, user: 'Sarah Wilson', action: 'Added new member', time: '15 minutes ago', avatar: '👤' }
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out...')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">D</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">Dashboard</h1>
                <p className="text-gray-400 text-sm">Welcome back, John</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <span className="sr-only">Notifications</span>
                <span className="text-lg">🔔</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <span className="text-white text-sm">John Doe</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white text-sm px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'analytics', name: 'Analytics' },
              { id: 'projects', name: 'Projects' },
              { id: 'settings', name: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {mockStats.map((stat) => (
            <div key={stat.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <dt className="text-sm font-medium text-gray-400 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                      }`}>
                      {stat.change}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chart Section */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Analytics Overview</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded hover:bg-gray-600 transition-colors">7D</button>
                    <button className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-600/20 rounded">30D</button>
                    <button className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded hover:bg-gray-600 transition-colors">90D</button>
                  </div>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-gray-400">Chart component will be added here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Recent Projects</h3>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">View all</button>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((project) => (
                    <div key={project} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg border border-gray-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-lg">📁</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Project {project}</p>
                          <p className="text-gray-400 text-sm">Updated 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          Active
                        </span>
                        <button className="text-gray-400 hover:text-white">→</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    + New Project
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors">
                    📊 Generate Report
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-lg text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors">
                    👥 Invite Team Member
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {mockRecentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-sm">
                          {activity.avatar}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 