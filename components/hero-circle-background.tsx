"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Circle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  opacity: number
}

export default function HeroCircleBackground() {
  const [circles, setCircles] = useState<Circle[]>([])

  useEffect(() => {
    const generateCircles = () => {
      const newCircles: Circle[] = []
      // Minimal count for hero section
      for (let i = 0; i < 20; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100, // % of viewport width
          y: Math.random() * 100, // % of viewport height
          size: Math.random() * 8 + 3, // Smaller circles between 3-11px
          delay: Math.random() * 8, // Random delay for staggered animation
          opacity: Math.random() * 0.4 + 0.3, // Better visibility 0.3-0.7
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
            opacity: [circle.opacity * 0.5, circle.opacity, circle.opacity * 0.5], // Gentle grazing fade
            scale: [0.8, 1.3, 0.8], // Noticeable pulse
            x: [0, Math.random() * 30 - 15, 0], // Small random horizontal drift
            y: [0, Math.random() * 30 - 15, 0], // Small random vertical drift
          }}
          transition={{
            duration: 10 + Math.random() * 8, // Longer, slower duration for grazing
            repeat: Number.POSITIVE_INFINITY,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
