import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const texts = [
    "Full Stack Developer",
    "Problem Solver", 
    "DSA Enthusiast",
    "ML/AI Explorer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev)
    }, 4000) // Auto-flip every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
              >
                <Code className="w-4 h-4 mr-2" />
                Available for new projects
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-primary"
              >
                Hi, I'm <span className="text-primary-500">Shivanshu Singh</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-12 flex items-center"
              >
                <span className="text-2xl md:text-3xl text-secondary mr-2">I'm a</span>
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-primary-500 font-bold"
                >
                  {texts[currentText]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl md:text-3xl text-primary-500 ml-1"
                >
                  |
                </motion.span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-secondary max-w-2xl"
              >
                Graduate with a Bachelor of Technology in Information Technology from Rajkiya Engineering College, Azamgarh (2022-2026). 
                I'm a Software Engineer Intern at Meteorite Labs with expertise in Next.js, TypeScript, and AI integration. 
                I'm passionate about problem-solving and have solved 500+ problems across competitive programming platforms.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1spgxVXtHAB5re0XJSnpKdWFwOk-GwmfQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Open Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Let's Connect
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">10+</div>
                <div className="text-sm text-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">500+</div>
                <div className="text-sm text-muted">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">2</div>
                <div className="text-sm text-muted">Internships</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element (3D Flipping Card) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[320px] cursor-pointer [perspective:1000px]"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full h-full [transform-style:preserve-3d]"
            >
              {/* FRONT SIDE: Profile Image Card */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="relative w-full h-full p-8 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-transparent border border-gray-150 dark:border-dark-700/50 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-primary-500/30 transition-all duration-300">
                  <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
                  
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300 z-10">
                    <img 
                      src="/Portfolio profile.png" 
                      alt="Shivanshu Singh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2 z-10">
                    <span className="text-[10px] bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                      Developer Profile
                    </span>
                    <h2 className="text-2xl font-bold text-primary">
                      Shivanshu Singh
                    </h2>
                    <p className="text-sm text-secondary max-w-sm">
                      Specializing in Full Stack Web Development, DevOps & AI Integrations.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-3 text-[10px] text-muted tracking-widest uppercase flex items-center gap-1 opacity-60">
                    🔄 Click to flip
                  </div>
                </div>
              </div>

              {/* BACK SIDE: Grid Card */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  WebkitTransform: 'rotateY(180deg)'
                }}
              >
                <div className="relative w-full h-full p-8 bg-gradient-to-br from-purple-500/10 via-primary-500/5 to-transparent border border-gray-150 dark:border-dark-700/50 rounded-2xl flex flex-col justify-center shadow-xl hover:border-purple-500/30 transition-all duration-300">
                  <div className="absolute -top-12 -left-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl" />
                  
                  <div className="grid grid-cols-2 gap-4 z-10">
                    <div className="card p-4 hover:border-primary-500/30 transition-colors duration-200 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                      <Zap className="w-8 h-8 text-primary-500 mb-2" />
                      <h3 className="font-semibold text-primary text-sm sm:text-base">Problem Solver</h3>
                      <p className="text-xs text-secondary line-clamp-1">LeetCode, GeeksforGeeks</p>
                    </div>
                    <div className="card p-4 hover:border-primary-500/30 transition-colors duration-200 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                      <Users className="w-8 h-8 text-primary-500 mb-2" />
                      <h3 className="font-semibold text-primary text-sm sm:text-base">Team Player</h3>
                      <p className="text-xs text-secondary line-clamp-1">Collaborative dev</p>
                    </div>
                    <div className="card p-4 hover:border-primary-500/30 transition-colors duration-200 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                      <Code className="w-8 h-8 text-primary-500 mb-2" />
                      <h3 className="font-semibold text-primary text-sm sm:text-base">Full Stack</h3>
                      <p className="text-xs text-secondary line-clamp-1">MERN, Next.js, Python</p>
                    </div>
                    <div className="card p-4 hover:border-primary-500/30 transition-colors duration-200 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                      <Zap className="w-8 h-8 text-primary-500 mb-2" />
                      <h3 className="font-semibold text-primary text-sm sm:text-base">ML/AI</h3>
                      <p className="text-xs text-secondary line-clamp-1">Learning & exploring</p>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-muted tracking-widest uppercase flex items-center justify-center gap-1 opacity-60 z-25">
                    🔄 Click to flip
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 