import { useState } from 'react'
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

const MessageIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const SendIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

const tickets = [
  { id: 1, subject: 'Payment Issue', status: 'Open', priority: 'High', customer: 'Sarah Johnson', date: 'Jan 19, 2026', lastReply: '2 hours ago' },
  { id: 2, subject: 'Account Verification', status: 'In Progress', priority: 'Medium', customer: 'Michael Chen', date: 'Jan 18, 2026', lastReply: '5 hours ago' },
  { id: 3, subject: 'Service Quality Complaint', status: 'Open', priority: 'High', customer: 'Emily Rodriguez', date: 'Jan 18, 2026', lastReply: '1 day ago' },
  { id: 4, subject: 'Technical Support', status: 'Resolved', priority: 'Low', customer: 'James Wilson', date: 'Jan 17, 2026', lastReply: '2 days ago' },
  { id: 5, subject: 'Refund Request', status: 'In Progress', priority: 'Medium', customer: 'Lisa Anderson', date: 'Jan 16, 2026', lastReply: '3 days ago' },
]

export default function SupportIndex() {
  const [message, setMessage] = useState('')

  const getStatusBadge = (status) => {
    const styles = {
      'Open': 'bg-blue-100 text-blue-700',
      'In Progress': 'bg-amber-100 text-amber-700',
      'Resolved': 'bg-emerald-100 text-emerald-700',
      'Closed': 'bg-gray-100 text-gray-700'
    }
    return styles[status] || 'bg-gray-100 text-gray-700'
  }

  const getPriorityBadge = (priority) => {
    const styles = {
      'High': 'bg-red-100 text-red-700',
      'Medium': 'bg-amber-100 text-amber-700',
      'Low': 'bg-gray-100 text-gray-700'
    }
    return styles[priority] || 'bg-gray-100 text-gray-700'
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
          <span className="text-gray-900 font-medium">Support</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Support Center</h1>
          <p className="text-sm text-gray-600">Manage support tickets and customer inquiries.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 md:px-8 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Open Tickets</div>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-xs text-blue-600 mt-1">Needs attention</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-xs text-amber-600 mt-1">Being handled</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Resolved Today</div>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-xs text-emerald-600 mt-1">+2 from yesterday</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Avg Response Time</div>
            <div className="text-2xl font-bold text-gray-900">2.5h</div>
            <div className="text-xs text-emerald-600 mt-1">-30min from last week</div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="px-4 md:px-8 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <MessageIcon />
            </div>
            <div>
              <h2 className="text-xl font-bold">Need Help?</h2>
              <p className="text-sm text-blue-50">Send us a message and we'll get back to you soon</p>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2">
              <SendIcon />
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="mx-4 md:mx-8 mb-6 bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Tickets</h2>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Last Reply</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-gray-900">#{ticket.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{ticket.subject}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{ticket.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadge(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{ticket.lastReply}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{ticket.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-gray-100">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-gray-500">#{ticket.id}</span>
                  <div className="text-sm font-semibold text-gray-900 mt-1">{ticket.subject}</div>
                  <div className="text-xs text-gray-500 mt-1">{ticket.customer}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadge(ticket.priority)}`}>
                  {ticket.priority}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                  {ticket.status}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Last reply: {ticket.lastReply}</span>
                <span>{ticket.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
