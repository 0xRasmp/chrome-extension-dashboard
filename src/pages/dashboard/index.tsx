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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gray-800/50 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-400 text-sm">Welcome back, John</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-300 hover:text-white bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-200">
                <span className="sr-only">Notifications</span>
                <span className="text-lg">🔔</span>
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 bg-gray-700/50 rounded-xl p-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <span className="text-white text-sm font-medium">John Doe</span>
                <button
                  onClick={handleLogout}
                  className="ml-2 text-gray-400 hover:text-white text-sm px-2 py-1 rounded-lg hover:bg-gray-600 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="relative bg-gray-800/30 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'analytics', name: 'Analytics', icon: '📈' },
              { id: 'projects', name: 'Projects', icon: '📁' },
              { id: 'settings', name: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-3 border-b-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300 hover:bg-gray-700/30 rounded-t-lg'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {mockStats.map((stat, index) => (
            <div key={stat.name} className="bg-gray-800/50 backdrop-blur-xl overflow-hidden shadow-2xl rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                      index === 1 ? 'bg-gradient-to-r from-green-600 to-green-700' :
                      index === 2 ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                      'bg-gradient-to-r from-pink-600 to-pink-700'
                    }`}>
                      <span className="text-xl">📊</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <dt className="text-sm font-medium text-gray-400 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart Section */}
            <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-700/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Analytics Overview</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">7D</button>
                    <button className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-600/20 rounded-lg">30D</button>
                    <button className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">90D</button>
                  </div>
                </div>
                <div className="h-80 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center border border-gray-600/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <p className="text-gray-400 text-lg">Chart component will be added here</p>
                    <p className="text-gray-500 text-sm">Beautiful analytics visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-700/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Recent Projects</h3>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View all</button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((project) => (
                    <div key={project} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-xl">📁</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Project {project}</p>
                          <p className="text-gray-400 text-sm">Updated 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                          Active
                        </span>
                        <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
                          →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-700/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    <span className="mr-2">+</span>
                    New Project
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-600/50 text-sm font-medium rounded-xl text-gray-300 bg-gray-700/50 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200">
                    <span className="mr-2">📊</span>
                    Generate Report
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-600/50 text-sm font-medium rounded-xl text-gray-300 bg-gray-700/50 hover:bg-gray-700 hover:border-gray-500 transition-all duration-200">
                    <span className="mr-2">👥</span>
                    Invite Team Member
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-700/50">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {mockRecentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-700/30 transition-all duration-200">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center text-sm shadow-lg">
                          {activity.avatar}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
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