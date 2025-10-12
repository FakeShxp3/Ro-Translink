import FeatureCard from "./FeatureCard";
import { Bus, Map, Users } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Why Choose Ro-Translink
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge technology and meticulous attention to detail bring Vancouver's transit system to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Bus}
            title="Realistic Vehicles"
            description="Drive flawlessly modeled buses including the New Flyer Xcelsior, LFR, and LF with unparalleled, realistic physics."
            delay={0.1}
          />
          <FeatureCard
            icon={Map}
            title="Accurate Map"
            description="Navigate through a 1:1 recreation of Metro Vancouver's streets, neighborhoods and landmarks."
            delay={0.2}
          />
          <FeatureCard
            icon={Users}
            title="AI Passengers"
            description="Interact with intelligent AI passengers who follow realistic boarding patterns and schedules."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
