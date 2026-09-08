import React from 'react';
import { ProjectItem } from '../types';
import { X, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121417] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-modal-button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 mb-6 sm:mb-8 pr-12">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[#D7E2EA]">
              {project.category}
            </span>
            <span className="text-sm font-bold text-white/40">#{project.number}</span>
          </div>
          <h3 className="hero-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
            {project.name}
          </h3>
        </div>

        {/* Project Description & Honest Student Context */}
        <div className="space-y-6 text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0C0C0C]/60 border border-white/10">
            <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA] font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B600A8]" />
              Project Concept & Purpose
            </h4>
            <p className="text-white text-base sm:text-lg font-normal">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
              Exploration & Learning Focus
            </h4>
            <p>{project.overview}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
              Core Areas Explored
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.focusAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-[#D7E2EA]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/40 italic">
              Note: This is an academic exploration concept and prototype designed by Yashwitha Nadakuduru as a 3rd-year ECE student. Visuals represent conceptual architectural and interface designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
