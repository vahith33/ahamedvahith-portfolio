"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const getIconUrl = (name: string) => {
  const icons: { [key: string]: string } = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    TailwindCSS: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Supabase: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Google Colab": "https://cdn.simpleicons.org/googlecolab/F9AB00",
    Github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Canva: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    Cursor: "https://www.cursor.com/assets/images/logo.svg",
    Claude: "https://cdn.simpleicons.org/anthropic/D97757",
    Stitch: "https://cdn.simpleicons.org/mongodb/47A248",
    Antigravity: "https://cdn.simpleicons.org/googlecloud/4285F4",
    Vercel: "https://cdn.simpleicons.org/vercel/000000",
    Render: "https://cdn.simpleicons.org/render/46E3B7",
  }
  return icons[name] || "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
}

const aiSkills = ["RAG", "Prompt Engineering", "Gen AI", "Automation", "Hugging Face"]

const fullstackSkills = [
  "HTML", "TailwindCSS", "React", "JavaScript", "Next.js", "Redux", "Python", "FastAPI", "Postman", "MongoDB", "Supabase", "Vercel", "Render"
]

const toolsAndSoftware = [
  "VS Code", "Google Colab", "Antigravity", "Github", "Canva", "Cursor", "Claude", "Stitch"
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
    const link = document.createElement("a")
    link.href = "/resume/ahamed-vahith-resume.pdf"
    link.download = "Ahamed_Vahith_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const SkillCard = ({
    name,
    hasIcon = true,
  }: { name: string; hasIcon?: boolean }) => (
    <motion.div
      key={name}
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex items-center gap-4 hover:shadow-md transition-all duration-300 cursor-pointer h-full"
    >
      {hasIcon && (
        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1.5 flex-shrink-0">
          <img 
            src={getIconUrl(name)} 
            alt={name} 
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm transition-colors duration-300">
        {name}
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
            Skills & Proficiency
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            A specialized overview of my AI engineering and full-stack development expertise.
          </p>
        </motion.div>

        {/* AI & Machine Learning */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            AI & Machine Learning
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {aiSkills.map((name) => (
              <SkillCard key={name} name={name} hasIcon={false} />
            ))}
          </div>
        </motion.div>

        {/* Full Stack Development */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center transition-colors duration-300">
            Full Stack Development
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {fullstackSkills.map((name) => (
              <SkillCard key={name} name={name} />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {toolsAndSoftware.map((name) => (
              <SkillCard key={name} name={name} />
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
