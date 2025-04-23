"use client"

import { motion } from "framer-motion"

export default function BacklinkAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>

      {/* Main Website Node */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gradient-to-r from-purple-600 to-green-500 rounded-full flex items-center justify-center z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-white font-bold text-sm">Your Site</div>
      </motion.div>

      {/* Backlink Nodes and Connections */}
      <motion.div
        className="absolute top-[20%] left-[30%] w-[60px] h-[60px] bg-white rounded-full shadow-lg border-2 border-purple-300 flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="text-purple-600 font-medium text-xs">Site A</div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <svg width="400" height="500" className="absolute top-0 left-0">
          <motion.line
            x1="120"
            y1="100"
            x2="200"
            y2="250"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[30%] right-[25%] w-[60px] h-[60px] bg-white rounded-full shadow-lg border-2 border-green-300 flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-green-600 font-medium text-xs">Site B</div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <svg width="400" height="500" className="absolute top-0 left-0">
          <motion.line
            x1="280"
            y1="150"
            x2="200"
            y2="250"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[25%] w-[60px] h-[60px] bg-white rounded-full shadow-lg border-2 border-purple-300 flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="text-purple-600 font-medium text-xs">Site C</div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <svg width="400" height="500" className="absolute top-0 left-0">
          <motion.line
            x1="100"
            y1="350"
            x2="200"
            y2="250"
            stroke="url(#gradient3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[20%] w-[60px] h-[60px] bg-white rounded-full shadow-lg border-2 border-green-300 flex items-center justify-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="text-green-600 font-medium text-xs">Site D</div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <svg width="400" height="500" className="absolute top-0 left-0">
          <motion.line
            x1="280"
            y1="380"
            x2="200"
            y2="250"
            stroke="url(#gradient4)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Domain Authority */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[120px] h-[60px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="text-xs text-gray-500 mb-1 text-center">Domain Authority</div>
        <motion.div
          className="h-4 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="text-[10px] text-white text-center">80/100</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
