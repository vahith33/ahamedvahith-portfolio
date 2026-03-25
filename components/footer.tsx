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
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Icons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cream dark:bg-gray-700 border border-warm-beige dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-dark-teal dark:hover:text-blue-400 hover:bg-dark-teal/5 dark:hover:bg-blue-400/5 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </motion.div>

          {/* Footer Info & Message - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">

              <span className="text-sm">Copyright © 2025 Ahamed Vahith. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-serif transition-colors duration-300 pt-2">
              <Sun className="text-yellow-500 dark:text-yellow-400" size={18} />
              <span className="text-xl tracking-wide italic">Have a great day!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
