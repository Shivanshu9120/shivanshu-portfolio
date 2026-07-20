import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Eye, Code, X } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
  category: string
  pinned?: boolean
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  githubUrl, 
  year, 
  category,
  pinned
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="group relative card overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
              {category === 'React' ? '⚛️' : category === 'Django' ? '🎯' : category === 'ML/AI' ? '🤖' : '🚀'}
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye className="w-5 h-5" />
                </motion.a>
              )}
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-gray-700 dark:bg-dark-700 rounded-full text-white hover:bg-gray-600 dark:hover:bg-dark-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Code className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          <div className="absolute top-4 left-4">
            <span className="bg-primary-500/20 text-primary-500 px-2 py-1 rounded text-xs font-medium">
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-gray-700/80 dark:bg-dark-700/80 text-gray-300 px-2 py-1 rounded text-xs">
              {year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex flex-col flex-grow">
          <div className="flex-grow space-y-2">
            <h3 className="text-xl font-semibold text-primary group-hover:text-primary-500 transition-colors duration-200 flex items-start justify-between gap-2">
              <span>{title}</span>
              {pinned && (
                <span className="flex-shrink-0 text-[10px] bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 px-2 py-1 rounded-full flex items-center gap-1 font-semibold uppercase tracking-wider mt-0.5">
                  📌 Pinned
                </span>
              )}
            </h3>
            
            <p className="text-secondary text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="text-primary-500 hover:text-primary-400 text-xs font-semibold transition-colors duration-200 inline-block"
            >
              Read More
            </button>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs hover:bg-primary-500/20 hover:text-primary-500 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700 mt-auto">
            <div className="flex gap-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-primary-500 hover:text-primary-400 text-sm font-medium transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-muted hover:text-primary text-sm font-medium transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary-500 transition-colors duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-dark-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-dark-700 z-10 my-8 flex flex-col"
            >
              {/* Image banner area */}
              <div className="relative h-48 sm:h-56 flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-8xl opacity-30 select-none">
                  {category === 'React' ? '⚛️' : category === 'Django' ? '🎯' : category === 'ML/AI' ? '🤖' : '🚀'}
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary-500 text-white px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                    {category}
                  </span>
                  {pinned && (
                    <span className="bg-amber-500 text-white px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                      📌 Pinned
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-16">
                  <span className="bg-black/40 text-white px-2.5 py-1 rounded text-xs backdrop-blur-sm">
                    {year}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[calc(100vh-250px)]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    {title}
                  </h2>
                  <p className="text-secondary text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-primary-500/20 hover:text-primary-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100 dark:border-dark-700">
                  <div className="flex gap-4">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 border border-gray-250 dark:border-dark-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-900 rounded-xl text-sm font-semibold transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard 