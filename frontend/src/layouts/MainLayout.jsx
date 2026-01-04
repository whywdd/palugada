import Sidebar from './Sidebar.jsx'

const styles = {
  shell: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#F9FAFB'
  },
  main: {
    marginLeft: '240px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1
  }
}

export default function MainLayout({ children }) {
  return (
    <div style={styles.shell}>
      <Sidebar />
      <main style={styles.main}>
        <div style={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  )
}
