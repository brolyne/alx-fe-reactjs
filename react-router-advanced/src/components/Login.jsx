import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  function handleLogin() {
    login()
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
