import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Expertise } from "../components/Expertise";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground w-full flex flex-col overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
