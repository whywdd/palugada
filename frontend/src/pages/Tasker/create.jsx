import { useState } from 'react'

const styles = {
  page: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#F3F4F6',
    minHeight: '100vh',
    padding: '32px'
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
  breadcrumbCurrent: {
    color: '#111827',
    fontWeight: '600'
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#111827',
    margin: 0
  },
  subtitle: {
    fontSize: '14px',
    color: '#6B7280',
    marginTop: '6px'
  },
  actions: {
    display: 'flex',
    gap: '10px'
  },
  btnSecondary: {
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
    backgroundColor: 'white',
    color: '#374151',
    fontWeight: '600',
    cursor: 'pointer'
  },
  btnPrimary: {
    padding: '10px 18px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#3B82F6',
    color: 'white',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    gap: '20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    border: '1px solid #E5E7EB',
    padding: '20px'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#111827',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  cardSubtitle: {
    fontSize: '13px',
    color: '#6B7280',
    marginTop: '6px'
  },
  requiredPill: {
    marginLeft: 'auto',
    padding: '4px 10px',
    backgroundColor: '#F3F4F6',
    borderRadius: '999px',
    fontSize: '12px',
    color: '#6B7280',
    fontWeight: '600'
  },
  uploadArea: {
    marginTop: '16px',
    height: '220px',
    border: '1.5px dashed #CBD5E1',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC'
  },
  uploadCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '1.5px dashed #CBD5E1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    color: '#6B7280',
    fontWeight: '600',
    position: 'relative'
  },
  uploadMini: {
    position: 'absolute',
    bottom: '14px',
    right: '14px',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(0,0,0,0.06)'
  },
  uploadNote: {
    marginTop: '12px',
    fontSize: '12px',
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 1.5
  },
  statusList: {
    marginTop: '14px',
    display: 'grid',
    gap: '12px'
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #F3F4F6'
  },
  statusLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  statusLabel: {
    fontSize: '14px',
    color: '#111827',
    fontWeight: '600'
  },
  statusSub: {
    fontSize: '12px',
    color: '#6B7280'
  },
  switch: (on) => ({
    width: '42px',
    height: '24px',
    borderRadius: '999px',
    backgroundColor: on ? '#3B82F6' : '#E5E7EB',
    padding: '3px',
    display: 'flex',
    justifyContent: on ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }),
  switchDot: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
  },
  badgeSuccess: {
    fontSize: '12px',
    color: '#10B981',
    fontWeight: '600'
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    border: '1px solid #E5E7EB',
    padding: '20px',
    marginBottom: '16px'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '14px 16px',
    marginTop: '16px'
  },
  label: {
    fontSize: '13px',
    color: '#374151',
    fontWeight: '600',
    marginBottom: '6px',
    display: 'block'
  },
  required: {
    color: '#EF4444',
    marginLeft: '4px'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB',
    fontSize: '14px',
    color: '#111827'
  },
  twoCol: {
    gridColumn: 'span 2'
  },
  helper: {
    fontSize: '12px',
    color: '#10B981',
    marginTop: '6px'
  },
  inlineRow: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: '10px'
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#111827'
  }
}

export default function TaskerCreate() {
  const [active, setActive] = useState(true)
  const [verified, setVerified] = useState(true)
  const [form, setForm] = useState({
    firstName: 'Budi',
    lastName: 'Santoso',
    email: 'budi.santoso@gmail.com',
    phone: '81299887766',
    address: 'Jl. Melati No. 45, Kebayoran Baru',
    city: 'South Jakarta',
    postal: '12150',
    experience: ''
  })

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  return (
    <div style={styles.page}>
      <div style={styles.breadcrumb}>
        <a href="#" style={styles.breadcrumbLink}>Home</a>
        <span style={{ color: '#D1D5DB' }}>›</span>
        <a href="#" style={styles.breadcrumbLink}>Taskers</a>
        <span style={{ color: '#D1D5DB' }}>›</span>
        <span style={styles.breadcrumbCurrent}>New Tasker</span>
      </div>

      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.title}>New Tasker Registration</h1>
          <p style={styles.subtitle}>Create a new service provider profile. Ensure all identity documents and skills are verified before activating the account.</p>
        </div>
        <div style={styles.actions}>
          <button style={styles.btnSecondary}>Cancel</button>
          <button style={styles.btnPrimary}>
            <span>💾</span>
            Save Profile
          </button>
        </div>
      </div>

      <div style={styles.layout}>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={styles.card}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3 style={styles.cardTitle}>Profile Photo</h3>
              <span style={styles.requiredPill}>REQUIRED</span>
            </div>
            <div style={styles.cardSubtitle}>Upload a clear face photo for verification.</div>
            <div style={styles.uploadArea}>
              <div style={styles.uploadCircle}>
                <div style={{ fontSize: '32px' }}>📷</div>
                <div style={{ marginTop: '8px' }}>Click to upload</div>
                <div style={styles.uploadMini}>✎</div>
              </div>
            </div>
            <div style={styles.uploadNote}>
              Allowed: .jpeg, .jpg, .png, .webp<br />
              Max size of 3 MB
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Account Status</h3>
            <div style={styles.statusList}>
              <div style={styles.statusRow}>
                <div style={styles.statusLeft}>
                  <span style={styles.statusLabel}>Active Account</span>
                  <span style={styles.statusSub}>Tasker can receive new jobs</span>
                </div>
                <div style={styles.switch(active)} onClick={() => setActive(!active)}>
                  <div style={styles.switchDot} />
                </div>
              </div>
              <div style={styles.statusRow}>
                <div style={styles.statusLeft}>
                  <span style={styles.statusLabel}>Verified Badge</span>
                  <span style={styles.statusSub}>ID checks passed</span>
                </div>
                <div style={styles.switch(verified)} onClick={() => setVerified(!verified)}>
                  <div style={styles.switchDot} />
                </div>
              </div>
              <div style={styles.statusRow}>
                <div style={styles.statusLeft}>
                  <span style={styles.statusLabel}>Background Check</span>
                  <span style={styles.statusSub}>Passed</span>
                </div>
                <span style={styles.badgeSuccess}>View Report</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={styles.formCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span role="img" aria-label="user">🧑</span>
              <span style={styles.sectionTitle}>Personal Information</span>
            </div>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>First Name <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.firstName} onChange={handleChange('firstName')} />
              </div>
              <div>
                <label style={styles.label}>Last Name <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.lastName} onChange={handleChange('lastName')} />
              </div>
              <div>
                <label style={styles.label}>Email Address <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.email} onChange={handleChange('email')} />
                <div style={styles.helper}>✔ Email available</div>
              </div>
              <div>
                <label style={styles.label}>Phone Number <span style={styles.required}>*</span></label>
                <div style={styles.inlineRow}>
                  <input style={{ ...styles.input, width: '100%' }} value={'+62'} readOnly />
                  <input style={styles.input} value={form.phone} onChange={handleChange('phone')} />
                </div>
              </div>
              <div style={styles.twoCol}>
                <label style={styles.label}>Address <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.address} onChange={handleChange('address')} />
              </div>
              <div>
                <label style={styles.label}>City <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.city} onChange={handleChange('city')} />
              </div>
              <div>
                <label style={styles.label}>Postal Code <span style={styles.required}>*</span></label>
                <input style={styles.input} value={form.postal} onChange={handleChange('postal')} />
              </div>
            </div>
          </div>

          <div style={styles.formCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span role="img" aria-label="briefcase">💼</span>
              <span style={styles.sectionTitle}>Professional Details</span>
            </div>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label}>Service Category</label>
                <input style={styles.input} placeholder="e.g. Cleaning" />
              </div>
              <div>
                <label style={styles.label}>Experience (years)</label>
                <input style={styles.input} value={form.experience} onChange={handleChange('experience')} placeholder="3" />
              </div>
              <div style={styles.twoCol}>
                <label style={styles.label}>Skills / Notes</label>
                <textarea style={{ ...styles.input, minHeight: '80px', resize: 'vertical' }} placeholder="List key skills and certifications" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
