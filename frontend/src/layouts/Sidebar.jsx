import { Link, useLocation } from 'react-router-dom'

const styles = {
  sidebar: {
    width: '240px',
    height: '100vh',
    backgroundColor: 'white',
    borderRight: '1px solid #E5E7EB',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 100
  },
  brand: {
    padding: '24px 20px',
    borderBottom: '1px solid #F3F4F6',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  brandMark: {
    width: '40px',
    height: '40px',
    backgroundColor: '#3B82F6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '16px'
  },
  brandName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#111827'
  },
  brandSub: {
    fontSize: '12px',
    color: '#6B7280'
  },
  nav: {
    flex: 1,
    padding: '16px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    overflowY: 'auto'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6B7280',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  },
  navItemActive: {
    backgroundColor: '#EFF6FF',
    color: '#3B82F6'
  },
  navDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    opacity: 0.5
  },
  navDotActive: {
    opacity: 1
  },
  profile: {
    padding: '16px 20px',
    borderTop: '1px solid #F3F4F6',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
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
  userName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827'
  },
  userRole: {
    fontSize: '12px',
    color: '#6B7280'
  }
}

const menuItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Taskers', path: '/taskers' },
  { label: 'Tasks', path: '/tasks' },
  { label: 'Finance', path: '/finance' },
  { label: 'Settings', path: '/settings' },
  { label: 'Support', path: '/support' },
]

export default function Sidebar() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <aside style={styles.sidebar}>
      <div style={styles.brand}>
        <div style={styles.brandMark}>PG</div>
        <div>
          <div style={styles.brandName}>Palu Gada</div>
          <div style={styles.brandSub}>Admin Panel</div>
        </div>
      </div>
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            style={{
              ...styles.navItem,
              ...(isActive(item.path) ? styles.navItemActive : {})
            }}
          >
            <span style={{
              ...styles.navDot,
              ...(isActive(item.path) ? styles.navDotActive : {})
            }} />
            {item.label}
          </Link>
        ))}
      </nav>
      <div style={styles.profile}>
        <div style={styles.avatar}>AJ</div>
        <div>
          <div style={styles.userName}>Alex Johnson</div>
          <div style={styles.userRole}>Super Admin</div>
        </div>
      </div>
    </aside>
  )
}
