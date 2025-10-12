import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
