"use client"

import { motion } from "framer-motion"

export default function DesignAnimation() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-purple-50 rounded-lg overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-32 h-32 bg-green-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[200px]">
          {/* Design board */}
          <motion.div
            className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Design board header */}
            <div className="h-6 bg-gray-100 flex items-center px-2">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Design board content */}
            <div className="p-3 bg-gray-50">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-purple-100 rounded"></div>
                <div className="h-16 bg-green-100 rounded"></div>
                <div className="h-16 bg-blue-100 rounded"></div>
                <div className="h-16 bg-yellow-100 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Pencil */}
          <motion.div
            className="absolute -right-10 top-1/2 z-20 transform -translate-y-1/2"
            initial={{ rotate: 45, x: 20 }}
            animate={{
              rotate: [45, 35, 45],
              x: [20, 10, 20],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-4 h-24 relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-t-sm"></div>
              <div className="absolute top-0 left-0 right-0 h-4 bg-gray-800 rounded-t-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-pink-500"></div>
            </div>
          </motion.div>

          {/* Color palette */}
          <motion.div
            className="absolute -bottom-10 -left-10 z-20 bg-white rounded-full shadow-lg p-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center space-x-1">
              <motion.div
                className="w-6 h-6 rounded-full bg-purple-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0 }}
              ></motion.div>
              <motion.div
                className="w-6 h-6 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
              ></motion.div>
              <motion.div
                className="w-6 h-6 rounded-full bg-blue-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
              ></motion.div>
              <motion.div
                className="w-6 h-6 rounded-full bg-yellow-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.9 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
