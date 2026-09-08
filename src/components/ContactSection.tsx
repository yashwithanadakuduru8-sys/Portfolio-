import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Mail, Github, Check, Copy, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const realEmail = 'yashwithanadakuduru8@gmail.com';
  const githubUrl = 'https://github.com/yashwithanadakuduru8-sys';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(realEmail);
    setCopied(true);
    setInfoMessage('Email copied to clipboard!');
    setTimeout(() => {
      setCopied(false);
      setInfoMessage(null);
    }, 3000);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Contact Heading */}
        <FadeIn delay={0} y={40} className="mb-6 sm:mb-8">
          <h2
            id="contact-heading"
            className="hero-heading font-black uppercase text-center text-[clamp(3.2rem,13vw,170px)] leading-none tracking-tight"
          >
            Let's Create
          </h2>
        </FadeIn>

        {/* Contact Bio / Subtitle */}
        <FadeIn delay={0.15} y={30} className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-[#D7E2EA] font-light text-base sm:text-xl md:text-2xl leading-relaxed opacity-85">
            I'm currently learning, building, and exploring opportunities in technology, AI, and creative digital experiences.
          </p>
        </FadeIn>

        {/* Action Button */}
        <FadeIn delay={0.3} y={20} className="mb-14 sm:mb-16">
          <ContactButton
            id="footer-contact-button"
            label="CONTACT ME"
            onClick={() => {
              window.location.href = `mailto:${realEmail}?subject=Hello%20Yashwitha`;
            }}
          />
        </FadeIn>

        {/* Feedback alert if copied */}
        {infoMessage && (
          <div
            role="status"
            className="mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-white animate-pulse"
          >
            {infoMessage}
          </div>
        )}

        {/* Connected Channels: Real Email & Real GitHub Link */}
        <FadeIn delay={0.4} y={20} className="w-full mb-16 sm:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {/* Email item with copy & direct mailto */}
            <button
              id="contact-item-email"
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] transition duration-200 cursor-pointer group"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 text-[#B600A8]" />
              <span>{realEmail}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-400 ml-1" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-white/40 ml-1 group-hover:text-white/80 transition-colors" />
              )}
            </button>

            {/* Real GitHub Link */}
            <a
              id="contact-item-github"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] transition duration-200 cursor-pointer group"
            >
              <Github className="w-4 h-4 text-[#BE4C00]" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* Footer Note */}
        <div className="pt-8 border-t border-white/10 w-full text-center">
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/50 tracking-wide">
            © 2026 Yashwitha Nadakuduru — Built with curiosity and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};
