import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

const initialTodos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Walk the dog', completed: true },
  { id: 3, text: 'Read a book', completed: false }
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos((t) => [newTodo, ...t])
  }

  function toggleTodo(id) {
    setTodos((t) => t.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  function deleteTodo(id) {
    setTodos((t) => t.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={addTodo} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
            style={{
              padding: '8px 4px',
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            <span>{todo.text}</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                data-testid={`delete-${todo.id}`}
                onClick={(e) => {
                  e.stopPropagation()
                  deleteTodo(todo.id)
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
