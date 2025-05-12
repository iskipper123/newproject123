import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  content: string
  // Add other relevant fields from your API response
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: BlogPost[] = await response.json()
        setPosts(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Блог</h1>

      {loading && <p className="text-center">Загрузка записей блога...</p>}
      {error && (
        <p className="text-center text-red-500">
          Ошибка при загрузке записей: {error}
        </p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="text-center">Записи блога не найдены.</p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400">
                {post.content.substring(0, 150)}...
              </p>
              {/* Add a link to the full post if available */}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default Blog
