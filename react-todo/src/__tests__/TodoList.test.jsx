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
    expect(item).toHaveStyle('text-decoration: none')
    fireEvent.click(item)
    expect(item).toHaveStyle('text-decoration: line-through')
    fireEvent.click(item)
    expect(item).toHaveStyle('text-decoration: none')
  })

  test('deletes a todo', () => {
    render(<TodoList />)
    const item = screen.getByText('Read a book')
    const li = item.closest('li')
    const deleteBtn = screen.getByTestId(/^delete-\d+$/)
    // find the delete button associated with the 'Read a book' item
    const buttons = screen.getAllByText('Delete')
    const targetButton = buttons.find((b) => b.closest('li')?.textContent.includes('Read a book'))
    expect(targetButton).toBeTruthy()
    fireEvent.click(targetButton)
    expect(screen.queryByText('Read a book')).not.toBeInTheDocument()
  })
})
