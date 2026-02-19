import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent'
import './index.css'

const queryClient = new QueryClient()

export default function App() {
  const [show, setShow] = React.useState(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20 }}>
        <h1>React Query Demo</h1>
        <p>Toggle the component to observe caching; use refetch to update.</p>

        <button onClick={() => setShow((s) => !s)} style={{ marginBottom: 12 }}>
          {show ? 'Hide' : 'Show'} PostsComponent
        </button>

        {show && <PostsComponent />}
      </div>
    </QueryClientProvider>
  )
}
