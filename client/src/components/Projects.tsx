import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Bus, Cpu } from "lucide-react";
import XcelsiorImage from "../images/Projects/xcelsior.png";
import LFRV2Image from "../images/Projects/LFR_V2.png";
import OrionVImage from "../images/Projects/OrionV.png";
import LfrLegacyImage from "../images/Projects/LFR_Legacy.png";
import LfLegacyImage from "../images/Projects/LF_Legacy.png";
import PolarisImage from "../images/Projects/Polaris.png";
import SentinelImage from "../images/Projects/Sentinel.png";
import OdysseyImage from "../images/Projects/Odyssey.png";

interface Project {
  name: string;
  description: string;
  tags: string[];
  image?: string;
}

const vehicleFleet: Project[] = [
  {
    name: "New Flyer: Xcelsior",
    description: "BRUG Industries, a talented bus modelling group, has partnered with P2P Studios to create the most realistic Xcelsior on the Roblox platform. This bus will be operated in Ro-Translink, as well as BRUG's brand new MBTA!",
    tags: ["Gen2.2 Chassis", "1:1 Scale", "Perfectly Tuned"],
    image: XcelsiorImage
  },
  {
    name: "New Flyer: LFR V2",
    description: "Due to the lack of a 40ft LFR, and the discontinued articulated LFR developed by Suburban, BRUG will be providing us with their in-development LFR via our partnership. We will begin with the 40' LFR, then make the E60LFR, D(E)60LFR, and other variations. This will be the pilot bus for our trolley technology.",
    tags: ["Trolley Technology", "New Model", "In-Development"],
    image: LFRV2Image
  },
  {
    name: "Orion V",
    description: "The Orion V is a unique bus, being the only vehicle manufactured by Orion Bus Industries that Translink currently operates. The shell was made by Nike, the interior modelled by Bruce, and the rest developed in-house by Noodle and Linc. This model is currently in development.",
    tags: ["Gen2.2 Chassis", "Modelled by P2P", "Suburban Fleet"],
    image: OrionVImage
  },
  {
    name: "New Flyer: LFR [LEGACY]",
    description: "One of the first P2P Projects, the articulated LFR is a collaboration between Suburban, the owner of Halifax Transit, and P2P Studios. This model is one of the best on the platform. Due to Suburban's departure from the transit community, this model remains in an unfinished state and will likely not be used in any P2P games.",
    tags: ["Gen2.1 Chassis", "Legacy Model", "First Articulated Bus"],
    image: LfrLegacyImage
  },
  {
    name: "New Flyer: LF [LEGACY]",
    description: "With the original made by Nike, modified by Suburban, and spec'd by Tzu, this D40LF is a staple in P2P, being the bus that Gen2.1 was developed on. This model remains in an unfinished state, and will not service games until it has been modernized and refurbished.",
    tags: ["Gen2.1 Chassis", "Legacy Model", "Original Dev Platform"],
    image: LfLegacyImage
  }
];

const coreTechnologies: Project[] = [
  {
    name: "Project Polaris",
    description: "Project Polaris was the very first initiative undertaken by P2P. It encompasses everything related to bus chassis development, including the Gen2 series. While Gen2.1 has since been retired after powering our legacy LF and LFR models due to instability and an unreliable architecture, its successor - Gen2.2 - was engineered on the Xcelsior platform and will be implemented across all future buses.\n\nWhat sets Project Polaris apart is its depth and realism. It is one of the only bus chassis systems in North America to feature interactive controls, lifelike engine behavior, and advanced suspension dynamics. Gen2.2 is not only stable and optimized but also packed with cutting-edge features that set a new standard for transit simulation.",
    tags: ["Interactive Systems", "Realistic Engine Operation", "Smooth Suspension", "Highly Optimized"],
    image: PolarisImage
  },
  {
    name: "Project Sentinel",
    description: "Project Sentinel is arguably the most technologically advanced and revolutionary product P2P has made. Sentinel includes anything \"automation\" related. AI Passengers fall under this category, and so does our TMAC!\n\nThe underlying system that powers our TMAC includes:\n\n- A route assembly and managing system that uses purely math and logic to manage stops\n- A lateness system that uses real-life blocks and scheduling",
    tags: ["AI Passengers", "Route Management", "Scheduling System", "TMAC Integration"],
    image: SentinelImage
  },
  {
    name: "Project Odyssey",
    description: "Project Odyssey is the codename for P2P's train chassis. While development is on the backburner until Ro-Translink is fully released with buses, development will pick up when we have enough skytrain stations.\n\nProject Odyssey will be embedded fully into Ro-Translink, making it a multi-operational game. We will have the following trains, running on a hybrid automatic/manual system:\n\n- Mark 1\n- Mark 2.0/2.5\n- Mark 3\n- Mark 5 (V)",
    tags: ["SkyTrain Integration", "Hybrid Control System", "Multiple Train Models"],
    image: OdysseyImage
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the technical innovations and detailed recreations that make up the Ro-Translink experience
          </p>
        </div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-translink-yellow text-translink-yellow-foreground" data-testid="badge-vehicle-fleet">
                <Bus className="w-4 h-4 mr-2" />
                Vehicle Fleet
              </Badge>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                Transit Vehicles
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meticulously modeled transit vehicles with authentic systems and features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicleFleet.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover-elevate active-elevate-2" data-testid={`card-vehicle-${index}`}>
                    {vehicle.image && (
                      <img 
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-[282px] object-cover"
                        style={{ aspectRatio: '377/282' }}
                      />
                    )}
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-lg mb-3">{vehicle.name}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {vehicle.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs" data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground" data-testid="badge-core-tech">
                <Cpu className="w-4 h-4 mr-2" />
                Core Technologies
              </Badge>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                Foundational Systems
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The foundational systems that power the Ro-Translink experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover-elevate active-elevate-2" data-testid={`card-tech-${index}`}>
                    {tech.image && (
                      <img 
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-[282px] object-cover"
                        style={{ aspectRatio: '377/282' }}
                      />
                    )}
                    <div className="p-6">
                      <h4 className="font-heading font-bold text-xl mb-3">{tech.name}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 whitespace-pre-line">
                        {tech.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs" data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}