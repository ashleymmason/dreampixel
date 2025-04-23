"use client"
import { motion } from "framer-motion"

export default function UXUIAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[280px] h-[500px] bg-white rounded-[36px] shadow-xl border-8 border-gray-800 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 flex items-center justify-center">
            <div className="w-20 h-5 bg-gray-700 rounded-full"></div>
          </div>

          <div className="pt-12 px-3 pb-3 h-full">
            <div className="bg-gradient-to-br from-purple-50 to-green-50 h-full rounded-b-[24px] overflow-hidden relative">
              {/* App UI Elements */}
              <div className="absolute top-4 left-0 right-0 h-8 bg-white/80 backdrop-blur-sm flex items-center px-4">
                <div className="w-6 h-6 rounded-full bg-purple-500 mr-3"></div>
                <div className="h-3 w-24 bg-gray-300 rounded-full"></div>
              </div>

              <motion.div
                className="absolute top-16 left-4 right-4 h-20 bg-white rounded-lg shadow-md p-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-2 w-full bg-gray-200 rounded-full mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
              </motion.div>

              <motion.div
                className="absolute top-40 left-4 right-4 h-32 bg-white rounded-lg shadow-md p-3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-16 w-full bg-gradient-to-r from-purple-100 to-green-100 rounded-md mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 right-4 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="h-2 w-16 bg-white/80 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* UI Elements floating around */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 flex items-center justify-center"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="w-8 h-8 rounded-md bg-purple-500/50 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-purple-500"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[15%] w-20 h-12 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-500/30 flex items-center justify-center"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="w-16 h-2 rounded-full bg-green-500/50"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[25%] w-12 h-12 bg-gradient-to-br from-purple-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/50 to-green-500/50"></div>
      </motion.div>
    </div>
  )
}
