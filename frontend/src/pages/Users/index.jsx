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

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const PlusIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const SearchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const MoreVerticalIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="5" r="1" fill="currentColor"/>
    <circle cx="12" cy="19" r="1" fill="currentColor"/>
  </svg>
)

const RefreshIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
)

// Dummy Data
const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    avatar: 'https://i.pravatar.cc/150?img=10',
    role: 'Customer',
    status: 'Active',
    joinDate: 'Jan 15, 2026',
    totalSpent: '$2,450.00'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    avatar: 'https://i.pravatar.cc/150?img=11',
    role: 'Customer',
    status: 'Active',
    joinDate: 'Jan 10, 2026',
    totalSpent: '$1,230.00'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    role: 'Customer',
    status: 'Inactive',
    joinDate: 'Dec 28, 2025',
    totalSpent: '$0.00'
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.w@example.com',
    avatar: 'https://i.pravatar.cc/150?img=13',
    role: 'Admin',
    status: 'Active',
    joinDate: 'Nov 5, 2025',
    totalSpent: '$5,670.00'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    avatar: 'https://i.pravatar.cc/150?img=14',
    role: 'Customer',
    status: 'Active',
    joinDate: 'Jan 18, 2026',
    totalSpent: '$890.00'
  },
]

export default function UsersIndex() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [roleFilter, setRoleFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selectedUsers, setSelectedUsers] = useState([])

  const totalEntries = 12405
  const startEntry = (currentPage - 1) * rowsPerPage + 1
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries)

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map(u => u.id))
    }
  }

  const toggleSelect = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(u => u !== id))
    } else {
      setSelectedUsers([...selectedUsers, id])
    }
  }

  const getStatusBadge = (status) => {
    const styles = {
      'Active': 'bg-emerald-100 text-emerald-700',
      'Inactive': 'bg-gray-100 text-gray-700',
      'Suspended': 'bg-red-100 text-red-700'
    }
    return styles[status] || 'bg-gray-100 text-gray-700'
  }

  const getRoleBadge = (role) => {
    const styles = {
      'Admin': 'bg-purple-100 text-purple-700',
      'Customer': 'bg-blue-100 text-blue-700',
      'Tasker': 'bg-orange-100 text-orange-700'
    }
    return styles[role] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-50 px-4 md:px-8 pt-8 pb-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-3">
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <ChevronRightIcon />
          <span className="text-gray-900 font-medium">Users</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">User Management</h1>
            <p className="text-sm text-gray-600">Manage all platform users and their permissions.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <DownloadIcon />
              Export
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors">
              <PlusIcon />
              Add New User
            </button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Filter by:</span>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
              <option value="tasker">Tasker</option>
            </select>

            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors" title="Refresh">
              <RefreshIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-4 md:mx-8 my-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelect(user.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                      ● {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{user.joinDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">{user.totalSpent}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVerticalIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {users.map((user) => (
            <div key={user.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleSelect(user.id)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1"
                  />
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </div>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVerticalIcon />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                  {user.role}
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                  ● {user.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{user.joinDate}</span>
                <span className="font-semibold text-gray-900">{user.totalSpent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{startEntry}</span> to <span className="font-medium">{endEntry}</span> of <span className="font-medium">{totalEntries}</span> entries
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rows per page:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  className="px-2 py-1 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Prev
                </button>
                {[1, 2, 3].map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1.5 border rounded-md text-sm font-medium transition-colors ${
                      currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
