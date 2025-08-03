import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Code, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setFormStatus('sending')
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Shivanshu Singh'
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      if (result.status === 200) {
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle')
        }, 3000)
      } else {
        setFormStatus('error')
        setTimeout(() => {
          setFormStatus('idle')
        }, 3000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus('error')
      setTimeout(() => {
        setFormStatus('idle')
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  return (
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
              Let's Connect
            </h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Collaboration knows no bounds, it's the bridge to boundless achievement. 
              Hand in hand, we write the story of success through collaboration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:outline-none transition-colors duration-200 text-primary ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 dark:border-dark-700 focus:border-primary-500'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:outline-none transition-colors duration-200 text-primary ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 dark:border-dark-700 focus:border-primary-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-primary">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:outline-none transition-colors duration-200 text-primary ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-dark-700 focus:border-primary-500'
                    }`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:outline-none transition-colors duration-200 resize-none text-primary ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-dark-700 focus:border-primary-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                {/* Form Status */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-500 bg-green-500/10 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-500 bg-red-500/10 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`btn-primary inline-flex items-center ${
                    formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                <p className="text-secondary mb-8">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your visions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-secondary">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-secondary">kshatriyasarkar214@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-secondary">+91 9140284510</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Education</h3>
                    <p className="text-secondary">B.Tech IT, Rajkiya Engineering College, Azamgarh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Languages</h3>
                    <p className="text-secondary">English, Hindi</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4 text-primary">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://leetcode.com/u/Shivanshu_018/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg flex items-center justify-center hover:border-primary-500 transition-colors duration-200"
                  >
                    <Code className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://github.com/Shivanshu9120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg flex items-center justify-center hover:border-primary-500 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivanshu-singh-7bb733220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg flex items-center justify-center hover:border-primary-500 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://x.com/Shivaanshusingh?t=nSV4Rcsf_cj9kzI9zyofkg&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg flex items-center justify-center hover:border-primary-500 transition-colors duration-200"
                  >
                    <Twitter className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Additional Profiles */}
              <div>
                <h3 className="font-semibold mb-4 text-primary">Coding Profiles</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.geeksforgeeks.org/user/kshatriyas1g55/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-secondary hover:text-primary transition-colors duration-200"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>GeeksforGeeks</span>
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/kshatriyasarkar1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-secondary hover:text-primary transition-colors duration-200"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>HackerRank</span>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="card p-6">
                <h3 className="font-semibold mb-2 text-primary">Current Availability</h3>
                <p className="text-secondary text-sm mb-4">
                  I'm currently available for new projects and collaborations.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-500 font-medium">Available for work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 