import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              The <br/><span className="italic text-muted-foreground">Ethos</span>
            </h2>
            <div className="w-12 h-[1px] bg-primary mb-8"></div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-8 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
              I believe great design is the difference between being seen and being remembered. Every pixel, every curve, every colour choice is a decision — and I make each one count.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Sumit Das, a graphic designer with a passion for building visual identities that feel authentic and enduring. My work lives at the intersection of bold concept and precise execution — from brand logos and print collateral to digital illustrations and AI-assisted visuals.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring together the power of industry-standard tools — Photoshop, Illustrator, and modern AI — to deliver work that doesn't just look good, but communicates clearly and leaves a lasting impression.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
              {[
                { label: "Specialty", value: "Brand & Visual" },
                { label: "Tools", value: "PS · AI · GPT" },
                { label: "Focus", value: "Graphic Design" },
                { label: "Status", value: "Available" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                  <span className="text-lg font-serif text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
