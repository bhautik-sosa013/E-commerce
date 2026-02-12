import React from "react";
import CasesSection from "./components/CasesSection";
import ComingSoonSection from "./components/ComingSoonSection";
import HeroSection from "./components/HeroSection";
import TaglineSection from "./components/TaglineSection";
const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CasesSection />
      <ComingSoonSection />
      <TaglineSection />
    </div>
  );
};

export default HomePage;
