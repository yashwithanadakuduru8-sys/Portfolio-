import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'CONTACT ME',
  onClick,
  className = '',
  id = 'hero-contact-button',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      type="button"
      className={`relative inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 select-none ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span>{label}</span>
    </button>
  );
};
