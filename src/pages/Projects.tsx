import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    // Full Stack Projects
    {
      title: "Full Stack Club Management Website",
      description: "Developed a MERN stack platform with role-based dashboards where Superadmin assigns roles, Admins manage events and notices, and Users register for events requiring approval. Implemented authentication, approval workflows, and seamless CRUD operations for efficient club management. Designed a responsive, modern UI using React and Tailwind CSS for an optimized user experience.",
      technologies: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/project1.jpg",
      liveUrl: "https://optimix-club-frontend.vercel.app",
      githubUrl: "https://github.com/Shivanshu9120/OptimixClub_frontend.git",
      backendUrl: "https://github.com/Shivanshu9120/OptimixClub_Backend.git",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Full Stack Chat Application",
      description: "Built a real-time chat app using MERN stack and Socket.io, supporting 1-on-1 chats, group chats, and group creation. Implemented JWT and bcrypt-based authentication for secure user login and data protection. Designed a responsive and modern UI using React and Tailwind CSS for a seamless messaging experience.",
      technologies: ["MERN Stack", "Socket.io", "JWT", "bcrypt", "React", "Tailwind CSS"],
      image: "/project2.jpg",
      liveUrl: "https://messenger-eight-gamma.vercel.app",
      githubUrl: "https://github.com/Shivanshu9120/Messenger-frontend.git",
      backendUrl: "https://github.com/Shivanshu9120/Messenger-backend.git",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Full Stack Blog Website",
      description: "Developed a full-stack blog website using Next.js, React, and Tailwind CSS, focusing on responsive design and user-friendly interface. Gained hands-on experience in dynamic content rendering, API integration, and modern web development practices.",
      technologies: ["Next.js", "React", "Tailwind CSS", "API Integration"],
      image: "/project4.jpg",
      liveUrl: "https://my-blog-app-pbw7-jdqgzmuwq-shivanshu-singhs-projects-3c042d22.vercel.app/",
      githubUrl: "https://github.com/Shivanshu9120/My-blog-app.git",
      year: "2024",
      category: "Full Stack"
    },

    // Frontend Projects
    {
      title: "Gemini Clone",
      description: "Developed a responsive React app with dynamic sidebar and context-based state management. Integrated Google Generative AI for asynchronous user interactions and real-time updates.",
      technologies: ["React", "Google AI", "Context API", "Responsive Design"],
      image: "/project3.jpg",
      liveUrl: "https://gemini-clone-psi-kohl.vercel.app/",
      githubUrl: "https://github.com/Shivanshu9120/Gemini-clone.git",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Weather Prediction App",
      description: "Developed a basic Weather App using HTML, CSS, and JavaScript, which allows users to fetch and display real-time weather data for any city using the OpenWeatherMap API. Implemented dynamic features like weather icons and error handling for user input.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      image: "/project5.jpg",
      liveUrl: "https://shivanshu9120.github.io/WeatherApp/",
      githubUrl: "https://github.com/Shivanshu9120/WeatherApp.git",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Text to Speech Convertor",
      description: "Developed a text-to-speech converter using HTML, CSS, and JavaScript, enabling real-time voice output from user-inputted text. Integrated browser-based speech synthesis API for seamless and cross-platform voice playback functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Speech Synthesis API"],
      image: "/project6.jpg",
      liveUrl: "https://shivanshu9120.github.io/Text-to-speech/",
      githubUrl: "https://github.com/Shivanshu9120/Text-to-speech.git",
      year: "2024",
      category: "Frontend"
    }
  ]

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'ML/AI']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              My Projects
            </h1>
            <p className="text-secondary max-w-2xl mx-auto">
              Explore my latest work and see how I bring ideas to life through code.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Stay Tuned!
                </h3>
                <p className="text-secondary text-lg mb-4">
                  {activeFilter === 'Backend' && "Backend projects are in development. Exciting server-side applications coming soon!"}
                  {activeFilter === 'ML/AI' && "Machine Learning and AI projects are brewing. Advanced algorithms and intelligent systems on the horizon!"}
                  {activeFilter !== 'Backend' && activeFilter !== 'ML/AI' && "More amazing projects are in the works. Check back soon!"}
                </p>
                <p className="text-sm text-muted">
                  Currently working on new {activeFilter.toLowerCase()} projects
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects 