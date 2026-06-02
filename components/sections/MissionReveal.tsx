"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import blurData from "@/lib/blur-data.json";

const MISSION =
  "Federal EEO LLC brings decades of specialized experience to the complex landscape of federal employment law — from informal counseling to full-scale litigation, we position every claim to maximize its potential for resolution.";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MissionReveal() {
  const words = MISSION.split(" ");

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      aria-label="Our mission"
    >
      {/* Background: Washington bridge at 12% grayscale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/washington-bridge.jpg"
          alt=""
          fill
          className="object-cover object-center grayscale"
          style={{ opacity: 0.12 }}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData.washingtonBridge}
          quality={60}
        />
        <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <p className="eyebrow mb-8">Our Mission</p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-x-[0.3em] gap-y-1 font-serif text-brand-navy leading-snug"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.1, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: EASE,
                    delay: i * 0.035,
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
