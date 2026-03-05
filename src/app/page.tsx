"use client";

import { motion } from "framer-motion";
import FloatingDonuts from "@/components/animations/FloatingDonuts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-neutral-950 text-neutral-100 overflow-hidden relative">
      <FloatingDonuts />
      <div className="flex flex-col items-center justify-center gap-2 relative z-10 w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-normal leading-snug tracking-tight transition-colors duration-500 text-neutral-200"
        >
          Hi, I&apos;m Pedro! Freelance all-in-one developer,<br className="hidden sm:block" /> designer, cms-ifier. Available for hire.
        </motion.h1>
      </div>
    </main>
  );
}
