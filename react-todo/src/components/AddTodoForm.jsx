import React, { useState } from 'react'

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const text = value.trim()
    if (!text) return
    onAdd(text)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        data-testid="add-input"
        placeholder="Add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="add-button" type="submit">Add</button>
    </form>
  )
}
