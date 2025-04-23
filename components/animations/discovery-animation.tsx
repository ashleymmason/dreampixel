"use client"

import { motion } from "framer-motion"

export default function DiscoveryAnimation() {
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
        <div className="relative">
          {/* Magnifying glass */}
          <motion.div
            className="relative z-10"
            initial={{ rotate: -20, x: -50 }}
            animate={{
              rotate: [0, -10, 0],
              x: [-20, 0, -20],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-500 relative">
              <div className="absolute w-8 h-16 md:w-10 md:h-20 bg-purple-500 rounded-full -right-6 -bottom-6 rotate-45"></div>
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            className="absolute -bottom-16 -left-16 z-0 bg-white rounded-lg shadow-lg p-4 w-32 h-40 md:w-40 md:h-48"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded-full w-4/5 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-0 right-0 z-20 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-8 z-20 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
