import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';

export const AboutSection: React.FC = () => {
  const aboutBioText =
    "I'm Yashwitha, a third-year Electronics and Communication Engineering student passionate about exploring technology and building creative digital experiences. I'm interested in AI-powered applications, UI/UX, and turning ideas into practical projects. I enjoy learning, experimenting, and building things that can solve real problems. I'm continuously developing my skills and looking for opportunities to create something meaningful.";

  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Decorative 3D visual 1: TOP LEFT Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon 3D asset"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D visual 2: BOTTOM LEFT */}
      <div className="absolute bottom-[4%] sm:bottom-[6%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.2} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative creative 3D element"
            className="w-[110px] sm:w-[150px] md:w-[190px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D visual 3: TOP RIGHT Lego */}
      <div className="absolute top-[4%] sm:top-[5%] right-[1%] sm:right-[3%] md:right-[5%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego 3D element"
            className="w-[110px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D visual 4: BOTTOM RIGHT */}
      <div className="absolute bottom-[4%] sm:bottom-[5%] right-[1%] sm:right-[3%] md:right-[5%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative futuristic geometric element"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="z-20 max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        <FadeIn delay={0} y={40} className="mb-6 sm:mb-8 md:mb-10">
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]"
          >
            About me
          </h2>
        </FadeIn>

        <div className="w-full flex justify-center">
          <AnimatedText
            text={aboutBioText}
            id="about-bio-text"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>
      </div>
    </section>
  );
};
