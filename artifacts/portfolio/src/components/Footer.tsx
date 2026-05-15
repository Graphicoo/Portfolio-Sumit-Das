export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-serif text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          Elias Vance © {new Date().getFullYear()}
        </div>
        
        <div className="flex items-center gap-8">
          {["Twitter", "GitHub", "LinkedIn", "Read.cv"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        
        <div className="text-xs font-mono text-muted-foreground">
          Local time: {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute:'2-digit' })} PST
        </div>
      </div>
    </footer>
  );
}
