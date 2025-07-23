"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, Calendar, Zap } from "lucide-react"
import StarBackground from "@/components/star-background"

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="about"
      className="relative bg-warm-beige-light dark:bg-gray-800 overflow-hidden transition-colors duration-300"
    >
      <StarBackground />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-dark-teal/10 dark:bg-blue-400/10 text-dark-teal dark:text-blue-400 text-sm font-medium mb-4 transition-colors duration-300">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            Learn more about my journey, skills, and passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Profile Card - Entire Box Floating */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-dark-teal to-blue-gray dark:from-blue-600 dark:to-blue-800 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-300"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              y: -15,
            }}
            style={{
              animation: "floatAnimation 6s ease-in-out infinite",
            }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6"
            >
              <Image
                src="/images/profile-cropped.png"
                alt="Ahamed Vahith Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ahamed Vahith K</h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed mb-4 transition-colors duration-300">
                MACHINE LEARNING ENGINEER
              </p>
              <div className="bg-white/10 dark:bg-white/20 rounded-lg p-4 backdrop-blur-sm transition-colors duration-300">
                <p className="text-blue-100 dark:text-blue-200 text-sm italic transition-colors duration-300">
                  "An aspiring ML engineer who is looking for the opportunity to showcase skills"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Description and Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Career Objective
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Aspiring Machine Learning Engineer with a strong foundation in AI and Web development. Passionate about
              transforming real-world problems into scalable solutions using intelligent systems. Seeking to contribute
              to forward-thinking teams where I can apply my skills in predictive modeling, web technologies, and
              cross-functional collaboration to drive impactful outcomes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">B.TECH AI & ML</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Recent Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-dark-teal dark:text-blue-400 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Available for Freelance
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes floatAnimation {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-12px) translateX(4px) rotate(0.8deg); 
          }
          50% { 
            transform: translateY(-8px) translateX(-2px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-15px) translateX(-4px) rotate(-0.8deg); 
          }
        }
      `}</style>
    </section>
  )
}
