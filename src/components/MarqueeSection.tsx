import React, { useRef, useEffect, useState } from 'react';

const GIF_URLS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW1_IMAGES = [
  ...GIF_URLS.slice(0, 11),
  ...GIF_URLS.slice(0, 11),
  ...GIF_URLS.slice(0, 11),
];

const ROW2_IMAGES = [
  ...GIF_URLS.slice(11),
  ...GIF_URLS.slice(11),
  ...GIF_URLS.slice(11),
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;

        // Check if section is somewhat in viewport view
        const offset = (scrollY - sectionTop + innerHeight) * 0.3;

        if (row1Ref.current) {
          row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
        }
        if (row2Ref.current) {
          row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          ref={row1Ref}
          className="flex gap-3 will-change-transform"
          style={{ willChange: 'transform' }}
        >
          {ROW1_IMAGES.map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181A1F] border border-white/5 shadow-2xl"
            >
              <img
                src={src}
                alt="Creative technological visual preview"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          ref={row2Ref}
          className="flex gap-3 will-change-transform"
          style={{ willChange: 'transform' }}
        >
          {ROW2_IMAGES.map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181A1F] border border-white/5 shadow-2xl"
            >
              <img
                src={src}
                alt="Creative technological visual preview"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
