"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

export default function HostingAnimation() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets5.lottiefiles.com/packages/lf20_dews3j6m.json", // Cloud hosting animation
      })

      return () => animation.destroy()
    }
  }, [])

  return <div className="w-full h-64 md:h-80 lg:h-96" ref={container} aria-hidden="true"></div>
}
