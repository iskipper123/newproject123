import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Estimation from './pages/Estimation'

// Import admin panel components
import Login from './adminpanel/Login'
import Dashboard from './adminpanel/Dashboard'
import Cms from './adminpanel/Cms'
import Analytics from './adminpanel/Analytics'
import Users from './adminpanel/Users'
import Logs from './adminpanel/Logs'
import Files from './adminpanel/Files'
import Forms from './adminpanel/Forms'

// Simple Protected Route component
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('jwtToken') // Basic check for JWT token

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/adminpanel/login" replace />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimation" element={<Estimation />} />

          {/* Admin panel routes */}
          <Route path="/adminpanel/login" element={<Login />} />
          <Route
            path="/adminpanel/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/cms"
            element={
              <ProtectedRoute>
                <Cms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/logs"
            element={
              <ProtectedRoute>
                <Logs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/files"
            element={
              <ProtectedRoute>
                <Files />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminpanel/forms"
            element={
              <ProtectedRoute>
                <Forms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
