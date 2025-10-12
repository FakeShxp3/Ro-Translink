import FeatureCard from '../FeatureCard';
import { Bus } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-md">
      <FeatureCard
        icon={Bus}
        title="Realistic Vehicles"
        description="Drive flawlessly modeled buses including the New Flyer Xcelsior, LFR, and LF with unparalleled, realistic physics."
      />
    </div>
  );
}
