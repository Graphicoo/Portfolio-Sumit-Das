import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Blueprint",
      desc: "Understanding the constraints, domain, and goals. We map out architecture, state structures, and visual direction before writing a single line of code."
    },
    {
      number: "02",
      title: "Prototyping & Motion",
      desc: "Building low-fidelity interactive prototypes to test the 'feel'. Motion is never an afterthought; it's baked into the initial concept."
    },
    {
      number: "03",
      title: "Rigorous Execution",
      desc: "Translating design into highly optimized, accessible, and maintainable code. No compromises on performance or semantic structure."
    },
    {
      number: "04",
      title: "Refinement & Polish",
      desc: "The last 10% takes 90% of the time. Fine-tuning timing curves, optimizing render cycles, and ensuring perfection across all viewports."
    }
  ];

  return (
    <section id="process" className="py-32 bg-secondary/20 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Methodology</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A disciplined approach to creative engineering, ensuring that imaginative concepts translate reliably to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-10 right-10 h-[1px] bg-border z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.number}
              className="relative z-10 flex flex-col bg-background p-8 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="text-sm font-mono text-primary mb-8 bg-primary/10 w-10 h-10 flex items-center justify-center rounded-full">
                {step.number}
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
