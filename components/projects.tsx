"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import AnimatedBackground from "@/components/animated-background"

const projects = [
  {
    title: "Web Scraping LinkedIn Jobs",
    description:
      "A web scraping project that extracts job availability data from LinkedIn using Selenium, Beautiful Soup, and HTML Edge Driver for automated data collection.",
    image: "/images/projects/webscraping-linkedin.png",
    technologies: ["Python", "Selenium", "Beautiful Soup", "HTML", "Edge Driver"],
    github: "https://github.com/vahith33/webscraping-in-linkedin",
    demo: "https://github.com/vahith33/webscraping-in-linkedin",
  },
  {
    title: "Stock Market Prediction",
    description:
      "Analyzes stock data using technical indicators like SMA, RSI, and MACD. Processes and visualizes data to provide insights into stock price movements using machine learning.",
    image: "/images/projects/stock-market-prediction.png",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SVM", "Regression"],
    github: "https://github.com/vahith33/stock_market_prediction",
    demo: "https://github.com/vahith33/stock_market_prediction",
  },
  {
    title: "Technical Summary Writer",
    description:
      "An AI-powered project that generates concise summaries of technical paragraphs using Large Language Models and Hugging Face Transformers.",
    image: "/images/projects/technical-summary-writer.png",
    technologies: ["Python", "Hugging Face", "Transformers", "LLM"],
    github: "https://colab.research.google.com/drive/15vpthRFotlqRoNK-etastATwSv3INj8v?usp=sharing",
    demo: "https://colab.research.google.com/drive/15vpthRFotlqRoNK-etastATwSv3INj8v?usp=sharing",
  },
  {
    title: "BookSky",
    description:
      "A web development project for uploading and viewing book details. Features a clean interface for managing book information and browsing book collections.",
    image: "/images/projects/booksky.png",
    technologies: ["TailwindCSS", "JSX", "HTML", "Web Development"],
    github: "https://github.com/vahith33/Booksky",
    demo: "https://github.com/vahith33/Booksky",
  },
  {
    title: "Inventory Management System",
    description:
      "A Java-based system for managing product stocks using efficient data structures. Implements hash tables for optimal inventory tracking and management.",
    image: "/images/projects/inventory-management.png",
    technologies: ["Java", "Data Structures", "Hash Table", "OOP"],
    github: "https://github.com/vahith33/Inventory-managment-system",
    demo: "https://github.com/vahith33/Inventory-managment-system",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="projects"
      className="relative bg-warm-beige-light dark:bg-gray-800 overflow-hidden transition-colors duration-300"
    >
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            A showcase of my recent work spanning web scraping, machine learning, AI, and full-stack development
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700"
            >
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-600">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Github size={16} className="text-gray-800" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-dark-teal dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-teal/10 dark:bg-blue-400/10 border border-dark-teal/20 dark:border-blue-400/20 rounded-full text-xs text-dark-teal dark:text-blue-400 font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/vahith33"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-teal dark:bg-blue-500 text-cream rounded-lg font-medium hover:bg-dark-teal-light dark:hover:bg-blue-600 transition-colors shadow-lg"
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
