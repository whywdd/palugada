import { useState } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  pageHeader: {
    padding: '32px',
    paddingBottom: '20px',
    backgroundColor: '#F9FAFB'
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    marginBottom: '12px'
  },
  breadcrumbLink: {
    color: '#6B7280',
    textDecoration: 'none'
  },
  breadcrumbSep: {
    color: '#D1D5DB'
  },
  breadcrumbCurrent: {
    color: '#111827',
    fontWeight: '500'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 4px 0'
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0
  },
  actionsBar: {
    padding: '0 32px 20px',
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    backgroundColor: '#F9FAFB'
  },
  btnExport: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    cursor: 'pointer'
  },
  btnAdd: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    backgroundColor: '#3B82F6',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    cursor: 'pointer'
  },
  filtersBar: {
    padding: '20px 32px',
    backgroundColor: 'white',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  },
  searchBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 16px',
    backgroundColor: '#F9FAFB',
    borderRadius: '8px',
    border: '1px solid #E5E7EB'
  },
  searchIcon: {
    fontSize: '16px'
  },
  searchInput: {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: '14px',
    color: '#111827'
  },
  filterGroup: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  filterLabel: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#6B7280'
  },
  filterSelect: {
    padding: '6px 12px',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'white',
    color: '#374151',
    cursor: 'pointer'
  },
  btnRefresh: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  dataTable: {
    backgroundColor: 'white',
    margin: '0 32px 32px'
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '50px 2fr 1.2fr 1fr 1fr 1fr 100px',
    padding: '16px 20px',
    borderBottom: '1px solid #E5E7EB',
    fontSize: '11px',
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '50px 2fr 1.2fr 1fr 1fr 1fr 100px',
    padding: '16px 20px',
    borderBottom: '1px solid #F3F4F6',
    alignItems: 'center'
  },
  taskerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  taskerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#DBEAFE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '600',
    color: '#3B82F6'
  },
  taskerName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827'
  },
  taskerEmail: {
    fontSize: '13px',
    color: '#6B7280'
  },
  categoryBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 12px',
    backgroundColor: '#F3F4F6',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151'
  },
  statusBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  statusVerified: {
    backgroundColor: '#D1FAE5',
    color: '#059669'
  },
  statusPending: {
    backgroundColor: '#FEF3C7',
    color: '#D97706'
  },
  statusSuspended: {
    backgroundColor: '#FEE2E2',
    color: '#DC2626'
  },
  ratingDisplay: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px'
  },
  ratingValue: {
    fontWeight: '600',
    color: '#111827'
  },
  ratingCount: {
    color: '#9CA3AF',
    fontSize: '13px'
  },
  noRating: {
    color: '#9CA3AF'
  },
  earningsValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827'
  },
  btnMenu: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#6B7280'
  },
  tableFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderTop: '1px solid #E5E7EB'
  },
  paginationInfo: {
    fontSize: '14px',
    color: '#6B7280'
  },
  paginationControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  rowsLabel: {
    fontSize: '14px',
    color: '#6B7280'
  },
  rowsSelect: {
    padding: '4px 8px',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  pageButtons: {
    display: 'flex',
    gap: '4px'
  },
  pageBtn: {
    padding: '6px 12px',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    backgroundColor: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#374151'
  },
  pageBtnActive: {
    backgroundColor: '#3B82F6',
    color: 'white',
    border: '1px solid #3B82F6'
  },
  pageBtnDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
}

const taskersData = [
  {
    id: 1,
    name: 'Alice Freeman',
    email: 'alice.f@example.com',
    avatar: 'AF',
    category: 'Cleaning',
    categoryIcon: '🧹',
    status: 'Verified',
    rating: 4.9,
    reviews: 174,
    earnings: '$2,450.00',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.plumb@example.com',
    avatar: 'BS',
    category: 'Plumbing',
    categoryIcon: '🔧',
    status: 'Pending',
    rating: null,
    reviews: 0,
    earnings: '$0.00',
  },
  {
    id: 3,
    name: 'Charlie Davis',
    email: 'charlie.d@example.com',
    avatar: 'CD',
    category: 'Moving',
    categoryIcon: '📦',
    status: 'Verified',
    rating: 4.8,
    reviews: 96,
    earnings: '$1,250.00',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    avatar: 'DP',
    category: 'Electrical',
    categoryIcon: '⚡',
    status: 'Suspended',
    rating: 5.0,
    reviews: 12,
    earnings: '$3,100.00',
  },
  {
    id: 5,
    name: 'Evan Wright',
    email: 'evan.garden@example.com',
    avatar: 'EW',
    category: 'Gardening',
    categoryIcon: '🌱',
    status: 'Verified',
    rating: 4.2,
    reviews: 8,
    earnings: '$500.00',
  },
]

export default function TaskerIndex() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [categoryFilter, setCategoryFilter] = useState('Category')
  const [ratingFilter, setRatingFilter] = useState('Rating')
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const statusStyle = (status) => ({
    ...styles.statusBadge,
    ...(status === 'Verified'
      ? styles.statusVerified
      : status === 'Pending'
        ? styles.statusPending
        : styles.statusSuspended),
  })

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <div style={styles.pageHeader}>
        <div style={styles.breadcrumb}>
          <a href="#" style={styles.breadcrumbLink}>Home</a>
          <span style={styles.breadcrumbSep}>›</span>
          <a href="#" style={styles.breadcrumbLink}>Management</a>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbCurrent}>Taskers</span>
        </div>
        <h1 style={styles.pageTitle}>Tasker Management</h1>
        <p style={styles.pageSubtitle}>View and manage all registered service providers.</p>
      </div>

      <div style={styles.actionsBar}>
        <button style={styles.btnExport}>
          <span>📥</span>
          Export
        </button>
        <Link to="/taskers/create" style={{ ...styles.btnAdd, textDecoration: 'none' }}>
          <span>+</span>
          Add New Tasker
        </Link>
      </div>

      <div style={styles.filtersBar}>
        <div style={styles.searchBox}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search by name, email or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={styles.filterGroup}>
          <span style={styles.filterLabel}>Filter by:</span>
          <select
            style={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
          <select
            style={styles.filterSelect}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>Category</option>
            <option>Cleaning</option>
            <option>Plumbing</option>
            <option>Moving</option>
            <option>Electrical</option>
            <option>Gardening</option>
          </select>
          <select
            style={styles.filterSelect}
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option>Rating</option>
            <option>5 Stars</option>
            <option>4+ Stars</option>
            <option>3+ Stars</option>
          </select>
          <button style={styles.btnRefresh} title="Refresh">
            ⟳
          </button>
        </div>
      </div>

      <div style={styles.dataTable}>
        <div style={styles.tableHeader}>
          <div style={{ textAlign: 'center' }}>
            <input type="checkbox" />
          </div>
          <div>TASKER</div>
          <div>SERVICE CATEGORY</div>
          <div>STATUS</div>
          <div>RATING</div>
          <div>EARNINGS</div>
          <div>ACTIONS</div>
        </div>

        {taskersData.map((tasker) => (
          <div key={tasker.id} style={styles.tableRow}>
            <div style={{ textAlign: 'center' }}>
              <input type="checkbox" />
            </div>
            <div>
              <div style={styles.taskerInfo}>
                <div style={styles.taskerAvatar}>{tasker.avatar}</div>
                <div>
                  <div style={styles.taskerName}>{tasker.name}</div>
                  <div style={styles.taskerEmail}>{tasker.email}</div>
                </div>
              </div>
            </div>
            <div>
              <div style={styles.categoryBadge}>
                <span>{tasker.categoryIcon}</span>
                {tasker.category}
              </div>
            </div>
            <div>
              <span style={statusStyle(tasker.status)}>
                {tasker.status}
              </span>
            </div>
            <div>
              {tasker.rating ? (
                <div style={styles.ratingDisplay}>
                  <span>⭐</span>
                  <span style={styles.ratingValue}>{tasker.rating}</span>
                  <span style={styles.ratingCount}>({tasker.reviews})</span>
                </div>
              ) : (
                <div style={styles.ratingDisplay}>
                  <span style={styles.noRating}>-- (0)</span>
                </div>
              )}
            </div>
            <div>
              <span style={styles.earningsValue}>{tasker.earnings}</span>
            </div>
            <div>
              <button style={styles.btnMenu}>⋮</button>
            </div>
          </div>
        ))}

        <div style={styles.tableFooter}>
          <div style={styles.paginationInfo}>
            Showing <strong>1</strong> to <strong>5</strong> of <strong>2,450</strong> entries
          </div>
          <div style={styles.paginationControls}>
            <span style={styles.rowsLabel}>Rows per page:</span>
            <select
              style={styles.rowsSelect}
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <div style={styles.pageButtons}>
              <button style={{ ...styles.pageBtn, ...styles.pageBtnDisabled }} disabled>&lt; Prev</button>
              <button style={{ ...styles.pageBtn, ...styles.pageBtnActive }}>1</button>
              <button style={styles.pageBtn}>2</button>
              <button style={styles.pageBtn}>3</button>
              <button style={styles.pageBtn}>Next &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
