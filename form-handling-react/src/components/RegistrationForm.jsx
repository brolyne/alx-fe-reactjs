import React, { useState } from 'react'

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const errs = {}
    if (!form.username.trim()) errs.username = 'Username is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    if (!form.password.trim()) errs.password = 'Password is required'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      console.log('Registered (controlled):', form)
      alert('Registration successful (controlled)')
      setForm({ username: '', email: '', password: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <label>
        Username
        <input name="username" value={form.username} onChange={handleChange} />
      </label>
      {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}

      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}

      <label>
        Password
        <input name="password" type="password" value={form.password} onChange={handleChange} />
      </label>
      {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}

      <button type="submit">Register</button>
    </form>
  )
}
