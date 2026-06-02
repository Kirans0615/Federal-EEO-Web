"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`relative ${className}`}>
      <p className="flex flex-wrap gap-x-[0.3em] gap-y-1 font-serif text-display-md md:text-display-lg text-brand-navy leading-snug">
        {words.map((word, i) => {
          const wordStart = i / words.length;
          const wordEnd   = (i + 1) / words.length;
          return (
            <WordMask
              key={i}
              word={word}
              progress={scrollYProgress}
              start={wordStart}
              end={wordEnd}
            />
          );
        })}
      </p>
    </div>
  );
}

function WordMask({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y       = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}
    </motion.span>
  );
}
