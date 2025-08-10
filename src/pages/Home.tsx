import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Home = () => {
  const featuredProjects = [
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
      title: "Gemini Clone",
      description: "Developed a responsive React app with dynamic sidebar and context-based state management. Integrated Google Generative AI for asynchronous user interactions and real-time updates.",
      technologies: ["React", "Google AI", "Context API", "Responsive Design"],
      image: "/project3.jpg",
      liveUrl: "https://gemini-clone-psi-kohl.vercel.app/",
      githubUrl: "https://github.com/Shivanshu9120/Gemini-clone.git",
      year: "2024",
      category: "Frontend"
    }
  ]

  const testimonials = [
    {
      name: "CodSoft",
      role: "Web Developer Intern",
      content: "During this internship, Shivanshu developed responsive web applications, collaborated on UI/UX design, and implemented backend services. Successfully contributed to projects that enhanced user engagement and system efficiency.",
      rating: 5
    },
    {
      name: "CodSoft",
      role: "Machine Learning Intern",
      content: "During this internship, Shivanshu developed machine learning models, collaborated on UI/UX design, and implemented backend services. Successfully contributed to projects that enhanced user engagement and system efficiency.",
      rating: 5
    },
    
  ]

  return (
    <>
      <SEO page="home" />
      <div className="pt-16">
        <Hero />
      
      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800/50 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Featured Projects
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              See how I transformed concepts into engaging digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Experience & Recognition
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              My professional journey and achievements in the tech industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-secondary mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home 