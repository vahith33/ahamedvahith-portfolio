"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import HeroCircleBackground from "@/components/hero-circle-background"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function HeroGeometric({
  badge = "Fullstack & ML Engineer",
  title1 = "Ahamed Vahith",
  description = "I am a passionate Fullstack & ML Engineer, dedicated to building innovative and efficient digital solutions that leverage both robust backend systems and intelligent machine learning models.",
}: {
  badge?: string
  title1?: string
  description?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1 + i * 0.08,
        ease: "easeOut",
      },
    }),
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-warm-beige-light to-warm-beige dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 pt-16 md:pt-0">
      <HeroCircleBackground />

      {/* Animated geometric design element */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1b3c53" className="dark:stop-color-blue-400" />
              <stop offset="50%" stopColor="#456882" className="dark:stop-color-blue-500" />
              <stop offset="100%" stopColor="#2a4d66" className="dark:stop-color-blue-600" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 0 L50 20 L100 0 L100 100 L50 80 L0 100 Z"
            fill="url(#geometricGradient)"
            fillOpacity="0.15"
            animate={{
              d: [
                "M0 0 L50 20 L100 0 L100 100 L50 80 L0 100 Z",
                "M10 5 L60 15 L90 10 L95 90 L45 85 L5 95 Z",
                "M5 10 L55 25 L95 5 L90 95 L40 75 L10 90 Z",
                "M0 0 L50 20 L100 0 L100 100 L50 80 L0 100 Z",
              ],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 2, -1, 0],
              opacity: [0.15, 0.3, 0.2, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.path
            d="M20 0 L70 0 L50 40 L0 40 Z"
            fill="url(#geometricGradient)"
            fillOpacity="0.1"
            animate={{
              d: [
                "M20 0 L70 0 L50 40 L0 40 Z",
                "M25 5 L65 5 L55 35 L5 35 Z",
                "M15 -5 L75 -5 L45 45 L-5 45 Z",
                "M20 0 L70 0 L50 40 L0 40 Z",
              ],
              x: [0, -8, 4, 0],
              y: [0, 6, -3, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.25, 0.15, 0.1],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.path
            d="M30 100 L80 100 L60 60 L10 60 Z"
            fill="url(#geometricGradient)"
            fillOpacity="0.12"
            animate={{
              d: [
                "M30 100 L80 100 L60 60 L10 60 Z",
                "M35 95 L75 95 L65 65 L15 65 Z",
                "M25 105 L85 105 L55 55 L5 55 Z",
                "M30 100 L80 100 L60 60 L10 60 Z",
              ],
              x: [0, 8, -6, 0],
              y: [0, -8, 4, 0],
              rotate: [0, -3, 2, 0],
              opacity: [0.12, 0.28, 0.18, 0.12],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.path
            d="M0 50 L25 75 L50 50 L25 25 Z"
            fill="url(#geometricGradient)"
            fillOpacity="0.08"
            animate={{
              d: [
                "M0 50 L25 75 L50 50 L25 25 Z",
                "M5 45 L30 70 L45 45 L20 30 Z",
                "M-5 55 L20 80 L55 55 L30 20 Z",
                "M0 50 L25 75 L50 50 L25 25 Z",
              ],
              x: [0, -4, 6, 0],
              y: [0, 4, -2, 0],
              scale: [1, 1.3, 0.7, 1],
              opacity: [0.08, 0.22, 0.14, 0.08],
            }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 5,
            }}
          />
          <motion.path
            d="M100 50 L75 75 L50 50 L75 25 Z"
            fill="url(#geometricGradient)"
            fillOpacity="0.08"
            animate={{
              d: [
                "M100 50 L75 75 L50 50 L75 25 Z",
                "M95 55 L80 70 L55 55 L70 30 Z",
                "M105 45 L70 80 L45 45 L80 20 Z",
                "M100 50 L75 75 L50 50 L75 25 Z",
              ],
              x: [0, 4, -8, 0],
              y: [0, -4, 6, 0],
              rotate: [0, 4, -2, 0],
              scale: [1, 0.9, 1.4, 1],
              opacity: [0.08, 0.24, 0.16, 0.08],
            }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 7,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-bold leading-tight tracking-tight">
              <motion.span
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-800 dark:text-gray-200 block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl transition-colors duration-300"
              >
                {"Hi! I'm "}
              </motion.span>
              <motion.span
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "bg-clip-text text-transparent block font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl",
                )}
                style={{
                  backgroundImage: "linear-gradient(45deg, #1b3c53, #456882, #2a4d66, #5a7a95)",
                  backgroundSize: "300% 300%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  animation: "smoothColorShift 4s ease-in-out infinite",
                }}
              >
                {title1}
              </motion.span>
            </h1>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-teal/10 dark:bg-blue-400/10 border border-dark-teal/20 dark:border-blue-400/20 transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 rounded-full" />
              <span className="text-xs text-dark-teal dark:text-blue-400 tracking-wide transition-colors duration-300">
                {badge}
              </span>
            </motion.div>

            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl transition-colors duration-300">
                {description}
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-6 py-2.5 bg-dark-teal dark:bg-blue-500 text-cream rounded-lg font-medium hover:bg-dark-teal-light dark:hover:bg-blue-600 transition-colors shadow-lg text-sm"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-transparent border-2 border-dark-teal dark:border-blue-400 text-dark-teal dark:text-blue-400 rounded-lg font-medium hover:bg-dark-teal/5 dark:hover:bg-blue-400/5 transition-colors shadow-lg text-sm"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-gray/30 dark:border-blue-400/30 shadow-2xl cursor-pointer transition-colors duration-300"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("about")}
              >
                <Image
                  src="/images/profile-cropped.png"
                  alt="Ahamed Vahith Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating accent elements around profile */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 rounded-full opacity-80 transition-colors duration-300"
              />

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-r from-blue-gray to-dark-teal-light dark:from-blue-300 dark:to-blue-500 rounded-full opacity-60 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-warm-beige/30 via-transparent to-cream/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/20 pointer-events-none transition-colors duration-300" />

      <style jsx>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes smoothColorShift {
          0% { 
            background-position: 0% 50%;
          }
          25% { 
            background-position: 50% 100%;
          }
          50% { 
            background-position: 100% 50%;
          }
          75% { 
            background-position: 50% 0%;
          }
          100% { 
            background-position: 0% 50%;
          }
        }

        /* Dark mode smooth color animation */
        .dark @keyframes smoothColorShift {
          0% { 
            background-position: 0% 50%;
          }
          25% { 
            background-position: 50% 100%;
          }
          50% { 
            background-position: 100% 50%;
          }
          75% { 
            background-position: 50% 0%;
          }
          100% { 
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}
