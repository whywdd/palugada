import Sidebar from './Sidebar.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 lg:ml-60">
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}
