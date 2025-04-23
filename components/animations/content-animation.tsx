"use client"

import { motion } from "framer-motion"

export default function ContentAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>

      {/* Main Content Document */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-purple-600 to-green-500 p-3 text-white">
          <div className="h-4 font-bold">Content Strategy</div>
        </div>

        <div className="p-4">
          <motion.div
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-4 w-3/4 bg-gray-800 rounded-sm mb-2"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-2/3 bg-gray-300 rounded-full"></div>
          </motion.div>

          <motion.div
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="h-3 w-1/2 bg-gray-600 rounded-sm mb-2"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-3/4 bg-gray-300 rounded-full"></div>
          </motion.div>

          <motion.div
            className="mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="h-3 w-1/2 bg-gray-600 rounded-sm mb-2"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-1/2 bg-gray-300 rounded-full"></div>
          </motion.div>

          <motion.div
            className="mt-4 h-20 bg-gray-100 rounded-md p-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="h-2 w-1/3 bg-purple-500 rounded-full mb-2"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-full bg-gray-300 rounded-full mb-1"></div>
            <div className="h-2 w-3/4 bg-gray-300 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Content Elements */}
      <motion.div
        className="absolute top-[15%] left-[20%] px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-purple-200"
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
        <div className="text-sm font-medium text-purple-600">Blog Posts</div>
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[15%] px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-green-200"
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
        <div className="text-sm font-medium text-green-600">Social Media</div>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] left-[15%] px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-purple-200"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-sm font-medium text-purple-600">Website Copy</div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[25%] px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-green-200"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-sm font-medium text-green-600">Email Content</div>
      </motion.div>

      {/* Content Calendar */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[200px] h-[80px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-xs text-gray-500 mb-1 text-center">Content Calendar</div>
        <div className="grid grid-cols-5 gap-1 h-[50px]">
          <motion.div
            className="bg-purple-100 border border-purple-300 rounded-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </motion.div>
          <motion.div
            className="bg-green-100 border border-green-300 rounded-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </motion.div>
          <motion.div
            className="bg-purple-100 border border-purple-300 rounded-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </motion.div>
          <motion.div
            className="bg-gray-100 border border-gray-300 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="bg-green-100 border border-green-300 rounded-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
