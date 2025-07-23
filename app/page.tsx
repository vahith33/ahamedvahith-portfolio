import HeroGeometric from "@/components/hero-geometric"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  return (
    <main>
      <Navigation />
      <div id="home">
        <HeroGeometric
          badge="Fullstack & ML Engineer"
          title1="Ahamed Vahith"
          description="I am a passionate Fullstack & ML Engineer, dedicated to building innovative and efficient digital solutions that leverage both robust backend systems and intelligent machine learning models."
        />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
