"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "9/11 (2D Endless Runner Game)",
    description: "Created a game for Global Game Jam 2024 (January 2024)",
    details: [
      "Contributed to the development of a 2D endless runner game using Game Maker Studio in a 48 HR game jam",
      "Collaborated in designing and implementing game mechanics, character controls, and obstacle generation",
      "Delivered a functional and engaging game within the time constraints of the Global Game Jam 2024",
    ],
    techStack: ["Git", "Game Maker Studio", "GML"],
    githubLink: "https://github.com/oringejooz/9-11-GGJ.git", // Replace with your actual GitHub link
    liveLink: "#", // Replace with your actual live demo link if available
    imagePath: "/images/project1.jpg", // Replace with your actual image path
  },
  {
    title: "Netflix Clone",
    description: "Built a simple Netflix clone during a 40-hour DevOps bootcamp (September 2024)",
    details: [
      "Developed and deployed a Netflix clone using AWS EC2 instances, Route 53 for domain management, and Nginx for load balancing",
      "Created separate frontend and backend containers and implemented proxy pass redirection using Nginx",
      "Successfully delivered a functional clone demonstrating containerized architecture and scalable deployment",
    ],
    techStack: ["Docker", "AWS EC2", "Route 53", "Nginx"],
    githubLink: "https://github.com/oringejooz/NetflixMovieCatalog.git", // Replace with your actual GitHub link
    liveLink: "#", // Replace with your actual live demo link if available
    imagePath: "/images/project2.jpg", // Replace with your actual image path
  },
  {
    title: "Ecosystem of Clubs",
    description: "Built a centralized platform for college clubs (December 2024)",
    details: [
      "Contributed to backend module development for the Ecosystem of Clubs, a centralized platform for managing college clubs and events",
      "Enabled club admins to list events, maintain club profiles, and integrate interest-wise filtering to match events with user preferences",
      "Utilized MongoDB Atlas for scalable storage and JWT for secure user authentication",
      "Implemented backend services using Java Spring Boot and JSP",
    ],
    techStack: ["Java", "Spring Boot", "JSP", "MongoDB Atlas", "JWT"],
    githubLink: "https://github.com/oringejooz/Minor-Project-oringe.git", // Replace with your actual GitHub link
    liveLink: "#", // Replace with your actual live demo link if available
    imagePath: "/images/project3.jpg", // Replace with your actual image path
  },
  {
    title: "StoryScript Compiler",
    description: "Developed a custom scripting language for interactive storytelling (February 2025 – Ongoing)",
    details: [
      "Built a compiler from scratch with modules for lexical analysis, parsing, semantic analysis, and code generation",
      "Implemented 20+ scripting functions, enabling narration, choices, input handling, and inventory management",
      "Designing a web-based UI to load and run StoryScript using HTML, CSS, and JavaScript",
    ],
    techStack: ["C", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/oringejooz/StoryScript-Compiler.git", // Replace with your actual GitHub link
    liveLink: "#", // Replace with your actual live demo link if available
    imagePath: "/images/project4.jpg", // Replace with your actual image path
  },
]

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Uncomment and replace with your actual image
                  <div className="mb-4 overflow-hidden rounded-md">
                    <Image 
                      src={project.imagePath || "/placeholder.svg"} 
                      alt={project.title}
                      width={600}
                      height={300}
                      className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  */}
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {project.liveLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

