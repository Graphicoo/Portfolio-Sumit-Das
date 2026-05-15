import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative min-h-[80vh] flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-8 border border-border rounded-full text-muted-foreground font-mono text-xs uppercase tracking-widest bg-background/50 backdrop-blur">
            Available for new opportunities
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-8 leading-tight">
            Let's build something <br className="hidden md:block"/>
            <span className="italic text-primary">remarkable.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light max-w-2xl mb-12">
            Whether you have a fully formed idea or just a concept, I'm always open to discussing new projects, technical challenges, and creative collaborations.
          </p>
          
          <a 
            href="mailto:hello@example.com" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
