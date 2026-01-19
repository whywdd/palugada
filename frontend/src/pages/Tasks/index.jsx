import { useState } from 'react'
import { Link } from 'react-router-dom'

// SVG Icons  
const HomeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

const SearchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const FilterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const tasks = [
  { id: 1, title: 'House Cleaning', customer: 'Sarah Johnson', tasker: 'Alice Freeman', category: 'Cleaning', status: 'Completed', price: '$120', date: 'Jan 19, 10:30 AM' },
  { id: 2, title: 'Office Deep Clean', customer: 'Michael Chen', tasker: 'Alice Freeman', category: 'Cleaning', status: 'In Progress', price: '$280', date: 'Jan 19, 2:00 PM' },
  { id: 3, title: 'Sink Repair', customer: 'Emily Rodriguez', tasker: 'Bob Smith', category: 'Plumbing', status: 'Scheduled', price: '$95', date: 'Jan 20, 9:00 AM' },
  { id: 4, title: 'Home Moving', customer: 'James Wilson', tasker: 'Charlie Davis', category: 'Moving', status: 'Completed', price: '$450', date: 'Jan 18, 8:00 AM' },
  { id: 5, title: 'Garden Maintenance', customer: 'Lisa Anderson', tasker: 'Evan Wright', category: 'Gardening', status: 'Cancelled', price: '$75', date: 'Jan 19, 11:00 AM' },
]

export default function TasksIndex() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const getStatusBadge = (status) => {
    const styles = {
      'Completed': 'bg-emerald-100 text-emerald-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Scheduled': 'bg-amber-100 text-amber-700',
      'Cancelled': 'bg-red-100 text-red-700'
    }
    return styles[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-50 px-4 md:px-8 pt-8 pb-5">
        <div className="flex items-center gap-2 text-sm mb-3">
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <ChevronRightIcon />
          <span className="text-gray-900 font-medium">Tasks</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Task Management</h1>
            <p className="text-sm text-gray-600">View and manage all service tasks on the platform.</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors">
            <CalendarIcon />
            View Calendar
          </button>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Filter:</span>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm">
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="scheduled">Scheduled</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm">
              <option value="all">All Categories</option>
              <option value="cleaning">Cleaning</option>
              <option value="plumbing">Plumbing</option>
              <option value="moving">Moving</option>
              <option value="gardening">Gardening</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-8 my-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Tasker</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">{task.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{task.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{task.tasker}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                      {task.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">{task.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{task.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-gray-100">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{task.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{task.customer} → {task.tasker}</div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(task.status)}`}>
                  {task.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{task.date}</span>
                <span className="font-semibold text-gray-900">{task.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
