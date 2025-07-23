"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const education = [
  {
    degree: "B.TECH ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
    institution: "SNS College of Technology",
    period: "2022 - 2026",
    details: "CGPA-8.23 (Till 5th Semester)",
    current: true,
  },
  {
    degree: "HIGHER SECONDARY",
    institution: "St.John's Matric Higher Secondary School",
    period: "2022",
    details: "HSC-78%",
    current: false,
  },
  {
    degree: "SECONDARY",
    institution: "St.John's Matric Higher Secondary School",
    period: "2020",
    details: "SSLC-77%",
    current: false,
  },
]

const internshipExperience = [
  {
    title: "Front-End Web Design Intern",
    company: "ZEVIC SOFTWARE SOLUTIONS",
    period: "Apr 2025",
    description: [
      "Created a website containing book details with update/delete functionalities.",
      "Gained knowledge about JSX, React, Nextjs, Javascript.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "COGNIFYZ TECHNOLOGIES",
    period: "May 2024",
    description: [
      "Created a restaurant recommendation model using machine learning algorithms.",
      "Gained hands-on knowledge about logistic regression and random forest algorithms.",
      "Implemented data preprocessing and feature engineering techniques.",
    ],
  },
]

const certifications = [
  { name: "Data management", issuer: "TCS" },
  { name: "Data structure", issuer: "Springboard" },
  { name: "Python", issuer: "Hakerrank" },
  { name: "HTML", issuer: "Prepinsta" },
  { name: "CSS", issuer: "Prepinsta" },
]

const workshops = [
  {
    title: "IIT(Madras)",
    period: "Mar 2024",
    description:
      "Gained hands-on experience with development tools and code editors such as Jupyter Notebook, specifically in the context of machine learning workflows and experimentation.",
  },
  {
    title: "BIT(Bannari amman institute of technology)",
    period: "June 2024",
    description:
      "Acquired foundational knowledge in Artificial Intelligence and gained hands-on experience with core Machine Learning concepts through practical sessions.",
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="experience"
      className="relative bg-cream dark:bg-gray-900 overflow-hidden transition-colors duration-300"
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
          <span className="inline-block px-4 py-1 rounded-full bg-dark-teal/10 dark:bg-blue-400/10 text-dark-teal dark:text-blue-400 text-sm font-medium mb-4 transition-colors duration-300">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            My academic journey and professional experiences that have shaped my skills and expertise.
          </p>
        </motion.div>

        {/* Education Section - Timeline Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-3 transition-colors duration-300">
            <GraduationCap size={24} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
            Education
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark-teal via-blue-gray to-dark-teal-light dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 transition-colors duration-300" />

            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full border-4 border-cream dark:border-gray-900 shadow-lg z-10 transition-colors duration-300 ${
                    edu.current ? "bg-blue-500" : "bg-dark-teal dark:bg-blue-400"
                  }`}
                />

                {/* Content card */}
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    } ${edu.current ? "ring-2 ring-blue-200 dark:ring-blue-600" : ""}`}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          edu.current
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            : "bg-dark-teal/10 dark:bg-blue-400/10 text-dark-teal dark:text-blue-400"
                        }`}
                      >
                        {edu.period}
                      </span>
                      {edu.current && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs transition-colors duration-300">
                      {edu.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Internship Experience Section - Timeline Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-3 transition-colors duration-300">
            <Briefcase size={24} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
            Internship Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-gray via-dark-teal to-blue-gray-light dark:from-blue-500 dark:via-blue-400 dark:to-blue-600 transition-colors duration-300" />

            {internshipExperience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-blue-gray dark:bg-blue-500 rounded-full border-4 border-cream dark:border-gray-900 shadow-lg z-10 transition-colors duration-300" />

                {/* Content card */}
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full max-w-md bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    <div className="mb-3">
                      <span className="bg-blue-gray/10 dark:bg-blue-500/10 text-blue-gray dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                      {exp.company}
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm space-y-1 transition-colors duration-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-3 transition-colors duration-300">
            <Award size={24} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm text-center cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workshops Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-3 transition-colors duration-300">
            <BookOpen size={24} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
            Workshops
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                  {workshop.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                  {workshop.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                  {workshop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
