import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      // Calculate scroll percentage
      setScrollProgress(scrollPx / winHeightPx)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-dark-700 z-50 transition-colors duration-300">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-purple-500"
        style={{ width: `${scrollProgress * 100}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

export default ScrollProgress 