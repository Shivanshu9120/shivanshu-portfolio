import { motion } from 'framer-motion'
import { Code, BookOpen, Users, Heart, Book, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'

const About = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: "Advanced", projects: 2, icon: "⚡" },
        { name: "Python", level: "Advanced", projects: 2, icon: "🐍" },
        { name: "JavaScript", level: "Intermediate", projects: 6, icon: "🟨" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: "Intermediate", projects: 4, icon: "⚛️" },
        { name: "HTML/CSS", level: "Advanced", projects: 10, icon: "🌐" },
        { name: "Bootstrap", level: "Intermediate", projects: 3, icon: "🎨" }
      ]
    },
    {
      category: "Databases & APIs",
      skills: [
        { name: "MongoDB", level: "Intermediate", projects: 3, icon: "🍃" },
        { name: "REST API", level: "Intermediate", projects: 3, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: "Intermediate", projects: 15, icon: "📚" },
        { name: "Docker", level: "Beginner", projects: 2, icon: "🐳" }
      ]
    }
  ]

  const experienceLevels = {
    "Advanced": { color: "text-green-500", bg: "bg-green-500/20", description: "Extensive experience, can mentor others" },
    "Intermediate": { color: "text-blue-500", bg: "bg-blue-500/20", description: "Comfortable with complex projects" },
    "Beginner": { color: "text-yellow-500", bg: "bg-yellow-500/20", description: "Learning and growing" }
  }

  const interests = [
    { icon: BookOpen, name: "Learning", description: "Always exploring new technologies" },
    { icon: Code, name: "Problem Solving", description: "LeetCode, GeeksforGeeks, HackerRank" },
    { icon: Users, name: "Collaboration", description: "Team projects and open source" },
    { icon: Heart, name: "Diligent Worker", description: "Committed to quality and excellence" },
    { icon: Book, name: "Continuous Growth", description: "Learning new things daily" },
    { icon: Code, name: "Full Stack", description: "Frontend and backend development" },
    { icon: Users, name: "Event Organization", description: "Organizing tech events" },
    { icon: Heart, name: "Positive Impact", description: "Making changes in society" }
  ]

  return (
    <>
      <SEO page="about" />
      <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              About Me
            </h1>
            <p className="text-secondary max-w-3xl mx-auto text-lg">
              As an IT student, I am deeply passionate about exploring the intricate world of technology 
              and its endless possibilities. From coding to algorithms, databases to artificial intelligence, 
              I am eager to delve into every facet of this dynamic field.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
                                 <h2 className="text-2xl font-bold mb-4 text-primary">My Overview</h2>
                   <div className="space-y-4 text-secondary">
                     <p>
                       As an IT student at Rajkiya Engineering College, Azamgarh, I am deeply passionate about exploring the intricate world of technology 
                       and its endless possibilities. From coding to algorithms, databases to artificial intelligence, 
                       I am eager to delve into every facet of this dynamic field.
                     </p>
                     <p>
                       With a strong foundation in programming languages like C++ and Python, coupled with my 
                       enthusiasm for problem-solving, I am excited to embark on this journey of discovery alongside 
                       my peers and mentors.
                     </p>
                     <p>
                       I believe that through collaboration, creativity, and continuous learning, we can harness 
                       the power of technology to drive positive change in our world.
                     </p>
                   </div>
              <div className="pt-4">
                <a
                  href="https://drive.google.com/file/d/1spgxVXtHAB5re0XJSnpKdWFwOk-GwmfQ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Open Resume
                  <BookOpen className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Skills Overview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Technical Expertise</h2>
              
              {/* Experience Level Legend */}
              <div className="card p-4 mb-6">
                <h3 className="font-semibold mb-3 text-primary">Experience Levels</h3>
                <div className="space-y-2">
                  {Object.entries(experienceLevels).map(([level, config]) => (
                    <div key={level} className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${config.bg} ${config.color}`}>
                        {level}
                      </span>
                      <span className="text-sm text-secondary">{config.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
                                   <div className="grid grid-cols-2 gap-4">
                       <div className="card p-4 text-center">
                         <div className="text-2xl font-bold text-primary-500">10+</div>
                         <div className="text-sm text-secondary">Projects Built</div>
                       </div>
                       <div className="card p-4 text-center">
                         <div className="text-2xl font-bold text-primary-500">500+</div>
                         <div className="text-sm text-secondary">Problems Solved</div>
                       </div>
                       <div className="card p-4 text-center">
                         <div className="text-2xl font-bold text-primary-500">3</div>
                         <div className="text-sm text-secondary">Internships</div>
                       </div>
                     </div>
            </motion.div>
          </div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-primary">Skills by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary-500">{category.category}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const levelConfig = experienceLevels[skill.level as keyof typeof experienceLevels]
                      return (
                        <div key={skill.name} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{skill.icon}</span>
                            <div>
                              <div className="font-medium text-primary">{skill.name}</div>
                              <div className="text-xs text-secondary">{skill.projects} projects</div>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${levelConfig.bg} ${levelConfig.color}`}>
                            {skill.level}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-primary">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">Education</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">Bachelor of Technology in Information Technology</h4>
                      <span className="text-sm text-secondary">2022 - 2026</span>
                    </div>
                    <p className="text-primary-500 font-medium">Rajkiya Engineering College, Azamgarh</p>
                    <ul className="text-sm text-secondary mt-2 space-y-1">
                      <li>• Currently pursuing B.Tech in Information Technology</li>
                      <li>• Relevant coursework: Data Structures & Algorithms, OOP, OS, DBMS, Computer Networking</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">Intermediate (Class XII)</h4>
                      <span className="text-sm text-secondary">2021</span>
                    </div>
                    <p className="text-primary-500 font-medium">Lucknow Public College Sahara States Jankipuram</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-secondary">ICSE Board</span>
                      <span className="text-sm text-green-500 font-medium">96.8%</span>
                    </div>
                    <ul className="text-sm text-secondary mt-2 space-y-1">
                      <li>• Stream: PCM (Physics, Chemistry, Mathematics)</li>
                      <li>• Strong foundation in core sciences and mathematics</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">Certifications</h3>
                <div className="space-y-4">
                  {/* HackerRank Certifications */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Frontend Developer (React)</h4>
                      <p className="text-sm text-secondary mb-3">HackerRank</p>
                      <div className="certificate-iframe-container w-full h-80 border border-gray-300 dark:border-dark-600 rounded bg-gray-50 dark:bg-dark-800">
                        <iframe
                          src="https://www.hackerrank.com/certificates/iframe/c943ce70b4e0"
                          title="Frontend Developer (React) Certificate"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/c943ce70b4e0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm w-full justify-center mt-3"
                      >
                        View Full Certificate
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                    
                    <div className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">CSS (Basic)</h4>
                      <p className="text-sm text-secondary mb-3">HackerRank</p>
                      <div className="certificate-iframe-container w-full h-80 border border-gray-300 dark:border-dark-600 rounded bg-gray-50 dark:bg-dark-800">
                        <iframe
                          src="https://www.hackerrank.com/certificates/iframe/abc6fe7fbcdb"
                          title="CSS (Basic) Certificate"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/abc6fe7fbcdb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm w-full justify-center mt-3"
                      >
                        View Full Certificate
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Currently Pursuing Section */}
                  <div className="text-center p-6 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="text-3xl mb-3">📚</div>
                    <h4 className="font-medium text-primary mb-2">Currently Pursuing</h4>
                    <p className="text-sm text-secondary mb-3">
                      Actively working on obtaining relevant certifications to enhance my professional profile
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs mt-4">
                      <div className="p-2 bg-gray-200 dark:bg-dark-600 rounded text-center">
                        <div className="text-lg mb-1">☁️</div>
                        <div className="font-medium text-primary">Cloud Tech</div>
                        <div className="text-secondary">AWS, Azure</div>
                      </div>
                      <div className="p-2 bg-gray-200 dark:bg-dark-600 rounded text-center">
                        <div className="text-lg mb-1">💻</div>
                        <div className="font-medium text-primary">Programming</div>
                        <div className="text-secondary">Python, Java</div>
                      </div>
                      <div className="p-2 bg-gray-200 dark:bg-dark-600 rounded text-center">
                        <div className="text-lg mb-1">🔒</div>
                        <div className="font-medium text-primary">Security</div>
                        <div className="text-secondary">Cybersecurity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* DSA Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-primary">Data Structures & Algorithms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-primary mb-2">Arrays & Strings</h3>
                <p className="text-sm text-secondary">Advanced manipulation and optimization</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="font-semibold text-primary mb-2">Linked Lists</h3>
                <p className="text-sm text-secondary">Complex pointer operations</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="font-semibold text-primary mb-2">Trees & Graphs</h3>
                <p className="text-sm text-secondary">Traversal and pathfinding</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-primary mb-2">Dynamic Programming</h3>
                <p className="text-sm text-secondary">Optimization techniques</p>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-primary">Beyond the Code</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="card p-6 text-center hover:border-primary-500/50 transition-colors duration-200"
                >
                  <interest.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-primary">{interest.name}</h3>
                  <p className="text-sm text-secondary">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">What I Value</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Continuous Learning</h3>
                <p className="text-secondary text-sm">
                  Always eager to learn new technologies and improve my skills
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Problem Solving</h3>
                <p className="text-secondary text-sm">
                  Passionate about solving complex problems and algorithmic challenges
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Collaboration</h3>
                <p className="text-secondary text-sm">
                  Love interacting with new people and working in teams to achieve goals
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default About 