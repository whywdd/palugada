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

const ToggleIcon = ({ enabled }) => (
  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-blue-600' : 'bg-gray-200'}`}>
    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
  </div>
)

export default function SettingsIndex() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-50 px-4 md:px-8 pt-8 pb-5">
        <div className="flex items-center gap-2 text-sm mb-3">
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <ChevronRightIcon />
          <span className="text-gray-900 font-medium">Settings</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Settings</h1>
          <p className="text-sm text-gray-600">Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <nav className="space-y-1">
                {['General', 'Notifications', 'Security', 'Billing', 'Team'].map((item) => (
                  <button
                    key={item}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item === 'General' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Johnson"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    defaultValue="alex.johnson@example.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email Notifications</div>
                    <div className="text-xs text-gray-500">Receive email updates about your account</div>
                  </div>
                  <button onClick={() => setEmailNotifications(!emailNotifications)}>
                    <ToggleIcon enabled={emailNotifications} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Push Notifications</div>
                    <div className="text-xs text-gray-500">Receive push notifications on your devices</div>
                  </div>
                  <button onClick={() => setPushNotifications(!pushNotifications)}>
                    <ToggleIcon enabled={pushNotifications} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Marketing Emails</div>
                    <div className="text-xs text-gray-500">Receive emails about new features and offers</div>
                  </div>
                  <button onClick={() => setMarketingEmails(!marketingEmails)}>
                    <ToggleIcon enabled={marketingEmails} />
                  </button>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Two-Factor Authentication</div>
                    <div className="text-xs text-gray-500">Add an extra layer of security to your account</div>
                  </div>
                  <button onClick={() => setTwoFactor(!twoFactor)}>
                    <ToggleIcon enabled={twoFactor} />
                  </button>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Change Password
                  </button>
                </div>
                <div>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
