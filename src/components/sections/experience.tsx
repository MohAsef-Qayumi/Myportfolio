"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, GraduationCap, Award } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "Freelancing.",
      location: "Remote",
      period: "2024 - Present",
      description: "Leading development of AI-powered web applications using MERN stack. Implemented machine learning algorithms for product recommendations and user behavior analysis.",
      technologies: ["React", "Node.js", "MongoDB", "Python", "TensorFlow", "AWS"],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented ML-powered recommendation system",
        "Led team of 5 developers on major projects"
      ]
    },
    {
      type: "work",
      title: "Full-Stack web engineer",
      company: "Freelancing",
      location: "Remote",
      period: "2023 - 2024",
      description: "Developed and maintained enterprise Java applications using Spring Boot. Built RESTful APIs and microservices architecture.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
      achievements: [
        "Built 10+ microservices for enterprise platform",
        "Improved system reliability by 99.9%",
        "Mentored junior developers"
      ]
    },
    {
      type: "work",
      title: "Flutter developer",
      company: "In persons clients",
      location: "Herat, Afg",
      period: "2022 - 2023",
      description: "Started career building Mobile applications with flutter and Dart. Contributed to various projects and learned modern development practices.",
      technologies: ["Dart", "Android app", "Ios", "Firebase"],
      achievements: [
        "Built 5+ client projects",
        "Learned modern development workflows",
        "Contributed to open source projects"
      ]
    }
  ]

  const education = [
    {
      type: "education",
      title: "Bachelor Of software engineering",
      institution: "Herat University",
      location: "Herat, Afg",
      period: "2020 - 2022",
      description: "Specialized in software Engineering,  Completed 4th semester and shift to AI'.",
      achievements: [
        "Percentage: 93%",
        "Got familiarity with computer and programming languages",
      ]
    },
    {
      type: "education",
      title: "Full stack web development certificate",
      institution: "Remotely received from Meta",
      location: "Remote",
      period: "2018 - 2020",
      description: "Focused on software engineering and web development. completed with honors and multiple academic awards.",
      achievements: [
        "Hands-on experience",
        "Real world project development",
      ]
    }
  ]

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      icon: "🌐"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2021",
      icon: "🧠"
    },
    {
      title: "Oracle Certified Java Developer",
      issuer: "Oracle",
      date: "2020",
      icon: "☕"
    }
  ]

  const allItems = [...experiences, ...education]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Timeline Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="timeline" width="15" height="15" patternUnits="userSpaceOnUse">
                <line x1="7.5" y1="0" x2="7.5" y2="15" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#timeline)" className="text-gray-600 dark:text-gray-400"/>
          </svg>
        </div>

        {/* Floating Achievement Icons */}
        {allItems.map((item, index) => (
          <motion.div
            key={`bg-${item.type}-${index}`}
            className="absolute opacity-10"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${25 + (index % 2 * 20)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              item.type === 'work' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
            }`}>
              {item.type === 'work' ? <Building className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
            </div>
          </motion.div>
        ))}

        {/* Career Progression Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M15,20 Q30,15 45,20 T75,25 T90,30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-blue-600 dark:text-blue-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M15,70 Q30,65 45,70 T75,75 T90,80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-600 dark:text-purple-400"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: 5,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Achievement Stars */}
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-yellow-500 dark:text-yellow-400 opacity-20"
            style={{
              left: `${10 + (index * 7)}%`,
              top: `${40 + (index % 3 * 15)}%`,
            } as React.CSSProperties}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + index * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            ⭐
          </motion.div>
        ))}

        {/* Certification Badges */}
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="absolute opacity-10"
            style={{
              left: `${80 + (index % 2 * 10)}%`,
              top: `${20 + (index * 15)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-lg">
              {cert.icon}
            </div>
          </motion.div>
        ))}

        {/* Floating Career Elements */}
        {['💼', '🎓', '🏆', '📈', '🚀', '⭐'].map((emoji, index) => (
          <motion.div
            key={emoji}
            className="absolute text-xl opacity-15"
            style={{
              left: `${15 + (index * 14)}%`,
              top: `${75 + (index % 2 * 8)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6 + index * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
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
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background in technology and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="p-6 rounded-2xl glass dark:glass-dark"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {'company' in item ? item.company : item.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    {'technologies' in item && item.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="p-6 rounded-2xl glass dark:glass-dark text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 