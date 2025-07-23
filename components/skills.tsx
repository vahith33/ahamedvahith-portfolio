"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const programmingLanguages = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Java (Basics)", level: 60 },
  { name: "SQL", level: 70 },
]

const aiSkills = [
  { name: "Gen AI", level: 60 },
  { name: "Prompt Engineering", level: 80 },
  { name: "Automation", level: 75 },
]

const fullstackSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React", level: 80 },
  { name: "Figma", level: 70 },
  { name: "TailwindCSS", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "RESTful API", level: 60 },
  { name: "Design", level: 80 },
]

const toolsAndSoftware = [
  { name: "VS Code", initial: "VS" },
  { name: "Google Collab", initial: "GC" },
  { name: "Github", initial: "Git" },
  { name: "Canva", initial: "CV" },
]

const softSkills = ["Team Work", "Adaptive", "User Empathy", "Problem Solving"]

const languages = ["Tamil", "English"]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume/ahamed-vahith-resume.pdf"
    link.download = "Ahamed_Vahith_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const SkillBar = ({
    skill,
    index,
    color = "bg-dark-teal dark:bg-blue-400",
  }: { skill: any; index: number; color?: string }) => (
    <motion.div
      key={skill.name}
      variants={itemVariants}
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex items-center gap-4 cursor-pointer"
    >
      <span className="text-gray-700 dark:text-gray-300 w-40 text-left text-sm transition-colors duration-300">
        {skill.name}
      </span>
      <div className="flex-1 bg-warm-beige dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`${color} h-2 rounded-full transition-colors duration-300`}
        />
      </div>
      <span className="text-gray-700 dark:text-gray-300 font-medium w-10 text-right text-sm transition-colors duration-300">
        {skill.level}%
      </span>
    </motion.div>
  )

  return (
    <section
      id="skills"
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
          <span className="inline-block px-4 py-1 rounded-full bg-dark-teal/10 dark:bg-blue-400/10 text-dark-teal dark:text-blue-400 text-sm font-medium mb-4 transition-colors duration-300">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            The technologies, tools, and skills I use to bring digital products to life.
          </p>
        </motion.div>

        {/* Programming Languages & Database */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            Programming Languages & Database
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {programmingLanguages.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* AI Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            AI Skills
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {aiSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} color="bg-blue-gray dark:bg-blue-500" />
            ))}
          </div>
        </motion.div>

        {/* Full Stack Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            Full Stack Skills
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {fullstackSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
                color="bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300"
              />
            ))}
          </div>
        </motion.div>

        {/* Tools & Software */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            Tools & Software
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {toolsAndSoftware.map((tool) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm text-center cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-dark-teal dark:bg-blue-500 rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                  <span className="text-cream font-bold text-lg">{tool.initial}</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills and Languages */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center transition-colors duration-300">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center transition-colors duration-300">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <motion.div
                  key={lang}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm transition-colors duration-300">
                    {lang}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          id="resume"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-300">
            My Resume
          </h3>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={handleResumeDownload}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-500 dark:to-blue-600 text-cream px-8 py-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <FileText size={24} />
            <div className="text-left">
              <p className="font-semibold">Download Resume</p>
              <p className="text-sm opacity-90">Ahamed Vahith K - ML Engineer</p>
            </div>
            <Download size={20} />
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 transition-colors duration-300">
            Click to download my complete resume
          </p>
        </motion.div>
      </div>
    </section>
  )
}
