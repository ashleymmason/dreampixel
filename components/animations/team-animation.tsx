"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Users, Heart, Award, Lightbulb } from "lucide-react"

export default function TeamAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] bg-white/80 rounded-lg shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 opacity-70"></div>

      {/* Team members */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Users className="w-12 h-12 text-purple-600" />
      </motion.div>

      {/* Orbiting values */}
      <motion.div
        className="absolute bg-green-100 rounded-full w-16 h-16 flex items-center justify-center shadow-md"
        initial={{ x: "0%", y: "0%" }}
        animate={{
          x: ["0%", "120%", "120%", "0%", "0%"],
          y: ["0%", "0%", "120%", "120%", "0%"],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ top: "20%", left: "20%" }}
      >
        <Heart className="w-8 h-8 text-green-600" />
      </motion.div>

      <motion.div
        className="absolute bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center shadow-md"
        initial={{ x: "0%", y: "0%" }}
        animate={{
          x: ["0%", "-120%", "-120%", "0%", "0%"],
          y: ["0%", "0%", "-120%", "-120%", "0%"],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
        style={{ top: "20%", right: "20%" }}
      >
        <Award className="w-8 h-8 text-purple-600" />
      </motion.div>

      <motion.div
        className="absolute bg-green-100 rounded-full w-16 h-16 flex items-center justify-center shadow-md"
        initial={{ x: "0%", y: "0%" }}
        animate={{
          x: ["0%", "-120%", "-120%", "0%", "0%"],
          y: ["0%", "0%", "120%", "120%", "0%"],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
        style={{ bottom: "20%", left: "20%" }}
      >
        <Lightbulb className="w-8 h-8 text-green-600" />
      </motion.div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M200,200 L100,100 L300,100 L200,200 L100,300 L300,300 Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-200/30"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{
              delay: Math.random() * 2,
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: Math.random() * 5 + 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
