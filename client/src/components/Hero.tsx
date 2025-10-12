import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-translink-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-translink-yellow text-translink-yellow-foreground hover-elevate" data-testid="badge-notice">
            Coming 2025 • In Development
          </Badge>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ro-Translink
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Experience Vancouver's Premier 1:1 Transit Simulator
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            A meticulous 1:1 recreation of Metro Vancouver's TransLink system. Drive realistic buses, operate SkyTrain lines, and interact with AI passengers in an evolving world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => window.open("https://www.roblox.com/games/93107702761852/RTL-Ro-Translink", "_blank")}
              data-testid="button-play-hero"
            >
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() => {
                const element = document.getElementById("routes");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-explore-routes"
            >
              Explore Routes
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-translink-yellow mb-2" data-testid="stat-routes">7</div>
              <div className="text-sm text-muted-foreground">Bus Routes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-translink-yellow mb-2" data-testid="stat-skytrains">2</div>
              <div className="text-sm text-muted-foreground">SkyTrain Lines</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-translink-yellow mb-2" data-testid="stat-stops">173</div>
              <div className="text-sm text-muted-foreground">Stops</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-translink-yellow mb-2" data-testid="stat-vehicles">5</div>
              <div className="text-sm text-muted-foreground">Vehicle Types</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
