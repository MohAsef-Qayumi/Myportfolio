"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter,  } from "lucide-react"
import { useState, useEffect } from "react"
import * as React from "react"
import Image from "next/image"

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const roles = [
    "MERN Stack Developer",
    "AI Enthusiast", 
    "ML Engineer",
    "Python Developer",
    "Full-Stack Engineer",
    "Flutter Developer"
  ]

  // Images corresponding to each role - add your images to the public folder
  const images = [
    "/poto.jpg",      // MERN Stack Developer
    "/poto2.jpg",     // AI Enthusiast
    "/poto3.jpg",     // ML Engineer
    "/poto4.jpg",     // Python Developer
    "/poto5.jpg",     // Full-Stack Engineer
    "/poto6.jpg"      // Flutter Developer
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const deletingSpeed = 50

    if (!isDeleting && currentText === currentRole) {
      // Wait before starting to delete
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    } 

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentRole.slice(0, currentText.length - 1))
      } else {
        setCurrentText(currentRole.slice(0, currentText.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, roles])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Modern Animated Background - Light/Dark Mode Compatible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50/50 to-slate-50 dark:from-black dark:via-slate-900 dark:via-purple-900/50 dark:to-black">
        {/* Animated Hexagon Grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
                <polygon points="6,1 11,3.5 11,8.5 6,11 1,8.5 1,3.5" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-blue-600/40 dark:text-blue-400/50"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hexagons)"/>
          </svg>
        </div>

        {/* Floating Neural Network Nodes */}
        {mounted && [...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-500 rounded-full shadow-lg shadow-blue-500/50 dark:shadow-cyan-400/50"
            style={{
              left: `${10 + (index * 6)}%`,
              top: `${15 + (index % 4 * 20)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 8 + index * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}

        {/* Animated Tech Stack Icons */}
        {[
          { icon: '⚛️', color: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400' },
          { icon: '🔧', color: 'from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400' },
          { icon: '💻', color: 'from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400' },
          { icon: '🚀', color: 'from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400' },
          { icon: '⚡', color: 'from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400' },
          { icon: '🎯', color: 'from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400' },
          { icon: '🔮', color: 'from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400' },
          { icon: '🌟', color: 'from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400' },
        ].map((item, index) => (
          <motion.div
            key={item.icon}
            className={`absolute text-3xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
            style={{
              left: `${75 + (index % 3 * 8)}%`,
              top: `${25 + (index * 8)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Floating Code Snippets */}
        {[
          'let skills = []',
          'const dev = "awesome Asef!"',
          'async function build()',
          'class Portfolio',
          'export default App',
          'npm install success',
        ].map((code, index) => (
          <motion.div
            key={code}
            className="absolute opacity-20"
            style={{
              left: `${20 + (index % 2 * 30)}%`,
              top: `${60 + (index * 6)}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-white/70 to-gray-100/70 dark:from-slate-800/50 dark:to-slate-700/50 border border-gray-300/50 dark:border-slate-600/30 backdrop-blur-sm shadow-sm">
              <code className="text-xs text-gray-700 dark:text-slate-300 font-mono">{code}</code>
            </div>
          </motion.div>
        ))}

        {/* Enhanced Floating Particles */}
        {mounted && [...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            } as React.CSSProperties}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Circuit Paths */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M5,15 Q25,5 45,15 T85,20"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M10,85 Q30,75 50,85 T90,90"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 4,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M15,50 Q35,40 55,50 T95,55"
            stroke="url(#gradient3)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 8,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" className="dark:stop-color-[#06b6d4]"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" className="dark:stop-color-[#3b82f6]"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" className="dark:stop-color-[#8b5cf6]"/>
              <stop offset="100%" stopColor="#db2777" stopOpacity="0.8" className="dark:stop-color-[#ec4899]"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.8" className="dark:stop-color-[#10b981]"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" className="dark:stop-color-[#06b6d4]"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic Glowing Orbs */}
        <motion.div
          className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 dark:from-green-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Advanced Digital Rain */}
        {mounted && (
          <div className="absolute inset-0 opacity-15">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-600 dark:text-cyan-400 text-xs font-mono font-bold"
                style={{
                  left: `${5 + (i * 4.5)}%`,
                  top: `-30px`,
                } as React.CSSProperties}
                animate={{
                  y: [0, typeof window !== 'undefined' ? window.innerHeight + 30 : 800],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 25 + Math.random() * 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 20,
                }}
              >
                {[
                  '01', '10', '11', '00', 'JS', 'TS', 'ML', 'AI', 'DB', 'API', 
                  'DEV', 'CODE', 'REACT', 'NODE', 'MERN', 'STACK', 'FULL', 'WEB', 'APP', 'DATA'
                ][i]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{
              left: `${85 + (index % 2 * 10)}%`,
              top: `${10 + (index * 10)}%`,
            } as React.CSSProperties}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 20 + index * 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          >
            <div className={`w-8 h-8 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 dark:from-cyan-400/30 dark:to-blue-500/30 ${
              index % 2 === 0 ? 'rounded-full' : 'rotate-45'
            }`}></div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <motion.div
            className="lg:order-1 order-1 text-center lg:text-left flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gray-900 dark:text-white">Hi, I m </span>
              <span className="gradient-text">Moh.Asef</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300 min-h-[3rem] flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">
                {currentText}
                <motion.span
                  className="inline-block w-1 h-8 bg-blue-600 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about creating innovative web applications, machine learning solutions, 
              and AI-powered experiences. Specializing in full-stack development with modern technologies.
            </motion.p>

             {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="./resume.pdf"
                download="Moh-Asef-Resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.button
                onClick={scrollToAbout}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.button>
            </motion.div>
            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: Github, href: "https://github.com/MohAsef-Qayumi", target: "_blank", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohammadasef-qayumi/", target: "_blank", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/AsefQayumi7989", target: "_blank", label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.target}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 text-gray-700 dark:text-gray-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture Section - Right Side */}
          <motion.div
            className="lg:order-2 order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Profile Picture Container */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Profile Picture */}
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={images[currentRoleIndex]}
                      alt="Moh.Asef"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </motion.div>
    </section>
  )
} 