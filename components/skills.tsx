"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["AngularJS", "Node.js", "Express.js"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Linux", "Bash", "VS Code", "Agile"],
  },
  {
    title: "Core CS Coursework",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Automata Theory",
      "Computer Graphics (OpenGL)",
      "OOP",
      "Software Engineering",
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

