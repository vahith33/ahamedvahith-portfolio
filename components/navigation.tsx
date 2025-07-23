"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Home, User, FolderOpen, Zap, Mail, FileText, Moon, Sun } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "resume", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 dark:bg-gray-900/95 border-b border-warm-beige dark:border-gray-700 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="text-lg font-bold bg-gradient-to-r from-dark-teal to-blue-gray bg-clip-text text-transparent">
            Ahamed Vahith
          </div>

          {/* Desktop Navigation - Full Right */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-1.5 text-xs transition-colors duration-200 px-2.5 py-1.5 rounded-lg ${
                      isActive
                        ? "text-dark-teal bg-dark-teal/10 dark:text-blue-400 dark:bg-blue-400/10"
                        : "text-gray-600 hover:text-dark-teal hover:bg-dark-teal/5 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-400/5"
                    }`}
                  >
                    <Icon size={14} />
                    {item.name}
                  </button>
                )
              })}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-dark-teal/10 hover:bg-dark-teal/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-dark-teal dark:text-blue-400" />
              ) : (
                <Moon size={18} className="text-dark-teal dark:text-blue-400" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-dark-teal/10 hover:bg-dark-teal/20 dark:bg-blue-400/10 dark:hover:bg-blue-400/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-dark-teal dark:text-blue-400" />
              ) : (
                <Moon size={18} className="text-dark-teal dark:text-blue-400" />
              )}
            </motion.button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-left py-3 px-4 text-gray-600 hover:text-dark-teal hover:bg-dark-teal/5 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-400/5 rounded-lg transition-colors"
                >
                  <Icon size={16} />
                  {item.name}
                </button>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
