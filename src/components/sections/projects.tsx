"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "A full-stack e-commerce platform with AI-powered product recommendations, chatbot customer service, and intelligent inventory management.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "Python", "AWS"],
      category: "Full-Stack + AI",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Machine Learning Analytics Dashboard",
      description: "Real-time analytics dashboard with ML-powered insights, predictive modeling, and interactive data visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "PostgreSQL"],
      category: "ML/AI",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Enterprise Java Microservices",
      description: "Scalable microservices architecture for enterprise applications with Spring Boot, Docker, and Kubernetes deployment.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      category: "Java/Enterprise",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media Analytics Tool",
      description: "Advanced social media analytics platform with sentiment analysis, trend prediction, and automated reporting.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Python", "NLP", "MongoDB", "Redis"],
      category: "Full-Stack + AI",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern real-time chat application with WebSocket connections, file sharing, and end-to-end encryption.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "AWS"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Predictive Maintenance System",
      description: "IoT-based predictive maintenance system using machine learning to predict equipment failures and optimize maintenance schedules.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "IoT", "React", "FastAPI", "InfluxDB"],
      category: "ML/AI + IoT",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Innovation Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="innovation" width="12" height="12" patternUnits="userSpaceOnUse">
                <path d="M6,0 L6,12 M0,6 L12,6" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="6" cy="6" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#innovation)" className="text-gray-600 dark:text-gray-400"/>
          </svg>
        </div>

        {/* Floating Project Cards */}
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={`bg-${project.title}`}
            className="absolute opacity-5"
            style={{
              left: `${10 + (index * 20)}%`,
              top: `${20 + (index % 2 * 30)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold text-center p-2">
              {project.category.split(' ')[0]}
            </div>
          </motion.div>
        ))}

        {/* Technology Icons */}
        {['React', 'Node', 'Python', 'Java', 'ML', 'AI', 'Cloud', 'DB'].map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute opacity-10 text-2xl"
            style={{
              left: `${85 + (index % 3 * 5)}%`,
              top: `${30 + (index * 10)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            {tech === 'React' && '⚛️'}
            {tech === 'Node' && '🟢'}
            {tech === 'Python' && '🐍'}
            {tech === 'Java' && '☕'}
            {tech === 'ML' && '🧠'}
            {tech === 'AI' && '🤖'}
            {tech === 'Cloud' && '☁️'}
            {tech === 'DB' && '🗄️'}
          </motion.div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M20,30 Q40,20 60,30 T80,40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-blue-600 dark:text-blue-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M20,70 Q40,60 60,70 T80,80"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-purple-600 dark:text-purple-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 3,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M30,20 Q50,10 70,20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-green-600 dark:text-green-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 6,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Floating Innovation Elements */}
        {['💡', '🚀', '⚡', '🎯', '🔧', '📊'].map((emoji, index) => (
          <motion.div
            key={emoji}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${70 + (index % 2 * 10)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work across different technologies and domains, 
            demonstrating expertise in full-stack development, machine learning, and enterprise solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl glass dark:glass-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-xl glass dark:glass-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together? Lets discuss your project!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 