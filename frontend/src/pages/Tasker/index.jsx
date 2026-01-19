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

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const MoreVerticalIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="5" r="1" fill="currentColor"/>
    <circle cx="12" cy="19" r="1" fill="currentColor"/>
  </svg>
)

const BroomIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const WrenchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const TruckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)

const ZapIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const FlowerIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z"/>
  </svg>
)

const RefreshIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
)

// Service Category Icons
const categoryIcons = {
  'Cleaning': BroomIcon,
  'Plumbing': WrenchIcon,
  'Moving': TruckIcon,
  'Electrical': ZapIcon,
  'Gardening': FlowerIcon,
}

// Dummy Data
const taskers = [
  {
    id: 1,
    name: 'Alice Freeman',
    email: 'alice.freeman@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    serviceCategory: 'Cleaning',
    status: 'Verified',
    rating: 4.9,
    reviews: 164,
    earnings: '$2,450.00'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    serviceCategory: 'Plumbing',
    status: 'Pending',
    rating: 0,
    reviews: 0,
    earnings: '$0.00'
  },
  {
    id: 3,
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    serviceCategory: 'Moving',
    status: 'Verified',
    rating: 4.8,
    reviews: 98,
    earnings: '$1,250.00'
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    avatar: 'https://i.pravatar.cc/150?img=4',
    serviceCategory: 'Electrical',
    status: 'Suspended',
    rating: 5.0,
    reviews: 12,
    earnings: '$3,100.00'
  },
  {
    id: 5,
    name: 'Evan Wright',
    email: 'evan.wright@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    serviceCategory: 'Gardening',
    status: 'Verified',
    rating: 4.2,
    reviews: 8,
    earnings: '$500.00'
  },
]

export default function TaskerIndex() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [ratingFilter, setRatingFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selectedTaskers, setSelectedTaskers] = useState([])

  const totalEntries = 2450
  const startEntry = (currentPage - 1) * rowsPerPage + 1
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries)

  const toggleSelectAll = () => {
    if (selectedTaskers.length === taskers.length) {
      setSelectedTaskers([])
    } else {
      setSelectedTaskers(taskers.map(t => t.id))
    }
  }

  const toggleSelect = (id) => {
    if (selectedTaskers.includes(id)) {
      setSelectedTaskers(selectedTaskers.filter(t => t !== id))
    } else {
      setSelectedTaskers([...selectedTaskers, id])
    }
  }

  const getStatusBadge = (status) => {
    const styles = {
      'Verified': 'bg-emerald-100 text-emerald-700',
      'Pending': 'bg-amber-100 text-amber-700',
      'Suspended': 'bg-red-100 text-red-700'
    }
    return styles[status] || 'bg-gray-100 text-gray-700'
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
          <span className="text-gray-500">Management</span>
          <ChevronRightIcon />
          <span className="text-gray-900 font-medium">Taskers</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Tasker Management</h1>
            <p className="text-sm text-gray-600">View and manage all registered service providers.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <DownloadIcon />
              Export
            </button>
            <Link 
              to="/taskers/create" 
              className="flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              <PlusIcon />
              Add New Tasker
            </Link>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search by name, email or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Filter by:</span>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">Category</option>
              <option value="cleaning">Cleaning</option>
              <option value="plumbing">Plumbing</option>
              <option value="moving">Moving</option>
              <option value="electrical">Electrical</option>
              <option value="gardening">Gardening</option>
            </select>

            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
            </select>

            <button 
              className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              title="Refresh"
            >
              <RefreshIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-4 md:mx-8 my-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedTaskers.length === taskers.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tasker
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Service Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Earnings
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {taskers.map((tasker) => {
                const CategoryIcon = categoryIcons[tasker.serviceCategory] || BroomIcon
                return (
                  <tr key={tasker.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedTaskers.includes(tasker.id)}
                        onChange={() => toggleSelect(tasker.id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={tasker.avatar} 
                          alt={tasker.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{tasker.name}</div>
                          <div className="text-xs text-gray-500">{tasker.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
                        <CategoryIcon />
                        <span className="text-sm font-medium text-gray-700">{tasker.serviceCategory}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(tasker.status)}`}>
                        {tasker.status === 'Verified' && '● '}
                        {tasker.status === 'Pending' && '● '}
                        {tasker.status === 'Suspended' && '● '}
                        {tasker.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {tasker.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-amber-400" />
                          <span className="text-sm font-semibold text-gray-900">{tasker.rating}</span>
                          <span className="text-xs text-gray-400">({tasker.reviews})</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">-- (0)</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{tasker.earnings}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVerticalIcon />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {taskers.map((tasker) => {
            const CategoryIcon = categoryIcons[tasker.serviceCategory] || BroomIcon
            return (
              <div key={tasker.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedTaskers.includes(tasker.id)}
                      onChange={() => toggleSelect(tasker.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1"
                    />
                    <img 
                      src={tasker.avatar} 
                      alt={tasker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{tasker.name}</div>
                      <div className="text-xs text-gray-500">{tasker.email}</div>
                    </div>
                  </div>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVerticalIcon />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
                    <CategoryIcon />
                    <span className="text-xs font-medium text-gray-700">{tasker.serviceCategory}</span>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(tasker.status)}`}>
                    ● {tasker.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    {tasker.rating > 0 ? (
                      <>
                        <StarIcon className="w-4 h-4 text-amber-400" />
                        <span className="font-semibold text-gray-900">{tasker.rating}</span>
                        <span className="text-xs text-gray-400">({tasker.reviews})</span>
                      </>
                    ) : (
                      <span className="text-gray-400">No rating</span>
                    )}
                  </div>
                  <span className="font-semibold text-gray-900">{tasker.earnings}</span>
                </div>
              </div>
            )
          })}
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
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
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
