import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { 
  Calendar, 
  Code, 
  Users, 
  Award, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  MapPin,
  Briefcase,
  Star,
  TrendingUp,
  Activity
} from "lucide-react"

const profileStats = [
  { label: "Projects", value: "50+", icon: Code, color: "text-blue-400" },
  { label: "Experience", value: "5Y", icon: Calendar, color: "text-green-400" },
  { label: "Clients", value: "30+", icon: Users, color: "text-purple-400" },
  { label: "Awards", value: "12", icon: Award, color: "text-yellow-400" }
]

const skills = [
  { name: "React", level: 95, color: "bg-blue-500" },
  { name: "TypeScript", level: 90, color: "bg-blue-600" },
  { name: "Node.js", level: 88, color: "bg-green-500" },
  { name: "Python", level: 85, color: "bg-yellow-500" },
  { name: "AWS", level: 80, color: "bg-orange-500" },
  { name: "Docker", level: 85, color: "bg-blue-400" }
]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with React & Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "Completed",
    stars: 24
  },
  {
    title: "Task Manager",
    description: "Collaborative project management tool",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
    technologies: ["Vue.js", "Express", "MongoDB"],
    status: "In Progress",
    stars: 18
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    technologies: ["Next.js", "D3.js", "Redis"],
    status: "Completed",
    stars: 32
  }
]

const activities = [
  { action: "Pushed to", project: "portfolio-v3", time: "2h ago", icon: Github },
  { action: "Deployed", project: "e-commerce-app", time: "5h ago", icon: TrendingUp },
  { action: "Created", project: "new-dashboard", time: "1d ago", icon: Code },
  { action: "Updated", project: "task-manager", time: "2d ago", icon: Activity }
]

export function DashboardPortfolio() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Alex!</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Profile Card */}
          <motion.div
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 border-0 shadow-card">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-heading">Alex Developer</h3>
                <p className="text-muted-foreground mb-2">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
                <Badge variant="secondary" className="mb-4">
                  Available for hire
                </Badge>
                <Button className="w-full gradient-primary text-white">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="col-span-12 md:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {profileStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-4 text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
                    <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold font-heading">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 border-0 shadow-card">
              <h3 className="text-xl font-bold font-heading mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6 border-0 shadow-card">
              <h3 className="text-xl font-bold font-heading mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        {activity.action} <span className="font-medium">{activity.project}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="col-span-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold font-heading">Featured Projects</h3>
              <p className="text-muted-foreground">Recent work and achievements</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 group">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge 
                          variant={project.status === "Completed" ? "secondary" : "outline"}
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-lg font-heading">{project.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-4 w-4" />
                          {project.stars}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="p-2 flex-1">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 flex-1">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}