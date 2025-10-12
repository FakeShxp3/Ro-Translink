import { SiRoblox, SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/src/images/RoTranslinkLogoBlueBackground.png" 
                alt="Ro-Translink Logo" 
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-heading font-bold text-xl">Ro-Translink</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vancouver's premier 1:1 transit simulator on Roblox. Experience authentic transit operations by P2P Studios.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#routes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-routes"
                >
                  Routes
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-team"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/p2p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2 transition-transform hover:-translate-y-1"
                data-testid="link-discord-footer"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
              <a
                href="https://www.roblox.com/games/93107702761852/RTL-Ro-Translink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2 transition-transform hover:-translate-y-1"
                data-testid="link-roblox-footer"
              >
                <SiRoblox className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              1,188+ members on Discord
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 P2P Studios. All rights reserved. Not affiliated with TransLink or Roblox Corporation.</p>
        </div>
      </div>
    </footer>
  );
}