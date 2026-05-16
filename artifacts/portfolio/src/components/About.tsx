import { motion } from "framer-motion";
import { SiWhatsapp, SiGmail } from "react-icons/si";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — ID Card */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Lanyard strap */}
              <div className="flex justify-center mb-0">
                <div className="w-6 h-16 bg-gradient-to-b from-primary/60 to-primary/30 rounded-t-sm mx-auto relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-muted border border-border" />
                </div>
              </div>

              {/* Card */}
              <div className="w-56 bg-card border border-border/60 rounded-2xl shadow-2xl px-6 pt-6 pb-8 flex flex-col items-center gap-4 relative">
                {/* Clip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-muted border border-border rounded-sm" />

                {/* Photo circle */}
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <img
                    src="/images/avatar.png"
                    alt="Sumit Das"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-border" />

                {/* Name & title */}
                <div className="text-center">
                  <p className="text-xl font-serif font-semibold text-foreground">Sumit Das</p>
                  <p className="text-sm font-mono text-primary mt-1 uppercase tracking-widest">Graphic Designer</p>
                </div>

                {/* Bottom accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary rounded-b-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Hello!
              </h2>
              <p className="text-2xl md:text-3xl font-serif text-primary mt-1">
                I am Sumit Das
              </p>
            </div>

            <div className="w-12 h-[1px] bg-primary" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              A Graphic designer who blends creativity with clarity. I have{" "}
              <span className="text-primary font-semibold">3 Years+ of Experience</span>{" "}
              specialising in film promotions, branding, and social media Ad creatives. My work focuses on strong visuals and meaningful storytelling. I design with purpose, detail, and a modern aesthetic. Every project is crafted to leave a lasting impression.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is minimal, polished, and detail-oriented. Quality, clarity, and creativity drive every project I build.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://wa.me/917044666058"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-green-500 group-hover:border-green-500 transition-colors flex-shrink-0">
                  <SiWhatsapp size={16} />
                </span>
                <span className="font-mono text-sm">7044666058</span>
              </a>

              <a
                href="mailto:dassumit334@gmail.com"
                data-testid="contact-email"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-red-400 group-hover:border-red-400 transition-colors flex-shrink-0">
                  <SiGmail size={16} />
                </span>
                <span className="font-mono text-sm">dassumit334@gmail.com</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
