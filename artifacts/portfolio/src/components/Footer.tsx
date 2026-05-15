export function Footer() {
  const socials = [
    { name: "Behance", href: "https://behance.net" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-serif text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          Sumit Das © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-8">
          {socials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-xs font-mono text-muted-foreground">
          Open to collaborations
        </div>
      </div>
    </footer>
  );
}
