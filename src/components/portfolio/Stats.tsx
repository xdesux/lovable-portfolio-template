import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Code, Users } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    title: "Experience",
    value: "5+",
    description: "Years in Development",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Certificates",
    value: "12",
    description: "Professional Certifications",
    color: "text-secondary"
  },
  {
    icon: Code,
    title: "Projects",
    value: "50+",
    description: "Completed Projects",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Clients",
    value: "30+",
    description: "Happy Clients",
    color: "text-secondary"
  }
]

export function Stats() {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 font-semibold">
            Career Highlights
          </Badge>
          <h2 className="text-4xl font-bold font-heading mb-4">
            Building Digital Solutions for <span className="text-gradient">5+ Years</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to creating exceptional web experiences with cutting-edge technologies 
            and best practices in modern development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-hover transition-all duration-300 group cursor-pointer border-0 shadow-card">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${stat.color} bg-current/10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </motion.div>
                
                <motion.h3
                  className="text-3xl font-bold font-heading mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                
                <h4 className="font-semibold text-lg mb-1">{stat.title}</h4>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}