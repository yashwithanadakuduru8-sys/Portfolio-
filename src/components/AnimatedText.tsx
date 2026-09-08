import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block whitespace-pre">
      {/* Invisible placeholder for exact layout and wrapping */}
      <span className="invisible select-none" aria-hidden="true">
        {displayChar}
      </span>
      {/* Absolutely positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
        aria-hidden="true"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  id = 'animated-text-block',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={containerRef}
      id={id}
      className={`relative ${className}`}
      aria-label={text}
    >
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(1, (index + 1) / total + 0.05);
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
