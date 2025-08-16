import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold font-heading text-gradient mb-4">
              Alex.dev
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Alex Developer. Made with 
              <Heart className="h-4 w-4 text-red-500" /> 
              and lots of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}