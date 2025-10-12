import { useState } from "react";
import RouteCard from "./RouteCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Routes() {
  const busRoutes = [
    {
      routeNumber: "R4",
      routeName: "RapidBus - 41st Avenue",
      description: "UBC to Joyce Station via 41st Avenue",
      frequency: "3-15 min",
      stops: 17,
      distance: "19.1 km"
    },
    {
      routeNumber: "41",
      routeName: "Joyce Station / UBC",
      description: "UBC to Joyce Station via 41st Avenue",
      frequency: "6-15 min",
      stops: 49,
      distance: "17.6 km"
    },
    {
      routeNumber: "99",
      routeName: "Commercial-Broadway / UBC (B-Line)",
      description: "UBC to Commercial-Broadway via Broadway",
      frequency: "3-15 min",
      stops: 13,
      distance: "14.3 km"
    },
    {
      routeNumber: "25",
      routeName: "Brentwood Station / UBC",
      description: "UBC to Brentwood Station via 10th and King Edward",
      frequency: "6-17 min",
      stops: 63,
      distance: "17.5 km"
    },
    {
      routeNumber: "49",
      routeName: "Metrotown Station / UBC",
      description: "UBC to Metrotown via 49th Avenue",
      frequency: "4-30 min",
      stops: 54,
      distance: "19.0 km"
    },
    {
      routeNumber: "84",
      routeName: "VCC-Clark Station / UBC",
      description: "UBC to VCC-Clark Station via 4th Avenue",
      frequency: "10-30 min",
      stops: 16,
      distance: "12.5 km"
    }
  ];

  const skytrainRoutes = [
    {
      routeNumber: "M",
      routeName: "Expo Line",
      description: "Waterfront to King George/Production Way-University",
      frequency: "2-12 min",
      stops: 24,
      distance: "36.5 km"
    },
    {
      routeNumber: "C",
      routeName: "Canada Line",
      description: "Waterfront to Richmond-Brighouse/YVR Airport",
      frequency: "3-15 min",
      stops: 17,
      distance: "19.2 km"
    }
  ];

  return (
    <section id="routes" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Transit Routes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our growing collection of accurate bus and SkyTrain routes
          </p>
        </div>

        <Tabs defaultValue="bus" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="bus" data-testid="tab-bus-routes">
              Bus Routes
            </TabsTrigger>
            <TabsTrigger value="skytrain" data-testid="tab-skytrain">
              SkyTrain Lines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bus" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {busRoutes.map((route, index) => (
                <RouteCard
                  key={route.routeNumber}
                  {...route}
                  delay={index * 0.1}
                  type="bus"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skytrain" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {skytrainRoutes.map((route, index) => (
                <RouteCard
                  key={route.routeNumber}
                  {...route}
                  delay={index * 0.1}
                  type="train"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
