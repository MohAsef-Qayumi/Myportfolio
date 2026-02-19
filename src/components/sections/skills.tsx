"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import * as React from "react"

export function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-gray-800 to-gray-600" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-400" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-500" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Express.js", level: 88, color: "from-gray-600 to-gray-400" },
        { name: "MongoDB", level: 85, color: "from-green-600 to-green-400" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-400" },
        { name: "REST APIs", level: 92, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Python", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "TensorFlow", level: 75, color: "from-orange-600 to-orange-400" },
        { name: "PyTorch", level: 70, color: "from-red-500 to-red-400" },
        { name: "Scikit-learn", level: 80, color: "from-orange-500 to-orange-400" },
        { name: "NLP", level: 72, color: "from-purple-500 to-purple-400" },
      ]
    },
    {
      title: "Java & Enterprise",
      skills: [
        { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Spring Boot", level: 80, color: "from-green-600 to-green-400" },
        { name: "Microservices", level: 75, color: "from-blue-500 to-blue-400" },
        { name: "Docker", level: 78, color: "from-blue-600 to-blue-400" },
        { name: "Kubernetes", level: 65, color: "from-blue-500 to-blue-400" },
      ]
    }
  ]

  const tools = [
    { name: "Git", icon: "🔧" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Stripe", icon: "💳" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
    { name: "Supabase", icon: "📋" },
    { name: "Figma", icon: "🎨" },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="tech-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#tech-grid)" className="text-gray-600 dark:text-gray-400"/>
          </svg>
        </div>

        {/* Floating Skill Icons */}
        {skillCategories.map((category, categoryIndex) => 
          category.skills.slice(0, 3).map((skill, skillIndex) => (
            <motion.div
              key={`${category.title}-${skill.name}`}
              className="absolute opacity-5"
              style={{
                left: `${15 + (categoryIndex * 20) + (skillIndex * 5)}%`,
                top: `${20 + (skillIndex * 15)}%`,
              } as React.CSSProperties}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 10 + skillIndex * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: categoryIndex * 0.5 + skillIndex * 0.2,
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-lg font-bold`}>
                {skill.name.charAt(0)}
              </div>
            </motion.div>
          ))
        )}

        {/* Animated Progress Bars Background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${30 + (i * 8)}%`,
                width: `${60 + (i * 5)}%`,
              } as React.CSSProperties}
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Digital Rain Effect */}
        {mounted && (
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 dark:text-green-400 text-xs font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-20px`,
                } as React.CSSProperties}
                animate={{
                  y: [0, window.innerHeight + 20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 10,
                }}
              >
                {['01', '10', '11', '00', 'JS', 'TS', 'ML', 'AI', 'DB', 'API'][Math.floor(Math.random() * 10)]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Skill Category Orbs */}
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="absolute w-20 h-20 rounded-full opacity-10"
            style={{
              left: `${80 + (index * 5)}%`,
              top: `${60 + (index * 10)}%`,
            } as React.CSSProperties}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1,
            }}
          >
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${
              index === 0 ? 'from-blue-500 to-cyan-500' :
              index === 1 ? 'from-green-500 to-emerald-500' :
              index === 2 ? 'from-yellow-500 to-orange-500' :
              'from-orange-500 to-red-500'
            }`} />
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="p-8 rounded-2xl glass dark:glass-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="text-center p-4 rounded-xl glass dark:glass-dark"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum", "CI/CD", "RESTful APIs", "GraphQL", "WebSockets",
              "Redux", "Context API", "JWT", "OAuth", "Testing (Jest, Cypress)",
              "Performance Optimization", "SEO", "Responsive Design", "PWA",
              "Serverless", "Cloud Computing", "Data Analysis", "API Design"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 