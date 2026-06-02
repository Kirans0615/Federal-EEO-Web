import React from "react";

interface PullQuoteProps {
  quote: string;
  name: string;
  role: string;
}

export function PullQuote({ quote, name, role }: PullQuoteProps) {
  return (
    <figure
      className="relative pl-10 my-0"
      style={{ borderLeft: "1px solid #C4922A" }}
    >
      {/* Oversized opening quote mark */}
      <span
        aria-hidden="true"
        className="absolute font-serif text-brand-gold select-none pointer-events-none"
        style={{
          fontSize: "8rem",
          lineHeight: 1,
          top: "-40px",
          left: "-32px",
          opacity: 0.3,
          fontFamily: "Georgia, serif",
        }}
      >
        &ldquo;
      </span>
      <blockquote
        className="font-serif text-brand-navy italic"
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          lineHeight: 1.35,
          letterSpacing: "-0.01em",
        }}
      >
        {quote}
      </blockquote>
      <figcaption
        className="mt-6 font-sans text-brand-muted"
        style={{ fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        — {name},{" "}
        <cite style={{ fontStyle: "normal" }}>{role}</cite>
      </figcaption>
    </figure>
  );
}
