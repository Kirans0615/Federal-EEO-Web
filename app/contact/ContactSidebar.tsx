"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import blurData from "@/lib/blur-data.json";

export function ContactSidebar() {
  return (
    <div className="hidden lg:block lg:w-[40%] relative overflow-hidden sticky top-0 h-screen">
      {/* Slow vertical pan animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: ["0%", "-15%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        style={{ height: "130%" }}
      >
        <Image
          src="/images/washingtonpencil.jpg"
          alt="Washington Monument obelisk against clear sky, Washington DC"
          fill
          className="object-cover object-center"
          sizes="40vw"
          placeholder="blur"
          blurDataURL={blurData.washingtonpencil}
          quality={85}
          priority
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-transparent to-brand-navy/70" aria-hidden="true" />

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-brand-gold/80 mb-2">
          Washington, DC
        </p>
        <p className="font-serif text-white text-xl leading-snug">
          The federal EEO process demands expertise.
          <br />
          <span className="text-brand-gold italic">We bring it.</span>
        </p>
      </div>
    </div>
  );
}
