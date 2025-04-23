"use client"

import { motion } from "framer-motion"

export default function DevelopmentAnimation() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg overflow-hidden">
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"
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
        <div className="relative w-full max-w-[240px]">
          {/* Code editor */}
          <motion.div
            className="relative z-10 bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Editor header */}
            <div className="h-6 bg-gray-800 flex items-center px-2">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Editor content */}
            <div className="p-3">
              <motion.div
                className="h-3 bg-purple-500 rounded-full w-1/2 mb-2"
                animate={{ width: ["30%", "50%", "30%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-blue-500 rounded-full w-3/4 mb-2"
                animate={{ width: ["50%", "75%", "50%"] }}
                transition={{ duration: 3, delay: 0.2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-green-500 rounded-full w-2/3 mb-2"
                animate={{ width: ["40%", "66%", "40%"] }}
                transition={{ duration: 3, delay: 0.4, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-yellow-500 rounded-full w-1/3 mb-2"
                animate={{ width: ["20%", "33%", "20%"] }}
                transition={{ duration: 3, delay: 0.6, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-red-500 rounded-full w-1/2 mb-2"
                animate={{ width: ["30%", "50%", "30%"] }}
                transition={{ duration: 3, delay: 0.8, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-purple-500 rounded-full w-3/4 mb-2"
                animate={{ width: ["50%", "75%", "50%"] }}
                transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="h-3 bg-blue-500 rounded-full w-2/3 mb-2"
                animate={{ width: ["40%", "66%", "40%"] }}
                transition={{ duration: 3, delay: 1.2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Floating code brackets */}
          <motion.div
            className="absolute -left-8 top-1/4 z-20 text-purple-500 text-2xl font-bold"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {"</>"}
          </motion.div>

          <motion.div
            className="absolute -right-8 bottom-1/4 z-20 text-green-500 text-2xl font-bold"
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              delay: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {"{}"}
          </motion.div>

          {/* Coffee cup */}
          <motion.div
            className="absolute -bottom-6 -right-6 z-20 bg-white rounded-md shadow-lg p-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-8 h-10 relative">
              <div className="absolute inset-0 bg-brown-500 rounded-b-md rounded-t-sm bg-gradient-to-b from-amber-700 to-amber-900"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-2 border-2 border-amber-700 rounded-md"></div>
              <motion.div
                className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white opacity-40 rounded-full"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
