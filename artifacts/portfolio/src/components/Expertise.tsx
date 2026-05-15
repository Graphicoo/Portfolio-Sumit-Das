import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EXPERTISE = [
  {
    category: "Design Tools",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "ChatGPT / AI", "Typography", "Colour Theory", "Layout & Composition"]
  },
  {
    category: "Specialties",
    skills: ["Brand Identity", "Logo Design", "Print Design", "Digital Illustration", "Social Media Graphics", "Packaging Design"]
  },
  {
    category: "Process",
    skills: ["Concept Development", "Mood Boarding", "Client Collaboration", "Revisions & Feedback", "Final Delivery", "Brand Guidelines"]
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-secondary/30 relative border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Expertise</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <p className="max-w-md text-muted-foreground">
            A specialized skill set honed through years of building complex, high-performance interfaces and visual systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {EXPERTISE.map((area, i) => (
            <motion.div 
              key={area.category}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <h3 className="text-xl font-serif text-foreground mb-8 pb-4 border-b border-border/50 flex items-center justify-between">
                {area.category}
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </h3>
              <ul className="flex flex-col gap-4">
                {area.skills.map((skill, j) => (
                  <li key={j} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                    <span className="font-light tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
