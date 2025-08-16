import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 85, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
      { name: "Vue.js", level: 80, color: "bg-green-500" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
      { name: "MongoDB", level: 82, color: "bg-green-700" },
      { name: "Redis", level: 75, color: "bg-red-500" },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Docker", level: 85, color: "bg-blue-400" },
      { name: "AWS", level: 80, color: "bg-orange-500" },
      { name: "Git", level: 95, color: "bg-orange-600" },
      { name: "Figma", level: 90, color: "bg-purple-500" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 font-semibold">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold font-heading mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to new technologies to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                <h3 className="text-2xl font-bold font-heading mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}