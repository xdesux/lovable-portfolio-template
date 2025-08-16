import { useEffect } from "react"
import { Header } from "@/components/portfolio/Header"
import { Hero } from "@/components/portfolio/Hero"
import { Stats } from "@/components/portfolio/Stats"
import { Skills } from "@/components/portfolio/Skills"
import { Projects } from "@/components/portfolio/Projects"
import { Contact } from "@/components/portfolio/Contact"
import { Footer } from "@/components/portfolio/Footer"

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
