import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const navigate = useNavigate()

  function handleLogin() {
    onLogin()
    navigate('/profile')
  }

  return (
    <div>
      <h2>Login</h2>
      <p>This demo uses a simple login button to simulate authentication.</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
