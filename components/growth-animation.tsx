"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function GrowthAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 rounded-xl overflow-hidden">
        <motion.div
          className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-xs md:max-w-sm">
          {/* Website frame */}
          <motion.div
            className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Website header */}
            <div className="h-6 bg-gray-100 flex items-center px-2">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Website content */}
            <div className="p-3">
              <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-3"></div>

              <div className="h-12 bg-gradient-to-r from-purple-100 to-green-100 rounded-md mb-3"></div>

              <div className="flex space-x-2 mb-2">
                <div className="h-8 w-8 bg-purple-200 rounded-md"></div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full w-full mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="h-8 w-8 bg-green-200 rounded-md"></div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full w-full mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Growth chart */}
          <motion.div
            className="absolute -bottom-10 -right-10 z-20 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-end h-16 space-x-2">
              <motion.div
                className="w-3 bg-purple-300 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "40%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="w-3 bg-purple-400 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "60%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="w-3 bg-purple-500 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "50%" }}
                transition={{ delay: 0.7, duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="w-3 bg-green-300 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "70%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="w-3 bg-green-400 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "90%" }}
                transition={{ delay: 0.9, duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="w-3 bg-green-500 rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ delay: 1.0, duration: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* SEO icon */}
          <motion.div
            className="absolute -top-5 -left-5 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-green-500 rounded-full text-white font-bold text-xs md:text-sm">
              SEO
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 right-0 z-30 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.43z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-0 z-30 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
