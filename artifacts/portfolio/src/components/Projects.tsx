import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Horizon Brand Identity",
    category: "Brand Identity & Logo Design",
    description: "A complete visual identity for a sustainable lifestyle brand — from logo mark and wordmark to brand guidelines, colour palette, and packaging. Crafted in Illustrator with AI-assisted mood boarding.",
    image: "/images/project-1.png",
    year: "2024"
  },
  {
    id: 2,
    title: "Neon Pulse Poster Series",
    category: "Digital Illustration",
    description: "A series of five limited-edition event posters for an underground music collective. Bold typography meets rich, layered illustration work — produced entirely in Photoshop.",
    image: "/images/project-2.png",
    year: "2024"
  },
  {
    id: 3,
    title: "Verdant Packaging",
    category: "Print & Packaging Design",
    description: "Packaging design for an artisan tea company's premium line. Every element — from die-cut shapes to hand-drawn botanical illustrations — was designed to feel as good to hold as it does to look at.",
    image: "/images/project-3.png",
    year: "2023"
  },
  {
    id: 4,
    title: "AI-Augmented Editorial",
    category: "AI-Assisted Visual Design",
    description: "An editorial spread exploring how ChatGPT and generative AI tools can complement traditional graphic design workflows. Concept, direction, and final compositing by hand in Photoshop.",
    image: "/images/project-4.png",
    year: "2023"
  }
];

export function Projects() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-24 flex items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Selected Works</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard key={project.id} project={project} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for image
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:[&>div:first-child]:order-last' : ''}`}>
      <motion.div 
        className="lg:col-span-7 overflow-hidden relative aspect-[16/10] bg-muted/20"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 z-10 hover:bg-black/10 transition-colors duration-500 cursor-pointer flex items-center justify-center group">
          <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur text-foreground flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-[120%] object-cover object-center absolute top-[-10%]"
          style={{ y }}
        />
      </motion.div>

      <motion.div 
        className="lg:col-span-5 flex flex-col items-start"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{project.category}</span>
          <span className="w-8 h-[1px] bg-border"></span>
          <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-2 group">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          {project.description}
        </p>
        
        <a href="#" className="uppercase font-mono text-xs tracking-[0.2em] border-b border-border pb-1 hover:border-primary transition-colors">
          View Case Study
        </a>
      </motion.div>
    </div>
  );
}
