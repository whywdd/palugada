const styles = {
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '32px'
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
  headerActions: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  btnSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer'
  },
  btnPrimary: {
    padding: '8px 20px',
    backgroundColor: '#3B82F6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  grid: {
    display: 'grid',
    gap: '20px',
    marginBottom: '24px'
  },
  gridFour: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  gridTwo: {
    gridTemplateColumns: '1.5fr 1fr'
  },
  card: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #E5E7EB'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #E5E7EB'
  },
  statCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  statLabel: {
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500'
  },
  statIcon: {
    fontSize: '20px'
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '4px'
  },
  statChange: {
    fontSize: '13px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#10B981'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    margin: 0
  },
  cardSubtitle: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: '0 0 20px 0'
  },
  legend: {
    display: 'flex',
    gap: '16px',
    fontSize: '12px'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  legendBox: {
    width: '12px',
    height: '12px',
    borderRadius: '2px'
  },
  activityValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827'
  },
  activityLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginLeft: '8px'
  },
  activityDelta: {
    fontSize: '14px',
    color: '#10B981',
    marginLeft: '12px',
    fontWeight: '500'
  },
  chartContainer: {
    position: 'relative',
    height: '240px'
  },
  chartLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
    fontSize: '11px',
    color: '#9CA3AF',
    textTransform: 'uppercase'
  },
  revenueAmount: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827'
  },
  revenueChange: {
    fontSize: '12px',
    color: '#10B981',
    fontWeight: '500'
  },
  revenueSubtitle: {
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '2px'
  },
  categoryList: {
    marginTop: '24px'
  },
  categoryItem: {
    marginBottom: '20px'
  },
  categoryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '12px'
  },
  categoryName: {
    color: '#6B7280',
    fontWeight: '500'
  },
  categoryValue: {
    color: '#111827',
    fontWeight: '600'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#F3F4F6',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: (width, color) => ({
    width: `${width}%`,
    height: '100%',
    backgroundColor: color,
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  }),
  table: {
    width: '100%',
    fontSize: '14px'
  },
  tableHeader: {
    borderBottom: '1px solid #E5E7EB'
  },
  th: {
    textAlign: 'left',
    padding: '12px 0',
    color: '#6B7280',
    fontWeight: '500',
    fontSize: '12px'
  },
  tr: {
    borderBottom: '1px solid #F3F4F6'
  },
  td: {
    padding: '16px 0',
    color: '#111827'
  },
  tdMuted: {
    padding: '16px 0',
    color: '#6B7280'
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  },
  badgeSuccess: {
    backgroundColor: '#D1FAE5',
    color: '#059669'
  },
  badgeWarning: {
    backgroundColor: '#FEF3C7',
    color: '#D97706'
  },
  badgeInfo: {
    backgroundColor: '#DBEAFE',
    color: '#3B82F6'
  },
  taskerItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0'
  },
  taskerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#DBEAFE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  },
  taskerInfo: {
    flex: 1
  },
  taskerName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827'
  },
  taskerStats: {
    fontSize: '12px',
    color: '#6B7280'
  },
  taskerRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  ratingValue: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#111827'
  },
  link: {
    fontSize: '14px',
    color: '#3B82F6',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  }
}

const summaryCards = [
  { label: 'Total Revenue', value: '$45,231', delta: '+12%', icon: '💵' },
  { label: 'Total Users', value: '12,405', delta: '+6%', icon: '👥' },
  { label: 'Active Taskers', value: '3,120', delta: '+8%', icon: '🚀' },
  { label: 'Tasks Completed', value: '8,943', delta: '+14%', icon: '✅' },
]

const chartData = {
  created: [40, 85, 70, 95, 80, 60, 90, 50, 75, 65, 45, 88, 70, 55, 40, 70, 85, 95, 115, 75, 90, 110],
  completed: [30, 70, 55, 75, 65, 50, 70, 40, 60, 50, 35, 70, 55, 45, 35, 60, 70, 80, 95, 65, 80, 95]
}

const categories = [
  { name: 'CLEAN', value: 35, color: '#3B82F6' },
  { name: 'MOVE', value: 25, color: '#8B5CF6' },
  { name: 'PLUMB', value: 20, color: '#EC4899' },
  { name: 'ELEC', value: 15, color: '#F59E0B' },
  { name: 'GARDN', value: 28, color: '#10B981' }
]

const recentTasks = [
  { task: 'House Cleaning', customer: 'Ayu Retno', price: '$120', status: 'Completed', date: 'Today, 10:30' },
  { task: 'Deep Clean', customer: 'Rama Putra', price: '$210', status: 'In Progress', date: 'Today, 11:45' },
  { task: 'AC Service', customer: 'Dewi K.', price: '$95', status: 'Scheduled', date: 'Tomorrow, 09:00' },
]

const topTaskers = [
  { name: 'David Kim', stats: '420 completed tasks', rating: 4.98 },
  { name: 'Alex Johnson', stats: '388 completed tasks', rating: 4.92 },
  { name: 'Nadia Sari', stats: '355 completed tasks', rating: 4.90 },
]

const StatCard = ({ item }) => (
  <div style={styles.statCard}>
    <div style={styles.statCardTop}>
      <span style={styles.statLabel}>{item.label}</span>
      <span style={styles.statIcon}>{item.icon}</span>
    </div>
    <div style={styles.statValue}>{item.value}</div>
    <div style={styles.statChange}>
      <span>📈</span>
      {item.delta}
    </div>
  </div>
)

const ActivityCard = () => {
  const maxValue = 120
  const width = 100
  const height = 240

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div>
          <h2 style={styles.cardTitle}>Marketplace Activity</h2>
          <p style={styles.cardSubtitle}>Tasks created vs completed over time</p>
        </div>
        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendBox, backgroundColor: '#3B82F6' }}></div>
            <span style={{ color: '#6B7280' }}>Created</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{ ...styles.legendBox, backgroundColor: '#93C5FD' }}></div>
            <span style={{ color: '#6B7280' }}>Completed</span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <span style={styles.activityValue}>2,430</span>
        <span style={styles.activityLabel}>Tasks this week</span>
        <span style={styles.activityDelta}>+12.5%</span>
      </div>

      <div style={styles.chartContainer}>
        <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 60}
              x2="100%"
              y2={i * 60}
              stroke="#E5E7EB"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
          ))}
          
          <polyline
            points={chartData.created.map((val, i) => 
              `${(i / (chartData.created.length - 1)) * 100}%,${height - (val / maxValue) * height}`
            ).join(' ')}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          <polyline
            points={chartData.completed.map((val, i) => 
              `${(i / (chartData.completed.length - 1)) * 100}%,${height - (val / maxValue) * height}`
            ).join(' ')}
            fill="none"
            stroke="#93C5FD"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        <div style={styles.chartLabels}>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
      </div>
    </div>
  )
}

const RevenueCard = () => {
  const maxCategory = Math.max(...categories.map(c => c.value))

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Revenue by Category</h2>
      
      <div style={{ marginTop: '20px', marginBottom: '24px' }}>
        <div style={styles.revenueAmount}>$12.5k</div>
        <div>
          <span style={styles.revenueChange}>+6.2%</span>
        </div>
        <div style={styles.revenueSubtitle}>Top category: Cleaning</div>
      </div>

      <div style={styles.categoryList}>
        {categories.map((cat, index) => (
          <div key={index} style={styles.categoryItem}>
            <div style={styles.categoryRow}>
              <span style={styles.categoryName}>{cat.name}</span>
              <span style={styles.categoryValue}>{cat.value}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill((cat.value / maxCategory) * 100, cat.color)}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const RecentTasks = () => (
  <div style={styles.card}>
    <div style={styles.cardHeader}>
      <h2 style={styles.cardTitle}>Recent Tasks</h2>
      <button style={styles.link}>View All</button>
    </div>

    <table style={styles.table}>
      <thead>
        <tr style={styles.tableHeader}>
          <th style={styles.th}>Task</th>
          <th style={styles.th}>Customer</th>
          <th style={styles.th}>Price</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Date</th>
        </tr>
      </thead>
      <tbody>
        {recentTasks.map((row, idx) => (
          <tr key={idx} style={styles.tr}>
            <td style={styles.td}>{row.task}</td>
            <td style={styles.tdMuted}>{row.customer}</td>
            <td style={styles.td}>{row.price}</td>
            <td style={styles.td}>
              <span style={{
                ...styles.badge,
                ...(row.status === 'Completed' ? styles.badgeSuccess :
                    row.status === 'In Progress' ? styles.badgeWarning :
                    styles.badgeInfo)
              }}>
                {row.status}
              </span>
            </td>
            <td style={styles.tdMuted}>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const TopTaskers = () => (
  <div style={styles.card}>
    <div style={styles.cardHeader}>
      <h2 style={styles.cardTitle}>Top Taskers</h2>
      <button style={styles.link}>View All</button>
    </div>

    <div>
      {topTaskers.map((t, idx) => (
        <div key={idx} style={styles.taskerItem}>
          <div style={styles.taskerAvatar}>👤</div>
          <div style={styles.taskerInfo}>
            <div style={styles.taskerName}>{t.name}</div>
            <div style={styles.taskerStats}>{t.stats}</div>
          </div>
          <div style={styles.taskerRating}>
            <span style={styles.ratingValue}>{t.rating}</span>
            <span style={{ fontSize: '14px', color: '#FBBF24' }}>⭐</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default function Dashboard() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', padding: '32px', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Dashboard Overview</h1>
          <p style={styles.pageSubtitle}>Welcome back, here's what's happening in your marketplace today.</p>
        </div>
        <div style={styles.headerActions}>
          <div style={styles.btnSecondary}>
            <span>📅</span>
            <span>Oct 14 - Oct 21</span>
          </div>
          <button style={styles.btnPrimary}>
            <span>⬇️</span>
            Export Report
          </button>
        </div>
      </div>

      <div style={{ ...styles.grid, ...styles.gridFour }}>
        {summaryCards.map((item, idx) => (
          <StatCard key={idx} item={item} />
        ))}
      </div>

      <div style={{ ...styles.grid, ...styles.gridTwo }}>
        <ActivityCard />
        <RevenueCard />
      </div>

      <div style={{ ...styles.grid, ...styles.gridTwo }}>
        <RecentTasks />
        <TopTaskers />
      </div>
    </div>
  )
}
