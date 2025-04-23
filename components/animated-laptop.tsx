"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AnimatedLaptop() {
  const laptopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const laptop = laptopRef.current
    if (!laptop) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = laptop.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      laptop.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
        translateZ(20px)
      `
    }

    const handleMouseLeave = () => {
      laptop.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0)
      `
    }

    window.addEventListener("mousemove", handleMouseMove)
    laptop.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (laptop) {
        laptop.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={laptopRef}
      className="relative transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10">
          <div className="relative w-full max-w-[500px] mx-auto">
            {/* Laptop body */}
            <div className="relative bg-gray-800 rounded-t-xl pt-2 px-2">
              {/* Screen */}
              <div className="relative bg-gray-900 rounded-t overflow-hidden aspect-[16/10]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-green-500/20"></div>

                {/* Website preview */}
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto bg-gray-700 rounded-full text-[8px] text-gray-400 px-2 py-0.5">
                      dreampixel.co.uk
                    </div>
                  </div>

                  <div className="absolute top-6 left-0 right-0 bottom-0">
                    <div className="animate-scroll">
                      <Image
                        src="/placeholder.svg?height=800&width=1200"
                        alt="Website Preview"
                        width={1200}
                        height={800}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop bottom */}
              <div className="relative h-3 bg-gray-700 rounded-b-lg"></div>
            </div>

            {/* Laptop base */}
            <div className="relative h-2 bg-gray-800 rounded-b-xl mx-auto w-[80%] transform perspective-800 rotateX(5deg)"></div>

            {/* Reflection */}
            <div className="absolute bottom-0 left-[10%] right-[10%] h-4 bg-gradient-to-t from-gray-300/20 to-transparent rounded-full blur-sm"></div>
          </div>

          {/* Animated elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full opacity-70 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 bg-blue-500 rounded-full opacity-70 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  )
}
