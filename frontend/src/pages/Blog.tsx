import React from 'react'
import { motion } from 'framer-motion'

const Blog: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Блог</h1>
    </motion.div>
  )
}

export default Blog
