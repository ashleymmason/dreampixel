"use client"

import { motion } from "framer-motion"

export default function LaunchAnimation() {
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
        <div className="relative">
          {/* Rocket */}
          <motion.div
            className="relative z-10"
            initial={{ y: 0 }}
            animate={{
              y: [-20, -80],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="w-16 h-40 relative">
              {/* Rocket body */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-20 bg-white rounded-t-full shadow-lg"></div>

              {/* Rocket window */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-200 rounded-full border-2 border-gray-300"></div>

              {/* Rocket body color */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-16 bg-gradient-to-b from-purple-500 to-purple-600 rounded-lg"></div>

              {/* Rocket fins */}
              <div className="absolute bottom-16 left-0 w-4 h-8 bg-purple-600 rounded-l-md"></div>
              <div className="absolute bottom-16 right-0 w-4 h-8 bg-purple-600 rounded-r-md"></div>

              {/* Rocket bottom */}
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-700 rounded"></div>

              {/* Rocket flames */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                animate={{
                  scaleY: [1, 1.3, 1],
                  scaleX: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <div className="w-8 h-16 bg-gradient-to-t from-yellow-500 via-orange-500 to-red-500 rounded-b-full"></div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                animate={{
                  scaleY: [1, 1.5, 1],
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <div className="w-6 h-10 bg-gradient-to-t from-yellow-300 via-yellow-400 to-orange-400 rounded-b-full opacity-80"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Clouds */}
          <motion.div
            className="absolute top-1/4 -left-10 z-20 bg-white rounded-full w-16 h-8"
            animate={{
              x: [0, -20, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>

          <motion.div
            className="absolute top-1/2 -right-12 z-20 bg-white rounded-full w-20 h-10"
            animate={{
              x: [0, 20, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          ></motion.div>

          {/* Stars */}
          <motion.div
            className="absolute top-0 left-0 z-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              ></motion.div>
            ))}
          </motion.div>

          {/* Launch text */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            LAUNCHED!
          </motion.div>
        </div>
      </div>
    </div>
  )
}
