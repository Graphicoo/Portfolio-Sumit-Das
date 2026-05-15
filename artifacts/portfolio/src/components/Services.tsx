import { motion } from "framer-motion";
import { Palette, Share2, Layers, Package } from "lucide-react";

const SERVICES = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From concept to final artwork — posters, flyers, banners, social creatives, and everything in between. Clean, purposeful, and built to communicate.",
    tags: ["Print", "Digital", "Layout"]
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Scroll-stopping visuals and content strategies that build brands on social platforms. Designed to engage, grow, and convert your audience.",
    tags: ["Content Creation", "Branding", "Campaigns"]
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Logo design, colour systems, typography, and brand guidelines — everything you need to show up consistently and leave a lasting impression.",
    tags: ["Logo", "Guidelines", "Visual System"]
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Packaging that sells before a word is read. Structural layouts, label design, and print-ready files crafted with retail and shelf presence in mind.",
    tags: ["Labels", "Print-Ready", "3D Mockups"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-secondary/30 border-y border-border relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Services</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <p className="max-w-md text-muted-foreground">
            End-to-end creative services for brands, businesses, and individuals who want to stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              data-testid={`service-card-${i}`}
              className="bg-background p-10 flex flex-col gap-6 group hover:bg-primary/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={20} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 border border-border/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
