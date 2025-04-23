"use client"

import { motion } from "framer-motion"
import { Globe, Rocket, Zap, Award } from "lucide-react"

export default function LocationCTAAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-white/80 rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 opacity-70"></div>

      {/* Website mockup */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-hidden shadow-lg z-20"
        style={{ width: 220, height: 160 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="h-6 bg-gray-100 flex items-center px-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto bg-white rounded-sm text-[6px] px-2">www.yourbusiness.com</div>
        </div>
        <div className="p-2">
          <div className="w-full h-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-sm mb-2"></div>
          <div className="flex space-x-1 mb-2">
            <div className="w-1/3 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-1/3 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-1/3 h-3 bg-gray-100 rounded-sm"></div>
          </div>
          <div className="w-full h-12 bg-gray-50 rounded-sm mb-2 flex items-center justify-center">
            <div className="w-12 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-sm"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-1/2 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-1/2 h-3 bg-gray-100 rounded-sm"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
        style={{ top: "15%", left: "20%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Globe className="w-6 h-6 text-purple-600" />
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
        style={{ top: "15%", right: "20%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Rocket className="w-6 h-6 text-green-600" />
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
        style={{ bottom: "15%", left: "20%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Zap className="w-6 h-6 text-purple-600" />
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
        style={{ bottom: "15%", right: "20%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <Award className="w-6 h-6 text-green-600" />
      </motion.div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M200,200 L80,80 M200,200 L320,80 M200,200 L80,320 M200,200 L320,320"
          fill="none"
          stroke="url(#ctaGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />
        <defs>
          <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            className="absolute rounded-full bg-green-200/30"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
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
