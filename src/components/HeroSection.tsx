import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none px-6 md:px-10 py-6 md:py-8"
    >
      {/* 1. NAVBAR */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="flex items-center justify-between w-full">
          <nav className="flex items-center justify-between w-full" aria-label="Main Navigation">
            <button
              onClick={() => scrollTo('about')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition duration-200 cursor-pointer bg-transparent border-none"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition duration-200 cursor-pointer bg-transparent border-none"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition duration-200 cursor-pointer bg-transparent border-none"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition duration-200 cursor-pointer bg-transparent border-none"
            >
              Contact
            </button>
          </nav>
        </header>
      </FadeIn>

      {/* 2. CENTERED HERO CONTENT */}
      <div className="my-auto flex flex-col items-center justify-center text-center w-full z-10 py-8">
        <FadeIn delay={0.15} y={30} className="w-full flex justify-center overflow-hidden">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[16.5vw] select-none"
          >
            Hi, i'm Yashwi
          </h1>
        </FadeIn>

        {/* Balanced Centered Description */}
        <FadeIn delay={0.3} y={20} className="mt-6 sm:mt-8 md:mt-10 max-w-xl md:max-w-2xl px-4">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-widest leading-relaxed text-[clamp(0.85rem,1.4vw,1.3rem)] opacity-85"
          >
            3rd year ECE student exploring AI, technology, UI/UX and creative digital experiences
          </p>
        </FadeIn>

        {/* Centered Contact CTA */}
        <FadeIn delay={0.45} y={20} className="mt-8 sm:mt-10">
          <ContactButton id="hero-contact-cta" />
        </FadeIn>
      </div>

      {/* 3. SUBTLE BOTTOM FOOTER BAR */}
      <FadeIn delay={0.55} y={10} className="w-full flex justify-between items-center text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono pt-4">
        <span>ECE • Creative Tech</span>
        <button
          onClick={() => scrollTo('about')}
          className="hover:text-[#D7E2EA] transition-colors cursor-pointer bg-transparent border-none uppercase tracking-widest"
        >
          Scroll to explore ↓
        </button>
      </FadeIn>
    </section>
  );
};
