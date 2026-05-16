import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Avatar — mobile only (shows above text) */}
          <motion.div
            className="flex lg:hidden justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-primary/40">
              <img
                src="/images/avatar.png"
                alt="Sumit Das"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            style={{ y: y1, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full text-primary font-mono text-xs uppercase tracking-widest"
            >
              Sumit Das — Graphic Designer
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Crafting visuals <br/>
              that speak <br/>
              <span className="text-primary italic">louder.</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I design brand identities, illustrations, and visual systems that cut through
              noise — blending sharp instincts with tools like Photoshop, Illustrator, and AI.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="#projects" 
                className="group flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                <span className="w-12 h-[1px] bg-border group-hover:bg-primary group-hover:w-16 transition-all duration-300"></span>
                View Selected Works
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              <a
                href="/cv.pdf"
                download="Sumit_Das_CV.pdf"
                className="group flex items-center gap-2 px-5 py-2.5 border border-primary/50 rounded-full text-sm font-mono uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative hidden lg:block"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 border border-border translate-x-4 translate-y-4"></div>
              <img 
                src="/images/avatar.png" 
                alt="Sumit Das" 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Decorative framing */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
