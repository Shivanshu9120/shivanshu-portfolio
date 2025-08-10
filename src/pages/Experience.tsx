import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, Zap, Code } from 'lucide-react'
import SEO from '../components/SEO'

const Experience = () => {
  const internships = [
    {
      company: "Meteorite Labs",
      position: "Software Engineer Intern",
      duration: "June 2025 - Present",
      location: "Remote",
      certificate: "",
      description: "Engineered responsive interfaces with Next.js and TypeScript, resulting in seamless user experiences. Integrated Strapi CMS using REST/GraphQL APIs while implementing AI features via OpenAI/Pinecone. Developed a modular component library that enhanced development efficiency and code reusability by 25%.",
      achievements: [
        "Engineered responsive interfaces with Next.js and TypeScript",
        "Integrated Strapi CMS using REST/GraphQL APIs",
        "Implemented AI features via OpenAI/Pinecone",
        "Developed modular component library enhancing efficiency by 25%",
        "Created seamless user experiences across platforms",
        "Collaborated on cutting-edge AI integration projects"
      ],
      technologies: ["Next.js", "TypeScript", "React", "Strapi CMS", "OpenAI API", "Pinecone", "GraphQL"],
      image: "/meteorite.png"
    },
  ]

  const certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    certificate: string;
    image: string;
  }> = [
    // Currently no certifications available
    // Placeholder for future certifications
  ]

  return (
    <>
      <SEO page="experience" />
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
              Experience & Certifications
            </h1>
            <p className="text-secondary max-w-3xl mx-auto text-lg">
              My professional journey through internships and certifications that have shaped my technical expertise.
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Internship Experience</h2>
            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card p-8"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Image and Basic Info */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-4">🏢</div>
                        <h3 className="text-xl font-bold text-primary-500">{internship.company}</h3>
                        <p className="text-secondary">{internship.position}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary-500" />
                          <span className="text-secondary">{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary-500" />
                          <span className="text-secondary">{internship.location}</span>
                        </div>
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-primary-500 hover:text-primary-400 transition-colors duration-200"
                        >
                          <Award className="w-5 h-5" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Description</h4>
                        <p className="text-secondary leading-relaxed">{internship.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center text-primary">
                          <Zap className="w-5 h-5 mr-2 text-primary-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center text-primary">
                          <Code className="w-5 h-5 mr-2 text-primary-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Programming Languages</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">JavaScript</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">TypeScript</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Python</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">C/C++</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Java</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">SQL</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Frontend Development</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">React.js</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Next.js</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">HTML5/CSS3</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Tailwind CSS</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Material-UI</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Bootstrap</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Redux</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.7 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Backend Development</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MongoDB</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">REST API</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div> 
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">FastAPI</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Node.js</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Express.js</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Socket.io</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Database & DevOps</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MongoDB</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MySQL</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Docker</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Vercel</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">AI/ML & Tools</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">OpenAI API</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">LangChain</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Vector Databases</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Pinecone</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Git</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Postman</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Trello</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.0 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Achievements & Ratings</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">GATE 2025</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Qualified</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Problems Solved</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">500+</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Projects Build</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">10+</span>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.2 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">📊</div>
                 <h3 className="font-semibold text-primary mb-2">500+ Problems Solved</h3>
                 <p className="text-sm text-secondary">Across GeeksforGeeks, LeetCode, and HackerRank</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.3 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-semibold text-primary mb-2">GATE 2025</h3>
                 <p className="text-sm text-secondary">Qualified</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.3 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-semibold text-primary mb-2">10+ Projects Built</h3>
                 <p className="text-sm text-secondary">Using modern technologies and best practices</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.4 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">💼</div>
                 <h3 className="font-semibold text-primary mb-2">2 Successful Internships</h3>
                 <p className="text-sm text-secondary">Real-world project experience</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Certifications</h2>
            {certifications.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                    className="card p-6 hover:border-primary-500/50 transition-colors duration-200"
                  >
                    <div className="text-center space-y-4">
                      <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg p-4">
                        <div className="text-3xl mb-2">🏆</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{cert.name}</h3>
                        <p className="text-sm text-secondary">{cert.issuer}</p>
                        <p className="text-xs text-muted">{cert.date}</p>
                      </div>
                      <a
                        href={cert.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="text-center"
              >
                <div className="card p-12">
                  <div className="text-6xl mb-6">📚</div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Currently Pursuing Certifications</h3>
                  <p className="text-secondary mb-6 max-w-2xl mx-auto">
                    I'm actively working on obtaining relevant certifications in web development, 
                    cloud technologies, and programming languages to enhance my professional profile.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted">
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌐</div>
                      <div className="font-medium text-primary">Web Development</div>
                      <div>React, Node.js, Full Stack</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">☁️</div>
                      <div className="font-medium text-primary">Cloud Technologies</div>
                      <div>AWS, Azure, Google Cloud</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">💻</div>
                      <div className="font-medium text-primary">Programming</div>
                      <div>Python, JavaScript, Java</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Experience 