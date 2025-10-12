import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import NoodleImage from "../images/Noodle.png";
import ThyssenImage from "../images/Thyssen_New.jpeg";
import DextroImage from "../images/Dextro.png";
import NolanImage from "../images/Nolan.png";
import IrishImage from "../images/Irish.png";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Noodle",
    role: "Founder | Rail Operations Head",
    description: "Noodle, also known as Noodle_Developer on Roblox, founded P2P in March, where he began work on Gen1. Later that year in August, Noodle collaborated with Thyssen to create Gen2. After they had finished, P2P was revamped to P2P Studios, and Noodle and Thyssen remain as the two Founders of P2P Studios, continuing to lead and develop to this day. Noodle is one of two main scripters for P2P Studios, and is leading the development of Project Odyssey, and videos.",
    image: NoodleImage
  },
  {
    name: "Lincoln",
    role: "Founder | Bus Operations Head",
    description: "Lincoln, known online as \"thyssenkrupp234\", discovered his passion for programming at an early age. Over time, his curiosity evolved into a pursuit of creating hyper-realistic digital simulations that capture the intricacies of the real world. Fueled by his lifelong fascination with transit, Lincoln combined technical expertise with personal passion, leading to a collaboration with Noodle (\"Noodle_Developer\"). Together, they developed what is now recognized as the most realistic transit simulator in North America.",
    image: ThyssenImage
  }
];

const executiveTeam: TeamMember[] = [
  {
    name: "Dextro",
    role: "Chief Operating Officer",
    description: "Dextro, formerly known as ItsDestructoProz, began in Ro-State - responsible for the startup of various law enforcement groups before discovering Ro-Transit due to his passion for public transportation. With over 5+ years of experience, he has developed expertise in both management and law. His diverse background allowed him to experiment with different asset development methods building his passion for game development and design while balancing the responsibility of being a team leader.",
    image: DextroImage
  },
  {
    name: "Nolan",
    role: "Head of Operations",
    description: "Nolan, known in the community as Rozzum0516, now serves as Head of Operations at P2P Studios. First introduced to the Ro-Transit scene by Linc in 2022, he briefly stepped away in 2023 before returning in early 2025, rejoining as an Executive. Since then, Nolan has played a pivotal role in shaping the studio's direction, managing operations with a balance of creativity and strategy. He continues to contribute his passion for photography, video editing, and all things Apple to the team.",
    image: NolanImage
  },
  {
    name: "Aerich (Irish)",
    role: "Map Development",
    description: "Irish is a rising developer in the community, quickly establishing himself as the lead for map development at Ro-Translink. His expertise in building design, urban layout, and scenic detailing ensures that every location feels authentic and true to life. From major hubs like UBC Exchange to key SkyTrain stations such as Nanaimo and Joyce-Collingwood, Irish has delivered highly detailed recreations that enhance immersion. His precision and dedication bring Vancouver's transit system to life in remarkable detail.",
    image: IrishImage
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the talented developers, designers, and transit enthusiasts bringing Ro-Translink to life
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
              <Badge className="mb-4 bg-translink-yellow text-translink-yellow-foreground" data-testid="badge-leadership">
                Leadership Team
              </Badge>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                The Visionaries
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The two visionaries that started it all
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover-elevate active-elevate-2" data-testid={`card-${member.name.toLowerCase()}`}>
                    <div className="mb-6 flex justify-center">
                      <img 
                        src={member.image || `https://placehold.co/512x512/0077c8/ffffff?text=${encodeURIComponent(member.name)}`}
                        alt={member.name}
                        className="w-64 h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-2xl mb-2">{member.name}</h4>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
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
              <Badge className="mb-4 bg-primary text-primary-foreground" data-testid="badge-executive">
                Executive Team
              </Badge>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                Leading Operations
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The executives and department leaders who keep us moving forward
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {executiveTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover-elevate active-elevate-2" data-testid={`card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="mb-6 flex justify-center">
                      <img 
                        src={member.image || `https://placehold.co/512x512/0077c8/ffffff?text=${encodeURIComponent(member.name)}`}
                        alt={member.name}
                        className="w-64 h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-xl mb-2">{member.name}</h4>
                      <p className="text-primary font-medium text-sm">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
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
            className="text-center"
          >
            <Card className="overflow-hidden hover-elevate inline-block">
              <div className="p-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-primary">P2P</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Join P2P Studios</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Connect with our community and stay updated on the latest developments
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://discord.gg/p2p", "_blank")}
                    data-testid="button-join-discord"
                  >
                    Join Our Discord
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.rolimons.com/group/34841485", "_blank")}
                    data-testid="button-roblox-group"
                  >
                    View Roblox Group
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}