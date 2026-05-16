import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

type Category = "All" | "Social Media Creatives" | "Branding" | "Movie Promotions";

const WORKS: { id: number; image: string; category: Category }[] = [
  { id: 1,  image: "/images/work-01.jpg",  category: "Social Media Creatives" },
  { id: 2,  image: "/images/work-02.jpg",  category: "Social Media Creatives" },
  { id: 3,  image: "/images/work-03.jpg",  category: "Social Media Creatives" },
  { id: 4,  image: "/images/work-04.jpg",  category: "Social Media Creatives" },
  { id: 5,  image: "/images/work-05.jpg",  category: "Social Media Creatives" },
  { id: 6,  image: "/images/work-06.jpg",  category: "Social Media Creatives" },
  { id: 7,  image: "/images/work-07.jpg",  category: "Social Media Creatives" },
  { id: 8,  image: "/images/work-08.jpg",  category: "Social Media Creatives" },
  { id: 9,  image: "/images/work-09.jpg",  category: "Social Media Creatives" },
  { id: 10, image: "/images/work-10.jpg",  category: "Social Media Creatives" },
  { id: 11, image: "/images/work-11.jpg",  category: "Social Media Creatives" },
  { id: 12, image: "/images/work-12.jpg",  category: "Social Media Creatives" },
  { id: 13, image: "/images/work-13.jpg",  category: "Social Media Creatives" },
  { id: 14, image: "/images/work-14.jpg",  category: "Social Media Creatives" },
  { id: 15, image: "/images/work-15.jpg",  category: "Social Media Creatives" },
  { id: 16, image: "/images/work-16.jpg",  category: "Social Media Creatives" },
  { id: 17, image: "/images/work-17.jpg",  category: "Social Media Creatives" },
  { id: 18, image: "/images/work-18.jpg",  category: "Social Media Creatives" },
  { id: 19, image: "/images/work-19.jpg",  category: "Social Media Creatives" },
  { id: 20, image: "/images/work-20.jpg",  category: "Social Media Creatives" },
  { id: 21, image: "/images/work-21.jpg",  category: "Social Media Creatives" },
  { id: 22, image: "/images/work-22.jpg",  category: "Social Media Creatives" },
  { id: 23, image: "/images/work-23.jpg",  category: "Social Media Creatives" },
  { id: 24, image: "/images/work-24.jpg",  category: "Social Media Creatives" },
  { id: 25, image: "/images/work-25.jpg",  category: "Social Media Creatives" },
  { id: 26, image: "/images/work-26.jpg",  category: "Social Media Creatives" },
  { id: 27, image: "/images/work-27.jpg",  category: "Social Media Creatives" },
  { id: 28, image: "/images/work-28.jpg",  category: "Social Media Creatives" },
  { id: 29, image: "/images/work-29.jpg",  category: "Social Media Creatives" },
  { id: 30, image: "/images/work-30.jpg",  category: "Social Media Creatives" },
  { id: 31, image: "/images/work-31.jpg",  category: "Social Media Creatives" },
  { id: 32, image: "/images/work-32.jpg",  category: "Social Media Creatives" },
  { id: 33, image: "/images/work-33.jpg",  category: "Social Media Creatives" },
  { id: 34, image: "/images/work-34.jpg",  category: "Social Media Creatives" },
  { id: 35, image: "/images/work-35.jpg",  category: "Social Media Creatives" },
  { id: 36, image: "/images/work-36.jpg",  category: "Social Media Creatives" },
  { id: 37, image: "/images/work-37.jpg",  category: "Social Media Creatives" },
  { id: 38, image: "/images/work-38.jpg",  category: "Social Media Creatives" },
  { id: 39, image: "/images/work-39.jpg",  category: "Social Media Creatives" },
  { id: 40, image: "/images/work-40.jpg",  category: "Social Media Creatives" },
  { id: 41, image: "/images/work-41.jpg",  category: "Social Media Creatives" },
  { id: 42, image: "/images/work-42.jpg",  category: "Social Media Creatives" },
  { id: 43, image: "/images/work-43.jpg",  category: "Social Media Creatives" },
  { id: 44, image: "/images/work-44.jpg",  category: "Social Media Creatives" },
  { id: 45, image: "/images/work-45.jpg",  category: "Social Media Creatives" },
  { id: 46, image: "/images/work-46.jpg",  category: "Social Media Creatives" },
  { id: 47, image: "/images/work-47.jpg",  category: "Social Media Creatives" },
  { id: 48, image: "/images/work-48.jpg",  category: "Social Media Creatives" },
  { id: 49, image: "/images/work-49.jpg",  category: "Social Media Creatives" },
  { id: 50, image: "/images/work-50.jpg",  category: "Social Media Creatives" },
  { id: 51, image: "/images/work-51.jpg",  category: "Social Media Creatives" },
  { id: 52, image: "/images/work-52.jpg",  category: "Social Media Creatives" },
  { id: 53, image: "/images/work-53.jpg",  category: "Social Media Creatives" },
  { id: 54, image: "/images/work-54.jpg",  category: "Social Media Creatives" },
  { id: 55, image: "/images/work-55.jpg",  category: "Social Media Creatives" },
  { id: 56, image: "/images/work-56.jpg",  category: "Social Media Creatives" },
  { id: 57, image: "/images/work-57.jpg",  category: "Social Media Creatives" },
  { id: 58, image: "/images/work-58.jpg",  category: "Social Media Creatives" },
  { id: 59, image: "/images/work-59.jpg",  category: "Social Media Creatives" },
  { id: 60, image: "/images/work-60.jpg",  category: "Social Media Creatives" },
  { id: 61, image: "/images/work-61.jpg",  category: "Social Media Creatives" },
  { id: 62, image: "/images/work-62.jpg",  category: "Social Media Creatives" },
  { id: 63, image: "/images/work-63.jpg",  category: "Social Media Creatives" },
  { id: 64, image: "/images/work-64.jpg",  category: "Social Media Creatives" },
  { id: 65, image: "/images/work-65.jpg",  category: "Social Media Creatives" },
  { id: 66, image: "/images/work-66.jpg",  category: "Social Media Creatives" },
  { id: 67, image: "/images/work-67.jpg",  category: "Social Media Creatives" },
  { id: 68, image: "/images/work-68.jpg",  category: "Social Media Creatives" },
  { id: 69, image: "/images/work-69.jpg",  category: "Social Media Creatives" },
  { id: 70, image: "/images/work-70.jpg",  category: "Social Media Creatives" },
  { id: 71, image: "/images/work-71.jpg",  category: "Social Media Creatives" },
  { id: 72, image: "/images/work-72.jpg",  category: "Social Media Creatives" },
  { id: 73, image: "/images/work-73.jpg",  category: "Social Media Creatives" },
];

const CATEGORIES: Category[] = ["All", "Social Media Creatives", "Branding", "Movie Promotions"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? WORKS : WORKS.filter((w) => w.category === active);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
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
            A collection spanning social media creatives, brand identities, and movie promotion campaigns.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-200 rounded-full ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
              }`}
            >
              {cat}
              <span className="ml-2 opacity-60">
                {cat === "All" ? WORKS.length : WORKS.filter((w) => w.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                layout
                data-testid={`work-item-${work.id}`}
                className="break-inside-avoid overflow-hidden cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-3 py-1.5 rounded-full">
                    {work.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
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
