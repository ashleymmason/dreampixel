"use client"
import { motion } from "framer-motion"
import { Target, Award, Heart, Clock, Lightbulb, Users } from "lucide-react"

export default function ValuesAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-white/80 rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 opacity-70"></div>

      {/* Central element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-32 h-32 flex items-center justify-center shadow-lg z-20"
        initial={{ rotate: -10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-center">
          <div className="font-bold text-lg bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            Values
          </div>
          <div className="text-sm text-gray-500">Our Core</div>
        </div>
      </motion.div>

      {/* Orbiting values */}
      {[
        { icon: <Target className="w-6 h-6 text-purple-600" />, label: "Results", delay: 0 },
        { icon: <Award className="w-6 h-6 text-green-600" />, label: "Excellence", delay: 0.5 },
        { icon: <Heart className="w-6 h-6 text-purple-600" />, label: "Passion", delay: 1 },
        { icon: <Clock className="w-6 h-6 text-green-600" />, label: "Reliability", delay: 1.5 },
        { icon: <Lightbulb className="w-6 h-6 text-purple-600" />, label: "Innovation", delay: 2 },
        { icon: <Users className="w-6 h-6 text-green-600" />, label: "Client-Focus", delay: 2.5 },
      ].map((item, index) => {
        const angle = index * (360 / 6) * (Math.PI / 180)
        const x = Math.cos(angle) * 120
        const y = Math.sin(angle) * 120

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-center"
            style={{ width: 80, height: 80 }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: x,
              y: y,
              opacity: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 1,
              rotate: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <div className="mb-1">{item.icon}</div>
            <div className="text-xs font-medium text-gray-700">{item.label}</div>
          </motion.div>
        )
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 3 }}
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
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-200/30"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
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
