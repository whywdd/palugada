# Palugada - Marketplace Management System

Sistem manajemen marketplace yang dibangun dengan Laravel (Backend) dan React + Vite (Frontend) menggunakan Tailwind CSS.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Instalasi](#instalasi)
- [Struktur Folder](#struktur-folder)
- [Alur Kerja](#alur-kerja)
- [Halaman & Fitur](#halaman--fitur)
- [Pengembangan](#pengembangan)

## 🚀 Fitur Utama

- **Dashboard Overview** - Statistik marketplace, grafik aktivitas, revenue breakdown
- **User Management** - Kelola pengguna dengan role (Admin, Customer, Tasker)
- **Tasker Management** - Kelola tasker, verifikasi, dan rating
- **Task Management** - Pantau semua task dengan status real-time
- **Finance Management** - Transaksi, payment, payout, dan refund tracking
- **Settings** - Konfigurasi akun, notifikasi, dan keamanan
- **Support Center** - Ticket system untuk customer support
- **Responsive Design** - Mobile-first dengan Tailwind CSS
- **SVG Icons** - Custom icons tanpa library eksternal

## 🛠 Teknologi

### Frontend
- **React 19.1.0** - UI Library
- **Vite 6.4.1** - Build tool & dev server
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **PostCSS + Autoprefixer** - CSS processing

### Backend
- **Laravel 11.x** - PHP Framework
- **MySQL** - Database
- **Composer** - PHP dependency manager

## 📦 Instalasi

### Prerequisites
- Node.js (v18+)
- PHP (v8.2+)
- Composer
- MySQL

### Setup Backend (Laravel)

```bash
# Masuk ke folder backend
cd backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Setup database di .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=palugada
DB_USERNAME=root
DB_PASSWORD=

# Run migrations
php artisan migrate

# (Optional) Seed database
php artisan db:seed

# Start server
php artisan serve
# Backend akan berjalan di http://localhost:8000
```

### Setup Frontend (React + Vite)

```bash
# Masuk ke folder frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend akan berjalan di http://localhost:5173
```

## 📁 Struktur Folder

```
palugada/
├── backend/                 # Laravel Backend
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/ # API Controllers
│   │   └── Models/          # Eloquent Models
│   ├── config/              # Configuration files
│   ├── database/
│   │   ├── migrations/      # Database migrations
│   │   └── seeders/         # Database seeders
│   ├── routes/
│   │   ├── api.php          # API routes
│   │   └── web.php          # Web routes
│   └── public/              # Public assets
│
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── layouts/         # Layout components
│   │   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   │   └── MainLayout.jsx   # Main wrapper layout
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard.jsx    # Dashboard overview
│   │   │   ├── Users/           # User management
│   │   │   ├── Tasker/          # Tasker management
│   │   │   ├── Tasks/           # Task management
│   │   │   ├── Finance/         # Financial management
│   │   │   ├── Settings/        # Settings page
│   │   │   └── Support/         # Support center
│   │   ├── App.jsx          # Main app with routing
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind configuration
│   └── package.json         # Dependencies
│
└── README.md                # Documentation
```

## 🔄 Alur Kerja

### 1. User Flow

```
Login → Dashboard → Navigate Menu → View/Edit Data → Save Changes
```

### 2. Dashboard Workflow

1. **Akses Dashboard** (`/`)
   - Tampilkan 4 metric cards (Total Users, Active Tasks, Total Revenue, Platform Fee)
   - Grafik Marketplace Activity (7 hari terakhir)
   - Revenue by Category (progress bars)
   - Recent Tasks table
   - Top Taskers list

### 3. User Management Workflow

1. **List Users** (`/users`)
   - View semua users dengan pagination
   - Filter by Status (Active/Inactive/Suspended)
   - Filter by Role (Admin/Customer/Tasker)
   
2. **User Actions**
   - View user details
   - Edit user information
   - Suspend/Activate user
   - Delete user account

### 4. Tasker Management Workflow

1. **List Taskers** (`/taskers`)
   - View semua taskers
   - Filter by Category (Cleaning, Plumbing, etc.)
   - Filter by Status (Verified/Pending/Suspended)
   
2. **Create Tasker** (`/taskers/create`)
   - Input tasker information
   - Upload documents
   - Set category & skills
   - Submit for verification

3. **Verify Tasker**
   - Review documents
   - Approve/Reject application
   - Update verification status

### 5. Task Management Workflow

1. **View Tasks** (`/tasks`)
   - List all tasks with status
   - Filter by Status (Completed/In Progress/Scheduled/Cancelled)
   - Filter by Category
   - View customer & tasker details

2. **Task Lifecycle**
   ```
   Created → Assigned → In Progress → Completed → Paid
                     ↓
                  Cancelled → Refunded
   ```

### 6. Finance Workflow

1. **Financial Overview** (`/finance`)
   - Total Revenue tracking
   - Pending Payouts monitoring
   - Platform Fees calculation
   - Refund management

2. **Transaction Flow**
   ```
   Customer Payment → Platform Receives → Commission Deducted → Tasker Payout
   ```

3. **Transaction Types**
   - **Payment**: Customer pays for service
   - **Payout**: Payment to tasker
   - **Refund**: Return money to customer
   - **Fee**: Platform commission

### 7. Settings Workflow

1. **Profile Settings** (`/settings`)
   - Update personal information
   - Change email/phone
   - Save changes

2. **Notification Settings**
   - Toggle email notifications
   - Toggle push notifications
   - Toggle marketing emails

3. **Security Settings**
   - Enable Two-Factor Authentication
   - Change password
   - Delete account

### 8. Support Workflow

1. **Support Center** (`/support`)
   - View open tickets
   - Monitor ticket status
   - Track response time

2. **Ticket Lifecycle**
   ```
   Open → In Progress → Resolved → Closed
   ```

3. **Quick Support**
   - Send quick message
   - Get immediate response
   - Auto-create ticket

## 📄 Halaman & Fitur

### Dashboard (`/`)
- **Metrics**: Total Users, Active Tasks, Revenue, Platform Fee
- **Chart**: SVG Marketplace Activity dengan gradient
- **Revenue**: Progress bars per kategori
- **Recent Tasks**: 5 task terbaru
- **Top Taskers**: 5 tasker dengan rating tertinggi

### Users Management (`/users`)
- **Table Columns**: User, Role, Status, Join Date, Total Spent, Actions
- **Filters**: Status, Role
- **Actions**: View, Edit, Delete
- **Pagination**: Navigasi halaman
- **Mobile**: Card layout untuk small screens

### Tasker Management (`/taskers`)
- **Table Columns**: Tasker, Category, Status, Rating, Join Date, Actions
- **Filters**: Category, Status
- **Icons**: Custom SVG per kategori (Broom, Wrench, Truck, Zap, Flower)
- **Status Badges**: Verified (green), Pending (yellow), Suspended (red)
- **Bulk Actions**: Select multiple taskers

### Tasks Management (`/tasks`)
- **Table Columns**: Task, Customer, Tasker, Category, Status, Price, Date
- **Status Badges**: Completed, In Progress, Scheduled, Cancelled
- **Filters**: Status, Category
- **Calendar View**: Button untuk switch ke calendar
- **Price Display**: Format currency

### Finance Management (`/finance`)
- **Stats**: Revenue, Payouts, Fees, Refunds
- **Transaction Table**: Type, Description, Party, Amount, Status, Method, Date
- **Type Indicators**: Color-coded (Payment=green, Payout=blue, Refund=red)
- **Payment Methods**: Credit Card, Bank Transfer, PayPal, Cash

### Settings (`/settings`)
- **Sidebar Navigation**: General, Notifications, Security, Billing, Team
- **Profile Form**: Name, Email, Phone with validation
- **Toggle Switches**: Animated on/off switches
- **Security**: 2FA toggle, Change password, Delete account

### Support Center (`/support`)
- **Stats**: Open Tickets, In Progress, Resolved, Avg Response Time
- **Quick Contact**: Gradient card dengan message input
- **Ticket Table**: ID, Subject, Customer, Priority, Status, Last Reply, Date
- **Priority Badges**: High (red), Medium (yellow), Low (gray)
- **Status Tracking**: Open, In Progress, Resolved, Closed

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)
- **Danger**: Red (#EF4444)
- **Gray Scale**: 50-900

### Typography
- **Font**: Manrope (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular, 14px base

### Components
- **Cards**: White background, border, rounded-xl
- **Buttons**: Rounded-lg, transition colors
- **Badges**: Rounded-full, colored backgrounds
- **Tables**: Striped rows, hover effects
- **Forms**: Border focus, ring effects

### Responsive Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large */
```

## 👨‍💻 Pengembangan

### Menambah Halaman Baru

1. **Create Component**
```jsx
// frontend/src/pages/NewPage/index.jsx
export default function NewPageIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
    </div>
  )
}
```

2. **Add Route**
```jsx
// frontend/src/App.jsx
import NewPageIndex from './pages/NewPage/index.jsx'

<Route path="/newpage" element={
  <MainLayout title="" subtitle="">
    <NewPageIndex />
  </MainLayout>
} />
```

3. **Add to Sidebar**
```jsx
// frontend/src/layouts/Sidebar.jsx
const menuItems = [
  // ... existing items
  { name: 'New Page', path: '/newpage', icon: <NewIcon /> }
]
```

### Custom SVG Icons

```jsx
const CustomIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="..." />
  </svg>
)
```

### Tailwind Utilities

```jsx
// Spacing
className="p-4 m-2 gap-3"

// Colors
className="bg-blue-600 text-white"

// Responsive
className="w-full md:w-1/2 lg:w-1/3"

// Hover & Focus
className="hover:bg-gray-100 focus:ring-2"
```

### State Management

```jsx
import { useState } from 'react'

const [data, setData] = useState([])
const [filter, setFilter] = useState('')
const [isOpen, setIsOpen] = useState(false)
```

## 🐛 Troubleshooting

### Tailwind CSS tidak muncul
```bash
# Pastikan import di index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Restart dev server
npm run dev
```

### Route tidak berfungsi
```bash
# Check App.jsx routes
# Pastikan import component sudah benar
# Verify path di Sidebar.jsx sesuai dengan Route
```

### Port sudah digunakan
```bash
# Frontend (Vite)
# Edit vite.config.js, ganti port

# Backend (Laravel)
php artisan serve --port=8001
```

## 📝 License

MIT License - Bebas digunakan untuk project personal maupun komersial.

## 👥 Contributors

- Development Team - Initial work

## 📞 Support

Untuk bantuan dan pertanyaan:
- Email: support@palugada.com
- Documentation: /docs
- Issues: GitHub Issues
