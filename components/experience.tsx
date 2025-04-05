"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Technical Assistant",
    company: "DISHA FOUNDATION",
    location: "Nasik, Maharashtra",
    period: "June 2023 – July 2023",
    responsibilities: [
      "Efficiently organized and maintained data sheets for over 700 migrants from Chinch Ohol Village Nasik, ensuring accurate data entry and updates",
      "Participated in the design review and proofreading process of the Disha Foundation website before its deployment, ensuring quality and accuracy in content and design",
    ],
    skills: ["Data Management", "Web Design Review", "Quality Assurance"],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {experiences.length === 0 && (
            <div className="text-center text-muted-foreground">No work experience listed yet.</div>
          )}
        </div>
      </div>
    </section>
  )
}

