"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, PieChart, ArrowUpRight } from "lucide-react"

export default function BusinessGrowthAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-white/80 rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-green-50 opacity-70"></div>

      {/* Main chart */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 w-64 h-48 flex flex-col items-center justify-center shadow-lg z-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="text-sm font-medium text-gray-500 mb-2">Business Growth</div>
        <div className="w-full h-24 relative">
          <svg width="100%" height="100%" viewBox="0 0 200 80">
            <motion.path
              d="M0,80 L20,70 L40,65 L60,60 L80,50 L100,40 L120,30 L140,20 L160,15 L180,10 L200,5"
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.5, duration: 0.3 }}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <div className="text-xs text-gray-400">Jan</div>
          <div className="text-xs text-gray-400">Dec</div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
        style={{ width: 80, height: 40, top: "20%", left: "20%" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <BarChart3 className="w-5 h-5 text-purple-600 mr-1" />
        <span className="text-xs font-medium">+45%</span>
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
        style={{ width: 80, height: 40, top: "20%", right: "20%" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <PieChart className="w-5 h-5 text-green-600 mr-1" />
        <span className="text-xs font-medium">+62%</span>
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
        style={{ width: 80, height: 40, bottom: "20%", left: "25%" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <TrendingUp className="w-5 h-5 text-purple-600 mr-1" />
        <span className="text-xs font-medium">+38%</span>
      </motion.div>

      <motion.div
        className="absolute bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
        style={{ width: 80, height: 40, bottom: "20%", right: "25%" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <ArrowUpRight className="w-5 h-5 text-green-600 mr-1" />
        <span className="text-xs font-medium">+57%</span>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-200/30"
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
