import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error('Network error')
        return r.json()
      })
      .then((data) => setPost(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading blog post...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>
  if (!post) return <p>No post found.</p>

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  )
}
