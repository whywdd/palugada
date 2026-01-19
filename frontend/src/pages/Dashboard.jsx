// SVG Icons
const DollarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const RocketIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
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

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const TrendUpIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const summaryCards = [
  { label: 'Total Revenue', value: '$45,231', delta: '+12%', icon: DollarIcon, color: 'text-emerald-600' },
  { label: 'Total Users', value: '12,405', delta: '+4%', icon: UsersIcon, color: 'text-blue-600' },
  { label: 'Active Taskers', value: '3,120', delta: '+2%', icon: RocketIcon, color: 'text-orange-600' },
  { label: 'Tasks Completed', value: '8,943', delta: '+8%', icon: CheckCircleIcon, color: 'text-purple-600' },
]

const chartData = {
  created: [40, 85, 70, 95, 80, 60, 90, 50, 75, 65, 45, 88, 70, 55, 40, 70, 85, 95, 115, 75, 90, 110],
  completed: [30, 70, 55, 75, 65, 50, 70, 40, 60, 50, 35, 70, 55, 45, 35, 60, 70, 80, 95, 65, 80, 95]
}

const categories = [
  { name: 'CLEAN', value: 35, color: 'bg-blue-500' },
  { name: 'MOVE', value: 25, color: 'bg-purple-500' },
  { name: 'PLUMB', value: 20, color: 'bg-pink-500' },
  { name: 'ELEC', value: 15, color: 'bg-amber-500' },
  { name: 'GARDN', value: 28, color: 'bg-emerald-500' }
]

const recentTasks = [
  { task: 'House Cleaning', customer: 'Ayu Retno', price: '$120', status: 'Completed', date: 'Today, 10:30' },
  { task: 'Deep Clean', customer: 'Rama Putra', price: '$210', status: 'In Progress', date: 'Today, 11:45' },
  { task: 'AC Service', customer: 'Dewi K.', price: '$95', status: 'Scheduled', date: 'Tomorrow, 09:00' },
]

const topTaskers = [
  { name: 'David Kim', stats: '420 completed tasks', rating: 4.98, initial: 'DK', color: 'bg-blue-100 text-blue-600' },
  { name: 'Alex Johnson', stats: '388 completed tasks', rating: 4.92, initial: 'AJ', color: 'bg-purple-100 text-purple-600' },
  { name: 'Nadia Sari', stats: '355 completed tasks', rating: 4.90, initial: 'NS', color: 'bg-pink-100 text-pink-600' },
]

const StatCard = ({ item }) => {
  const Icon = item.icon
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-gray-600 font-medium">{item.label}</span>
        <div className={`${item.color} opacity-70`}>
          <Icon />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
      <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
        <TrendUpIcon />
        {item.delta}
      </div>
    </div>
  )
}

const ActivityCard = () => {
  const maxValue = 120
  const height = 240

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Marketplace Activity</h2>
          <p className="text-xs text-gray-400 mt-1">Tasks created vs completed over time</p>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Created</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-200 rounded"></div>
            <span className="text-gray-600">Completed</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">2,430</span>
        <span className="text-sm text-gray-600 ml-2">Tasks this week</span>
        <span className="text-sm text-emerald-600 font-medium ml-3">+12.5%</span>
      </div>

      <div className="relative h-60">
        <svg width="100%" height="100%" className="overflow-visible">
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
      </div>
      
      <div className="flex justify-between mt-3 text-xs text-gray-400 uppercase">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        <span>SUN</span>
      </div>
    </div>
  )
}

const RevenueCard = () => {
  const maxCategory = Math.max(...categories.map(c => c.value))

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900">Revenue by Category</h2>
      
      <div className="mt-5 mb-6">
        <div className="text-3xl font-bold text-gray-900">$12.5k</div>
        <div className="mt-1">
          <span className="text-xs text-emerald-600 font-medium">+6.2%</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">Top category: Cleaning</div>
      </div>

      <div className="space-y-5">
        {categories.map((cat, index) => (
          <div key={index}>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-600 font-medium">{cat.name}</span>
              <span className="text-gray-900 font-semibold">{cat.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${cat.color} rounded-full transition-all duration-500`}
                style={{ width: `${(cat.value / maxCategory) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const RecentTasks = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Recent Tasks</h2>
      <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 text-xs text-gray-600 font-medium">Task</th>
            <th className="text-left py-3 text-xs text-gray-600 font-medium">Customer</th>
            <th className="text-left py-3 text-xs text-gray-600 font-medium">Price</th>
            <th className="text-left py-3 text-xs text-gray-600 font-medium">Status</th>
            <th className="text-left py-3 text-xs text-gray-600 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentTasks.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-50">
              <td className="py-4 text-gray-900 font-medium">{row.task}</td>
              <td className="py-4 text-gray-600">{row.customer}</td>
              <td className="py-4 text-gray-900 font-medium">{row.price}</td>
              <td className="py-4">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${row.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    row.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'}
                `}>
                  {row.status}
                </span>
              </td>
              <td className="py-4 text-gray-600">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const TopTaskers = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Top Taskers</h2>
      <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
    </div>

    <div className="space-y-4">
      {topTaskers.map((t, idx) => (
        <div key={idx} className="flex items-center gap-3 py-2">
          <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-semibold`}>
            {t.initial}
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500">{t.stats}</div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-gray-900">{t.rating}</span>
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard Overview</h1>
          <p className="text-sm text-gray-600">Welcome back, here's what's happening in your marketplace today.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700">
            <CalendarIcon />
            <span>Oct 14 - Oct 21</span>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <DownloadIcon />
            Export Report
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {summaryCards.map((item, idx) => (
          <StatCard key={idx} item={item} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="lg:col-span-2">
          <ActivityCard />
        </div>
        <div>
          <RevenueCard />
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RecentTasks />
        </div>
        <div>
          <TopTaskers />
        </div>
      </div>
    </div>
  )
}
