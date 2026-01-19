import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TaskerIndex from './pages/Tasker/index.jsx'
import TaskerCreate from './pages/Tasker/create.jsx'
import UsersIndex from './pages/Users/index.jsx'
import TasksIndex from './pages/Tasks/index.jsx'
import FinanceIndex from './pages/Finance/index.jsx'
import SettingsIndex from './pages/Settings/index.jsx'
import SupportIndex from './pages/Support/index.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout
            title="Dashboard Overview"
            subtitle="Welcome back, here's what's happening in your marketplace today."
          >
            <Dashboard />
          </MainLayout>
        } />
        <Route path="/taskers" element={
          <MainLayout title="" subtitle="">
            <TaskerIndex />
          </MainLayout>
        } />
        <Route path="/taskers/create" element={
          <MainLayout title="" subtitle="">
            <TaskerCreate />
          </MainLayout>
        } />
        <Route path="/users" element={
          <MainLayout title="" subtitle="">
            <UsersIndex />
          </MainLayout>
        } />
        <Route path="/tasks" element={
          <MainLayout title="" subtitle="">
            <TasksIndex />
          </MainLayout>
        } />
        <Route path="/finance" element={
          <MainLayout title="" subtitle="">
            <FinanceIndex />
          </MainLayout>
        } />
        <Route path="/settings" element={
          <MainLayout title="" subtitle="">
            <SettingsIndex />
          </MainLayout>
        } />
        <Route path="/support" element={
          <MainLayout title="" subtitle="">
            <SupportIndex />
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}
