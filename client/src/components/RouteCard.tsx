import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, MapPin, Navigation } from "lucide-react";

interface RouteCardProps {
  routeNumber: string;
  routeName: string;
  description: string;
  frequency: string;
  stops: number;
  distance: string;
  delay?: number;
  type?: "bus" | "train";
}

export default function RouteCard({
  routeNumber,
  routeName,
  description,
  frequency,
  stops,
  distance,
  delay = 0,
  type = "bus"
}: RouteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 hover-elevate active-elevate-2 transition-transform hover:-translate-y-1" data-testid={`card-route-${routeNumber}`}>
        <div className="flex items-start gap-4 mb-4">
          <Badge className="bg-primary text-primary-foreground text-lg font-bold px-4 py-2 shrink-0" data-testid={`badge-route-${routeNumber}`}>
            {routeNumber}
          </Badge>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-xl mb-2">{routeName}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-translink-yellow shrink-0" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Frequency</div>
              <div className="text-sm font-medium truncate" data-testid={`text-frequency-${routeNumber}`}>{frequency}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-translink-yellow shrink-0" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Stops</div>
              <div className="text-sm font-medium" data-testid={`text-stops-${routeNumber}`}>{stops}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-translink-yellow shrink-0" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">Distance</div>
              <div className="text-sm font-medium truncate" data-testid={`text-distance-${routeNumber}`}>{distance}</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
