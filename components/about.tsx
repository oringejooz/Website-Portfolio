"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">
                    I'm a Computer Science student at the University of Petroleum & Energy Studies, Dehradun,
                    specializing in DevOps. I'm passionate about building scalable applications and implementing
                    efficient DevOps practices.
                  </p>
                  <p className="mb-4">
                    With a strong foundation in programming languages like C, C++, Java, Python, and JavaScript, I enjoy
                    working on diverse projects from game development to web applications and compiler design.
                  </p>
                  <p>
                    I'm particularly interested in cloud technologies, containerization, and automation. My goal is to
                    bridge the gap between development and operations to create seamless, efficient software delivery
                    pipelines.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

