"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const velocity = useRef({ x: 1.5, y: 1.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!visible) return

    const bubble = bubbleRef.current
    const section = sectionRef.current
    if (!bubble || !section) return

    let animationFrameId: number

    const move = () => {
      const bubbleRect = bubble.getBoundingClientRect()
      const sectionRect = section.getBoundingClientRect()

      let x = bubble.offsetLeft + velocity.current.x
      let y = bubble.offsetTop + velocity.current.y

      const maxX = section.clientWidth - bubble.offsetWidth
      const maxY = section.clientHeight - bubble.offsetHeight

      if (x >= maxX || x <= 0) velocity.current.x *= -1
      if (y >= maxY || y <= 0) velocity.current.y *= -1

      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`

      animationFrameId = requestAnimationFrame(move)
    }

    animationFrameId = requestAnimationFrame(move)

    return () => cancelAnimationFrame(animationFrameId)
  }, [visible])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
              Swarnima Bisht
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student specializing in DevOps
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button asChild>
              <Link href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/oringejooz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/swarnima-bisht-9a68b024b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:swarnimabisht2403@gmail.com" target="_blank">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {visible && (
  <div>
    <div
      ref={bubbleRef}
      className="absolute w-[150px] h-[150px] z-10 cursor-pointer"
      style={{
        top: 150,
        left: "5%",
      }}
      onClick={() => {
        setVisible(false)
        setTimeout(() => setVisible(true), 3000)
      }}
    >
      <div className="bubble w-full h-full animate-morph overflow-hidden">
        <Image
          src="/profliepho.jpg"
          alt="Profile Bubble"
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute text-sm text-muted-foreground z-10"
      style={{
        top: 310,
        left: "5%",
      }}
    >
    </motion.p>
  </div>
)}


      <style jsx>{`
        .bubble {
          background: linear-gradient(45deg, #88D5BF 0%, #5D6BF8 100%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 8s ease-in-out infinite;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </section>
  )
}
