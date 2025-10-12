import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (location === path && sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img 
              src="/src/images/RoTranslinkLogoBlueBackground.png" 
              alt="Ro-Translink Logo" 
              className="w-10 h-10 rounded-md object-cover"
            />
            <span className="font-heading font-bold text-xl">Ro-Translink</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={() => handleNavClick("/", "features")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-features"
            >
              Features
            </Link>
            <Link
              href="/"
              onClick={() => handleNavClick("/", "routes")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-routes"
            >
              Routes
            </Link>
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-team"
            >
              Team
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-projects"
            >
              Projects
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.open("https://discord.gg/p2p", "_blank")}
              data-testid="button-discord"
            >
              Discord
            </Button>
            <Button
              onClick={() => window.open("https://www.roblox.com/games/93107702761852/RTL-Ro-Translink", "_blank")}
              data-testid="button-play"
            >
              Play Now
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => handleNavClick("/", "features")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-features-mobile"
            >
              Features
            </Link>
            <Link
              href="/"
              onClick={() => handleNavClick("/", "routes")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-routes-mobile"
            >
              Routes
            </Link>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-team-mobile"
            >
              Team
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-projects-mobile"
            >
              Projects
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => window.open("https://discord.gg/p2p", "_blank")}
                data-testid="button-discord-mobile"
              >
                Discord
              </Button>
              <Button
                onClick={() => window.open("https://www.roblox.com/games/93107702761852/RTL-Ro-Translink", "_blank")}
                data-testid="button-play-mobile"
              >
                Play Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}