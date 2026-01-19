import { Link } from 'react-router-dom'

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

const transactions = [
  { id: 1, type: 'Payment', description: 'House Cleaning Service', customer: 'Sarah Johnson', amount: '$120.00', status: 'Completed', date: 'Jan 19, 2026', method: 'Credit Card' },
  { id: 2, type: 'Payout', description: 'Payout to Alice Freeman', tasker: 'Alice Freeman', amount: '-$102.00', status: 'Processing', date: 'Jan 19, 2026', method: 'Bank Transfer' },
  { id: 3, type: 'Payment', description: 'Office Deep Clean', customer: 'Michael Chen', amount: '$280.00', status: 'Completed', date: 'Jan 18, 2026', method: 'PayPal' },
  { id: 4, type: 'Refund', description: 'Cancelled Service', customer: 'Emily Rodriguez', amount: '-$95.00', status: 'Completed', date: 'Jan 17, 2026', method: 'Credit Card' },
  { id: 5, type: 'Payment', description: 'Home Moving Service', customer: 'James Wilson', amount: '$450.00', status: 'Completed', date: 'Jan 16, 2026', method: 'Cash' },
]

export default function FinanceIndex() {
  const getStatusBadge = (status) => {
    const styles = {
      'Completed': 'bg-emerald-100 text-emerald-700',
      'Processing': 'bg-amber-100 text-amber-700',
      'Failed': 'bg-red-100 text-red-700',
      'Pending': 'bg-blue-100 text-blue-700'
    }
    return styles[status] || 'bg-gray-100 text-gray-700'
  }

  const getTypeColor = (type) => {
    if (type === 'Payment') return 'text-emerald-600'
    if (type === 'Payout') return 'text-blue-600'
    if (type === 'Refund') return 'text-red-600'
    return 'text-gray-600'
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
          <span className="text-gray-900 font-medium">Finance</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Financial Management</h1>
          <p className="text-sm text-gray-600">Track all transactions, payments, and payouts.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 md:px-8 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
            <div className="text-2xl font-bold text-gray-900">$45,231</div>
            <div className="text-xs text-emerald-600 mt-1">+12% from last month</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Pending Payouts</div>
            <div className="text-2xl font-bold text-gray-900">$8,420</div>
            <div className="text-xs text-amber-600 mt-1">23 transactions</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Platform Fees</div>
            <div className="text-2xl font-bold text-gray-900">$6,785</div>
            <div className="text-xs text-blue-600 mt-1">15% commission</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Refunded</div>
            <div className="text-2xl font-bold text-gray-900">$1,240</div>
            <div className="text-xs text-red-600 mt-1">8 refunds</div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="mx-4 md:mx-8 mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        </div>
        
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Party</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{transaction.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {transaction.customer || transaction.tasker}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${transaction.amount.startsWith('-') ? 'text-red-600' : 'text-emerald-600'}`}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{transaction.method}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{transaction.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-sm font-medium ${getTypeColor(transaction.type)}`}>
                    {transaction.type}
                  </span>
                  <div className="text-sm text-gray-900 mt-1">{transaction.description}</div>
                  <div className="text-xs text-gray-500 mt-1">{transaction.customer || transaction.tasker}</div>
                </div>
                <span className={`text-sm font-semibold ${transaction.amount.startsWith('-') ? 'text-red-600' : 'text-emerald-600'}`}>
                  {transaction.amount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(transaction.status)}`}>
                  {transaction.status}
                </span>
                <span className="text-xs text-gray-500">{transaction.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
