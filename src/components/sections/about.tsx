"use client"

import { motion } from "framer-motion"
import { Code, Brain, Database, Globe, Zap, Users } from "lucide-react"

export function About() {
  const stats = [
    { icon: Code, value: "4+", label: "Years Experience" },
    { icon: Database, value: "15+", label: "Projects Completed" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Zap, value: "100%", label: "Success Rate" },
  ]

  const expertise = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with MERN stack, React, Node.js, and MongoDB.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Developing intelligent solutions with Python, TensorFlow, and advanced AI algorithms.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Java Applications",
      description: "Creating robust enterprise applications with Spring Boot and Java technologies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on AWS, Docker, and CI/CD pipelines.",
      color: "from-green-500 to-emerald-500"
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-gray-600 dark:text-gray-400"/>
          </svg>
        </div>

        {/* Floating Expertise Icons */}
        {expertise.map((item, index) => (
          <motion.div
            key={item.title}
            className="absolute opacity-10"
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index % 2 * 20)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
              <item.icon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}

        {/* Growth Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M10,90 Q25,70 40,80 T70,60 T90,40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-blue-600 dark:text-blue-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M10,80 Q30,60 50,70 T80,50 T90,30"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-purple-600 dark:text-purple-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 3,
              ease: "easeInOut"
            }}
          />
        </svg>
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer with expertise in modern web technologies, artificial intelligence, 
            and enterprise solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Turning Ideas Into Reality
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <p>
                I'm a dedicated full-stack developer with over 3 years of experience creating 
                innovative digital solutions. My journey in technology started with a curiosity 
                for building things that make a difference.
              </p>
              <p>
                Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I've 
                developed a deep understanding of modern web architecture and user experience design.
              </p>
              <p>
                My passion extends beyond web development into the exciting world of Machine Learning 
                and Artificial Intelligence, where I've worked on projects ranging from predictive 
                analytics to natural language processing.
              </p>
              <p>
                I also bring strong expertise in Java development, having built enterprise-level 
                applications using Spring Boot, microservices architecture, and cloud-native technologies.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass dark:glass-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl glass dark:glass-dark text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 