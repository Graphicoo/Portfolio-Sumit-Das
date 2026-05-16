import { motion } from "framer-motion";
import { Music, Film, CircleDot, Gamepad2 } from "lucide-react";

const card =
  "bg-card border border-border rounded-2xl p-6 flex flex-col gap-4";

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
            Skills Sharpened
          </h2>
          <div className="w-14 h-[2px] bg-primary mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ── Column 1 ── */}
          <div className="flex flex-col gap-6">

            {/* Education */}
            <motion.div
              className={card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-serif font-semibold text-primary">Education</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Bachelors Of Science (B.SC) – 2020</p>
                    <p className="text-muted-foreground text-sm italic">Calcutta University</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Graphic Design & Web Design Development – 2023</p>
                    <p className="text-muted-foreground text-sm italic">Arena Animation</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Software Skills */}
            <motion.div
              className={card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-semibold text-primary">Software Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Adobe Photoshop", color: "bg-[#31A8FF]", letter: "Ps" },
                  { label: "Adobe Illustrator", color: "bg-[#FF9A00]", letter: "Ai" },
                  { label: "CoralDraw", color: "bg-[#6DB33F]", letter: "Cd" },
                  { label: "Canva", color: "bg-[#00C4CC]", letter: "Cv" },
                ].map((sw) => (
                  <div key={sw.label} className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-md ${sw.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                      {sw.letter}
                    </span>
                    <span className="text-sm text-muted-foreground">{sw.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Column 2 ── */}
          <div className="flex flex-col gap-6">

            {/* Language */}
            <motion.div
              className={card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-semibold text-primary">Language</h3>
              <div className="flex flex-col items-center gap-2 py-2">
                {["English", "Hindi", "Bengali"].map((lang) => (
                  <span key={lang} className="text-foreground text-lg font-light">{lang}</span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              className={card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="text-xl font-serif font-semibold text-primary">Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Music", Icon: Music },
                  { label: "Movies", Icon: Film },
                  { label: "Cricket", Icon: CircleDot },
                  { label: "Gaming", Icon: Gamepad2 },
                ].map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-2 text-muted-foreground">
                    <Icon size={15} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              className={card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-semibold text-primary">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "HTML5", color: "bg-[#E34F26]" },
                  { label: "CSS3", color: "bg-[#1572B6]" },
                  { label: "Bootstrap", color: "bg-[#7952B3]" },
                  { label: "Premiere Pro", color: "bg-[#9999FF]" },
                  { label: "After Effects", color: "bg-[#9999FF]" },
                ].map((sk) => (
                  <span
                    key={sk.label}
                    className={`${sk.color} text-white text-xs font-mono px-3 py-1 rounded-md`}
                  >
                    {sk.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Column 3 — Experience ── */}
          <motion.div
            className={card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif font-semibold text-primary">Experience</h3>
            <ul className="flex flex-col gap-6">

              <li className="flex gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Webskitters Technology Solutions Pvt. Ltd</p>
                  <p className="text-primary text-sm italic mb-1">Graphic Designer (Jan 2026 – Present)</p>
                  <ul className="text-muted-foreground text-sm space-y-0.5">
                    <li>Graphic Design For Social Media</li>
                    <li>Developed numerous marketing programs</li>
                    <li>Social Media Ad Creative</li>
                  </ul>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Surinder Films Pvt. Ltd.</p>
                  <p className="text-primary text-sm italic mb-1">Graphic Designer (Jul 2023 – Present)</p>
                  <ul className="text-muted-foreground text-sm space-y-0.5">
                    <li>Graphic Design For Social Media</li>
                    <li>Movie & Web series Poster Design</li>
                    <li>Developed numerous marketing programs</li>
                  </ul>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Sizeplus Apparel Pvt. Ltd.</p>
                  <p className="text-primary text-sm italic mb-1">Graphic Designer (Feb 2023 – Jul 2023)</p>
                  <ul className="text-muted-foreground text-sm space-y-0.5">
                    <li>Handling Social Media</li>
                    <li>T-Shirt Design / Mock up</li>
                    <li>Developed numerous marketing programs (logos, brochures, presentations, and advertisements)</li>
                  </ul>
                </div>
              </li>

            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
