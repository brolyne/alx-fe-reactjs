import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

describe('TodoList component', () => {
  test('renders initial todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText('Walk the dog')).toBeInTheDocument()
    expect(screen.getByText('Read a book')).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<TodoList />)
    const input = screen.getByTestId('add-input')
    const button = screen.getByTestId('add-button')

    fireEvent.change(input, { target: { value: 'New task' } })
    fireEvent.click(button)

    expect(screen.getByText('New task')).toBeInTheDocument()
  })

  test('toggles a todo completed state on click', () => {
    render(<TodoList />)
    const item = screen.getByText('Buy milk')
    const li = item.closest('li')
    expect(li).toHaveStyle('text-decoration: none')
    fireEvent.click(li)
    expect(li).toHaveStyle('text-decoration: line-through')
    fireEvent.click(li)
    expect(li).toHaveStyle('text-decoration: none')
  })

  test('deletes a todo', () => {
    render(<TodoList />)
    const item = screen.getByText('Read a book')
    const li = item.closest('li')
    const deleteBtn = li.querySelector('button')
    fireEvent.click(deleteBtn)
    expect(screen.queryByText('Read a book')).not.toBeInTheDocument()
  })
})
