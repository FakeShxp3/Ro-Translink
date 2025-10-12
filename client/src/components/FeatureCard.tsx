import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-8 hover-elevate active-elevate-2 transition-transform hover:-translate-y-1 h-full" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="w-12 h-12 rounded-md bg-translink-yellow/20 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-translink-yellow" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
