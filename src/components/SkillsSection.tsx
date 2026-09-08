import React from 'react';
import { FadeIn } from './FadeIn';
import { SkillItem } from '../types';

const SKILLS_DATA: SkillItem[] = [
  {
    id: 'skill-java',
    number: '01',
    name: 'Java',
    description:
      'Learning and using Java fundamentals for programming, problem-solving, and understanding object-oriented concepts.',
  },
  {
    id: 'skill-python',
    number: '02',
    name: 'Python',
    description:
      'Using Python for programming, experimentation, AI-related exploration, and building practical applications.',
  },
  {
    id: 'skill-c',
    number: '03',
    name: 'C Programming',
    description:
      'Understanding core programming concepts, logic, data handling, and problem-solving using C.',
  },
  {
    id: 'skill-uiux',
    number: '04',
    name: 'UI/UX',
    description:
      'Designing clean and user-focused digital interfaces with attention to usability, layout, visual hierarchy, and user experience.',
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden z-0"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2
            id="skills-heading"
            className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight"
          >
            Skills
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {SKILLS_DATA.map((skill, index) => (
            <FadeIn
              key={skill.id}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div
                id={skill.id}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 transition-colors duration-300 hover:border-[#0C0C0C]/40"
              >
                {/* Left: Huge Number */}
                <div className="mb-3 md:mb-0 md:w-1/3">
                  <span
                    className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none block select-none tracking-tighter"
                  >
                    {skill.number}
                  </span>
                </div>

                {/* Right: Name & Description */}
                <div className="md:w-2/3 flex flex-col justify-center space-y-2 sm:space-y-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] text-[clamp(1.2rem,2.2vw,2.1rem)] tracking-tight leading-tight"
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]"
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
