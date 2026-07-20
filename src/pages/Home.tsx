import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Home = () => {
  const featuredProjects = [
    {
      title: "Seamaster AI",
      description: "Developed as a software engineer intern at Meteorites Lab, Seamaster AI is a RAG-based AI chatbot designed specifically for seafarers. Engineered the retrieval-augmented generation pipeline, optimized for local search engines using SEO & GEO positioning, designed timeline components, and crafted a highly intuitive, responsive UI.",
      technologies: ["Next.js", "Python", "Flask", "Strapi", "RAG", "Tailwind CSS"],
      image: "/project7.jpg",
      liveUrl: "https://seamasterai.com",
      year: "2026",
      category: "Full Stack",
      pinned: true
    },
    {
      title: "Explorers",
      description: "Developed as a software engineer intern at Meteorites Lab, Explorers is a curation and recommendation platform allowing users to discover, build, and share themed lists of movies, books, music, travel spots, and local guidebooks. Led the engineering team as project lead, oversaw DevOps pipelines & CI/CD deployment, integrated AI for automated guide curation, and implemented Razorpay for payment processing.",
      technologies: ["React", "Strapi", "AI Integration", "DevOps", "Razorpay", "Tailwind CSS"],
      image: "/project8.jpg",
      liveUrl: "https://explorers.earth",
      year: "2026",
      category: "Full Stack",
      pinned: true
    },
    {
      title: "Full Stack Club Management Website",
      description: "Developed a MERN stack platform with role-based dashboards where Superadmin assigns roles, Admins manage events and notices, and Users register for events requiring approval. Implemented authentication, approval workflows, and seamless CRUD operations for efficient club management. Designed a responsive, modern UI using React and Tailwind CSS for an optimized user experience.",
      technologies: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/project1.jpg",
      liveUrl: "https://optimix-club-frontend.vercel.app",
      githubUrl: "https://github.com/Shivanshu9120/OptimixClub_frontend.git",
      backendUrl: "https://github.com/Shivanshu9120/OptimixClub_Backend.git",
      year: "2024",
      category: "Full Stack",
      pinned: true
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
      category: "Full Stack",
      pinned: true
    }
  ]

  const testimonials = [
    {
      name: "Meteorites Lab",
      role: "Software Engineer Intern",
      content: "Shivanshu was a core developer during his internship. He successfully engineered the retrieval pipelines for Seamaster AI, led the frontend and DevOps setup for Explorers, and integrated complex APIs like Razorpay and AI generators with high reliability.",
      rating: 5
    }
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