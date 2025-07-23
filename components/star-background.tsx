"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  opacity: number
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      // Minimal count for clean look
      for (let i = 0; i < 12; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 3, // Smaller circles 3-9px
          delay: Math.random() * 6,
          opacity: Math.random() * 0.3 + 0.35, // Better visibility 0.35-0.65
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-dark-teal rounded-full" // Using dark-teal for variety
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
            scale: [0.8, 1.3, 0.8],
            x: [0, Math.random() * 25 - 12.5, 0], // Gentle drift
            y: [0, Math.random() * 25 - 12.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
