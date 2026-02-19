"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9" /> // Placeholder to prevent layout shift
    )
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  )
} 