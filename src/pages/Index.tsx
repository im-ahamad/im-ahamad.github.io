import Footer from "@/components/Footer";
import { withScrollMotion } from "@/hoc/withMotion";
import { ThemeToggle } from "@/components/ThemeToggle";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import AcademicInterests from "@/components/AcademicInterests";
import BackgroundAniumation from "@/components/BagroundAnimation";

const AnimatedHeroSection = withScrollMotion(Hero);
const AnimatedEducationSection = withScrollMotion(Education);
const AnimatedSkillsSection = withScrollMotion(Skills);
const AnimatedCertificationsSection = withScrollMotion(Certifications);
const AnimatedAcademicInterestsSection = withScrollMotion(AcademicInterests);
const AnimatedProjectsSection = withScrollMotion(Projects);

const Index = () => {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 pointer-events-none">
        <BackgroundAniumation />
      </div>
      <ThemeToggle />

      <AnimatedHeroSection />
      <AnimatedEducationSection />
      <AnimatedSkillsSection />
      <AnimatedCertificationsSection />
      <AnimatedAcademicInterestsSection />
      <AnimatedProjectsSection />

      <Footer />
    </main>
  );
};

export default Index;
