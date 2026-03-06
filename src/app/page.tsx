"use client";

import { motion } from "framer-motion";
import FloatingDonuts from "@/components/animations/FloatingDonuts";

export default function Home() {
  return (
    <main className="flex max-md:h-[100dvh] min-h-screen flex-col items-center justify-center px-6 bg-neutral-950 text-neutral-100 overflow-hidden relative max-md:overscroll-none">
      <FloatingDonuts />

      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-3xl text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.15rem] sm:text-2xl md:text-3xl lg:text-[2.2rem] font-medium sm:font-normal leading-relaxed sm:leading-snug tracking-tight text-neutral-200 pointer-events-auto"
        >
          Hi, I&apos;m Pedro! Freelance all-in-one developer,<br className="hidden sm:block" /> designer, cms-ifier. <span className="block sm:inline mt-2 sm:mt-0 text-neutral-400">Available for hire.</span>
        </motion.h1>
      </div>
    </main>
  );
}
