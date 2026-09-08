import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <main
      id="portfolio-main-wrapper"
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] overflow-x-clip select-none"
    >
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection />

      {/* 4. SkillsSection */}
      <SkillsSection />

      {/* 5. ProjectsSection */}
      <ProjectsSection />

      {/* 6. ContactSection */}
      <ContactSection />
    </main>
  );
}
