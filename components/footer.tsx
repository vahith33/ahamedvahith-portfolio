"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Heart, Sun } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vahith33",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vahith33?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vahith_33?igsh=ZDh1YXdhaGQ0aDhj",
      label: "Instagram",
    },
  ]

  return (
    <footer className="bg-warm-beige-light dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-2">
              Ahamed Vahith K
            </h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Machine Learning Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-6 md:mb-0"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream dark:bg-gray-700 border border-warm-beige dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-dark-teal dark:hover:text-blue-400 hover:bg-dark-teal/5 dark:hover:bg-blue-400/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
              <Sun className="text-yellow-500 dark:text-yellow-400" size={16} />
              <span className="text-sm">Have a great day!</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <span>Made with</span>
              <Heart className="text-dark-teal dark:text-blue-400" size={16} />
              <span>ahamedvahith@2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
