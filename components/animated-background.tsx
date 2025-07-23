"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingCircle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<FloatingCircle[]>([])

  useEffect(() => {
    const generateCircles = () => {
      const newCircles: FloatingCircle[] = []

      // Minimal count of circles for clean effect
      for (let i = 0; i < 15; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 4, // Smaller circles 4-10px
          delay: Math.random() * 10,
          duration: Math.random() * 15 + 12, // Slower movement for grazing effect
          opacity: Math.random() * 0.3 + 0.35, // Better visibility 0.35-0.65
        })
      }
      setCircles(newCircles)
    }

    generateCircles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute bg-blue-gray rounded-full"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            opacity: circle.opacity,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0], // Gentle horizontal movement
            y: [0, Math.random() * 40 - 20, 0], // Gentle vertical movement
            scale: [1, 1.2, 1], // Subtle breathing effect
            opacity: [circle.opacity * 0.7, circle.opacity, circle.opacity * 0.7], // Gentle fade
          }}
          transition={{
            duration: circle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
