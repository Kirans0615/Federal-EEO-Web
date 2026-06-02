import Image from "next/image";
import Link from "next/link";
import blurData from "@/lib/blur-data.json";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lincoln Memorial background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lincoln-memorial.jpg"
          alt="Lincoln Memorial colonnade, Washington DC"
          fill
          className="object-cover object-center grayscale"
          placeholder="blur"
          blurDataURL={blurData.lincolnMemorial}
          quality={70}
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/85" aria-hidden="true" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <p className="font-sans text-brand-gold text-[0.7rem] tracking-[0.2em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="font-serif text-white text-balance mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
          This page is not on the federal docket.
        </h1>
        <p className="font-sans text-white/60 text-sm leading-relaxed mb-10">
          The page you&rsquo;re looking for doesn&rsquo;t exist. If you were searching for information
          about the EEO complaint process, we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-white font-sans text-sm font-medium rounded-sm hover:bg-brand-gold/90 transition-colors duration-200"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-sans text-sm rounded-sm hover:bg-white/10 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
