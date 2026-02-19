import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}
