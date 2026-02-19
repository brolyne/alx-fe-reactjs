import React, { useState } from 'react'

export default function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!email) errs.email = 'Email is required'
    if (!password) errs.password = 'Password is required'
    if (!username.trim()) errs.username = 'Username is required'
    if (!email.trim()) errs.email = 'Email is required'
    if (!password.trim()) errs.password = 'Password is required'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      console.log('Registered (controlled):', { username, email, password })
      alert('Registration successful (controlled)')
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <label>
        Username
        <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}

      <label>
        Email
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}

      <label>
        Password
        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}

      <button type="submit">Register</button>
    </form>
  )
}
