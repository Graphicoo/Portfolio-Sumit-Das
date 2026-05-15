import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WORKS = [
  { id: 1, image: "/images/work-01.jpg" },
  { id: 2, image: "/images/work-02.jpg" },
  { id: 3, image: "/images/work-03.jpg" },
  { id: 4, image: "/images/work-04.jpg" },
  { id: 5, image: "/images/work-05.jpg" },
  { id: 6, image: "/images/work-06.jpg" },
  { id: 7, image: "/images/work-07.jpg" },
  { id: 8, image: "/images/work-08.jpg" },
  { id: 9, image: "/images/work-09.jpg" },
  { id: 10, image: "/images/work-10.jpg" },
  { id: 11, image: "/images/work-11.jpg" },
  { id: 12, image: "/images/work-12.jpg" },
  { id: 13, image: "/images/work-13.jpg" },
  { id: 14, image: "/images/work-14.jpg" },
  { id: 15, image: "/images/work-15.jpg" },
  { id: 16, image: "/images/work-16.jpg" },
  { id: 17, image: "/images/work-17.jpg" },
  { id: 18, image: "/images/work-18.jpg" },
  { id: 19, image: "/images/work-19.jpg" },
  { id: 20, image: "/images/work-20.jpg" },
  { id: 21, image: "/images/work-21.jpg" },
  { id: 22, image: "/images/work-22.jpg" },
  { id: 23, image: "/images/work-23.jpg" },
  { id: 24, image: "/images/work-24.jpg" },
  { id: 25, image: "/images/work-25.jpg" },
  { id: 26, image: "/images/work-26.jpg" },
  { id: 27, image: "/images/work-27.jpg" },
  { id: 28, image: "/images/work-28.jpg" },
  { id: 29, image: "/images/work-29.jpg" },
  { id: 30, image: "/images/work-30.jpg" },
  { id: 31, image: "/images/work-31.jpg" },
  { id: 32, image: "/images/work-32.jpg" },
  { id: 33, image: "/images/work-33.jpg" },
  { id: 34, image: "/images/work-34.jpg" },
  { id: 35, image: "/images/work-35.jpg" },
  { id: 36, image: "/images/work-36.jpg" },
];

export function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Selected Works</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <p className="max-w-md text-muted-foreground">
            A collection of design work spanning brand identity, print, digital illustration, and AI-assisted visuals.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.id}
              data-testid={`work-item-${work.id}`}
              className="break-inside-avoid overflow-hidden cursor-pointer group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              onClick={() => setLightbox(work.image)}
            >
              <div className="overflow-hidden">
                <img
                  src={work.image}
                  alt={`Design work ${work.id}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1.5">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(null)}
            data-testid="lightbox-close"
          >
            <X size={28} />
          </button>
          <motion.img
            src={lightbox}
            alt="Work preview"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-testid="lightbox-image"
          />
        </motion.div>
      )}
    </section>
  );
}
