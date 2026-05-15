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
              I believe that the best software feels inevitable. It doesn't just solve a problem; it provides an experience that respects the user's time and intelligence.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the past 8 years, I've operated at the intersection of systems architecture and interaction design. I started my journey writing low-level graphics code before transitioning to the web. That background instilled a deep appreciation for performance and rendering optimization that I now bring to modern JavaScript applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in a quiet studio in the Pacific Northwest, I partner with ambitious startups and visionary founders to build products that stand out not through gimmicks, but through obsessive attention to detail, flawless typography, and frictionless motion.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
              {[
                { label: "Experience", value: "8+ Years" },
                { label: "Location", value: "Seattle, WA" },
                { label: "Focus", value: "UI/UX & WebGL" },
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
