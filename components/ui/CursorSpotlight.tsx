"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorSpotlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return; // disable on touch

    const el = divRef.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function onMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      // 200ms lag via lerp (factor ~0.1 per frame at 60fps)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (el) {
        el.style.setProperty("--cx", `${currentX}px`);
        el.style.setProperty("--cy", `${currentY}px`);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] hidden lg:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--cx, 50%) var(--cy, 50%), rgba(196,146,42,0.04) 0%, transparent 70%)",
        willChange: "background",
      }}
    />
  );
}
