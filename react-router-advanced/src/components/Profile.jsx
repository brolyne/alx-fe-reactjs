import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{display: 'flex', gap: 8, marginBottom: 8}}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  )
}
