"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FloatingBubble() {
  const [visible, setVisible] = useState(true)
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [velocity, setVelocity] = useState({ x: 2, y: 2 })

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + velocity.x
        const nextY = prev.y + velocity.y

        const winWidth = window.innerWidth - 150
        const winHeight = window.innerHeight - 150

        if (nextX <= 0 || nextX >= winWidth) {
          setVelocity(v => ({ ...v, x: -v.x }))
        }
        if (nextY <= 0 || nextY >= winHeight) {
          setVelocity(v => ({ ...v, y: -v.y }))
        }

        return {
          x: Math.max(0, Math.min(nextX, winWidth)),
          y: Math.max(0, Math.min(nextY, winHeight)),
        }
      })
    }, 16)

    return () => clearInterval(interval)
  }, [velocity, visible])

  const handlePop = () => {
    setVisible(false)
    setTimeout(() => setVisible(true), 3000)
  }

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: 150,
        height: 150,
        zIndex: 50,
        cursor: "pointer",
      }}
      onClick={handlePop}
    >
      <Image
        src="/profliepho.jpg"
        alt="Floating Bubble"
        width={150}
        height={150}
        className="rounded-full animate-wobble bubble-shadow border-4 border-primary"
      />
    </motion.div>
  )
}
