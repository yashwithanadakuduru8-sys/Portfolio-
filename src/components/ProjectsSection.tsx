import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-ai-digital-twin',
    number: '01',
    name: 'AI DIGITAL TWIN',
    category: 'STUDENT PROJECT',
    description:
      'An AI-powered digital twin concept designed to explore how a virtual intelligent representation can interact, assist, and respond in a more personalized way. The project focuses on combining AI-driven interaction with a digital experience.',
    overview:
      'Explored persona modeling, interactive conversation structures, and personalized responsiveness using AI. Studied human-computer interaction patterns and digital representation techniques.',
    focusAreas: [
      'Interactive AI Concepts',
      'Virtual Persona Modeling',
      'UI/UX Architecture',
      'Personalized Feedback Systems',
    ],
    visuals: {
      leftTop:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'project-echo-x',
    number: '02',
    name: 'ECHO X',
    category: 'STUDENT PROJECT',
    description:
      'Echo X is an AI-focused project concept built around intelligent interaction and creating a more engaging digital experience. The project represents my exploration of AI applications, user interaction, and creative technology.',
    overview:
      'Investigated reactive voice/audio signal patterns, prompt-based responsiveness, and multi-modal sensory feedback. Aimed at creating seamless, natural interactive workflows.',
    focusAreas: [
      'Audio & Signal Principles',
      'Creative Technology Prototyping',
      'Responsive UI Interaction',
      'Intelligent Interaction Logic',
    ],
    visuals: {
      leftTop:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      leftBottom:
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      rightTall:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenModal: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[90vh] sm:h-[85vh] flex items-start justify-center sticky"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        id={`card-${project.id}`}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-7 md:p-10 shadow-2xl flex flex-col justify-between"
      >
        {/* TOP BAR OF CARD */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-black text-[#D7E2EA] text-3xl sm:text-4xl md:text-5xl leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3 className="hero-heading font-black uppercase text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <button
            id={`view-${project.id}-btn`}
            type="button"
            onClick={() => onOpenModal(project)}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest hover:bg-[#D7E2EA]/10 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition duration-200 cursor-pointer flex items-center gap-2 group"
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* PROJECT DESCRIPTION */}
        <div className="mb-6">
          <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl opacity-90">
            {project.description}
          </p>
          <div className="mt-2 text-xs uppercase tracking-wider text-[#D7E2EA]/40 font-mono">
            CONCEPT VISUALS / PROJECT VISUAL REPRESENTATIONS
          </div>
        </div>

        {/* PROJECT VISUALS LAYOUT: Left 40% (2 stacked), Right 60% (1 tall) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 w-full">
          {/* Left Column (40% width): Two stacked visuals */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/10 h-[150px] sm:h-[180px] md:h-[190px] relative group">
              <img
                src={project.visuals.leftTop}
                alt={`${project.name} - Concept Visual representation 1`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/10 h-[150px] sm:h-[180px] md:h-[190px] relative group">
              <img
                src={project.visuals.leftBottom}
                alt={`${project.name} - Concept Visual representation 2`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width): One tall visual */}
          <div className="md:col-span-6 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/10 h-[220px] sm:h-[300px] md:h-[396px] relative group">
            <img
              src={project.visuals.rightTall}
              alt={`${project.name} - Concept Visual representation 3`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 select-none"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2
            id="projects-heading"
            className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight"
          >
            Projects
          </h2>
        </FadeIn>

        {/* Stack of cards */}
        <div className="flex flex-col relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
