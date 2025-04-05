"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
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
            {/* Replace with your actual links */}
            <Link
              href="https://github.com/oringejooz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/swarnima-bisht-9a68b024b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:swarnimabisht2403@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Add a profile image here */}  
      <div className="absolute bottom-0 right-0 -z-10 opacity-20 dark:opacity-100">
        <Image 
          src="/profliepho.jpg"
          alt="Profile" 
          width={400} 
          height={400} 
          className="rounded-full"
        />
      </div>
      
    </section>
  )
}

