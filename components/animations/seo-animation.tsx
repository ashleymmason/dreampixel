"use client"

import { motion } from "framer-motion"

export default function SEOAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>

      {/* Search Engine Results Page */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[380px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-100 p-3 border-b border-gray-200">
          <div className="h-8 bg-white rounded-full flex items-center px-3 border border-gray-300">
            <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
            <div className="h-3 w-full bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="p-4">
          <motion.div
            className="mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-3 w-24 bg-green-500 rounded-full mb-1"></div>
            <div className="h-5 w-full bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent font-bold">
              Your Website Ranks #1
            </div>
            <div className="h-3 w-3/4 bg-gray-300 rounded-full mt-1"></div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="h-3 w-24 bg-gray-300 rounded-full mb-1"></div>
            <div className="h-4 w-5/6 bg-gray-400 rounded-full mb-1"></div>
            <div className="h-3 w-2/3 bg-gray-300 rounded-full"></div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="h-3 w-24 bg-gray-300 rounded-full mb-1"></div>
            <div className="h-4 w-5/6 bg-gray-400 rounded-full mb-1"></div>
            <div className="h-3 w-2/3 bg-gray-300 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating SEO Elements */}
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
        <div className="text-sm font-medium text-purple-600">Keywords</div>
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
        <div className="text-sm font-medium text-green-600">Backlinks</div>
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
        <div className="text-sm font-medium text-purple-600">On-Page SEO</div>
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
        <div className="text-sm font-medium text-green-600">Local SEO</div>
      </motion.div>

      {/* Analytics Chart */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[200px] h-[80px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-xs text-gray-500 mb-1 text-center">Traffic Growth</div>
        <div className="relative h-[50px]">
          <motion.div
            className="absolute bottom-0 left-0 w-2 bg-purple-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 10 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[20px] w-2 bg-purple-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 15 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[40px] w-2 bg-purple-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[60px] w-2 bg-purple-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 18 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[80px] w-2 bg-purple-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 25 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[100px] w-2 bg-green-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 30 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[120px] w-2 bg-green-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 35 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[140px] w-2 bg-green-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-[160px] w-2 bg-green-500 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: 45 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}
