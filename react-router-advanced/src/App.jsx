import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Login from './components/Login'
import UserPost from './components/UserPost'
import BlogPost from './components/BlogPost'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider, useAuth } from './components/AuthProvider'
import './index.css'

function AppRouter() {
  const { isAuth, logout } = useAuth()

  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Example Post</Link>
        <Link to="/blog/1">Blog Example</Link>

        {isAuth ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/profile/details" element={<ProfileDetails />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />

        <Route path="/posts/:postId" element={<UserPost />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}