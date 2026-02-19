import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import ProfileSettings from './pages/ProfileSettings'
import Login from './pages/Login'
import UserPost from './pages/UserPost'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './index.css'

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false)

  function handleLogout() {
    setIsAuth(false)
  }

  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Example Post</Link>

        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login onLogin={() => setIsAuth(true)} />} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/posts/:postId" element={<UserPost />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}