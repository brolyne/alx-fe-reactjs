import React from 'react'
import { useQuery } from 'react-query'

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      staleTime: 1000 * 60 * 5, // keep data fresh for 5 minutes
      cacheTime: 1000 * 60 * 10, // keep cached data for 10 minutes
      refetchOnWindowFocus: false, // avoid refetch when window regains focus
      keepPreviousData: true // keep previous data while fetching new
    }
  )

  return (
    <div style={{border: '1px solid #ddd', padding: 12, borderRadius: 6}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8}}>
        <button onClick={() => refetch()} disabled={isFetching}>
          Refetch Posts
        </button>
        {isFetching && <small>Updating...</small>}
      </div>

      {isLoading && <p>Loading posts...</p>}
      {isError && <p style={{color: 'red'}}>Error: {error.message}</p>}

      {data && (
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {data.slice(0, 10).map((post) => (
            <li key={post.id} style={{padding: 8, borderBottom: '1px solid #eee'}}>
              <strong>{post.title}</strong>
              <p style={{margin: 6}}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
