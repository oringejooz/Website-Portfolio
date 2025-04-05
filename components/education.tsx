"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, School } from "lucide-react"

const education = [
  {
    institution: "University of Petroleum & Energy Studies, Dehradun",
    degree: "Bachelor of Technology in Computer Science, specialization in DevOps",
    period: "August 2022 – Present",
    grade: "8.52 (SGPA Sem 5)",
    icon: GraduationCap,
  },
  {
    institution: "Delhi Public School, Greater Noida",
    degree: "Intermediate PCM",
    period: "April 2019 – March 2021",
    grade: "Percentage: 85.0%",
    icon: School,
  },
  {
    institution: "The Asian School, Dehradun",
    degree: "High School",
    period: "August 2017 – April 2019",
    grade: "Percentage: 93.3%",
    icon: School,
  },
]

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div ref={ref} className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon

            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{edu.institution}</CardTitle>
                      <CardDescription>{edu.degree}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <Badge variant="outline" className="w-fit">
                        {edu.period}
                      </Badge>
                      <span className="text-sm font-medium">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

