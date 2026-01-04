import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TaskerIndex from './pages/Tasker/index.jsx'
import TaskerCreate from './pages/Tasker/create.jsx'

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
      </Routes>
    </BrowserRouter>
  )
}
