"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-start justify-start pt-32 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 overflow-hidden">

            {/* Massive Name Header */}
            <div className="w-full max-w-7xl mx-auto mb-20 md:mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15vw] sm:text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black tracking-tighter leading-[0.8] text-white uppercase mix-blend-difference"
                >
                    Pedro<br />
                    Petenon.
                </motion.h1>
            </div>

            {/* 01. The Narrative Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24 mb-32">

                {/* Left Column: Heading */}
                <div className="md:w-1/3 flex flex-col pt-4 gap-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [01] The Narrative
                    </motion.h1>

                    {/* Image Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-video bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
                    >
                        <Image
                            src="/images/pedro-profile.jpg"
                            alt="Pedro Petenon"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                            quality={100}
                            priority
                        />
                        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 flex text-[10px] font-mono text-white mix-blend-difference z-10 pointer-events-none opacity-40">
                            <span>16:9_RATIO</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Typography block */}
                <div className="md:w-2/3 flex flex-col w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-neutral-100 mb-16 uppercase"
                    >
                        Engineer by training.<br />
                        <span className="text-neutral-500">Designer by instinct.</span><br />
                        Athlete by discipline.
                    </motion.h2>

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">The Academic Track</span>
                            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal tracking-tight text-neutral-300 max-w-2xl">
                                Currently navigating the challenges of Production Engineering at <span className="text-white bg-white/10 px-1">UFSCar</span> (São Carlos), expecting to graduate in 2029. My mind orbits around processes and heavy systems optimization, but my pulse beats strong for creativity and visual finesse.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-2 relative before:absolute before:inset-y-0 before:-left-6 before:w-[2px] before:bg-neutral-800"
                        >
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">The Real World</span>
                            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal tracking-tight text-neutral-300 max-w-2xl">
                                As a freelance full-stack developer, I transform raw ideas into highly functional and aesthetic interfaces. I believe in a brutal premise: if the underlying code isn&apos;t clean and well-architected, the human experience will never flow. Behind the scenes of the real world, I apply corporate logistics essence by managing routes and operations at my family&apos;s transport company.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Global Perspective</span>
                            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal tracking-tight text-neutral-400 max-w-2xl">
                                Immersed in the US (<span className="text-white/80 italic">Keystone Heights</span>) during 2022 and 2023, I forged unrestricted technical fluency in English, adding cultural and tactical baggage that no academic class could shape.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 02. Experience & Stack Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24 mb-32">

                {/* Left Column: Heading */}
                <div className="md:w-1/3 flex flex-col pt-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [02] Core Stack & Focus
                    </motion.h2>
                </div>

                {/* Right Column: List */}
                <div className="md:w-2/3 flex flex-col w-full border-t border-neutral-800">
                    {[
                        { title: "Frontend Architecture", desc: "React, Next.js, TypeScript, Tailwind CSS" },
                        { title: "Creative Development", desc: "Three.js, WebGL, Framer Motion, GSAP" },
                        { title: "Design Direction", desc: "Figma, UI/UX, Typography, Branding" },
                        { title: "Operations & Logistics", desc: "Process Optimization, Engineering Planning" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-10 border-b border-neutral-800 transition-colors hover:bg-neutral-100 hover:-mx-4 hover:px-4 md:hover:-mx-8 md:hover:px-8 cursor-default"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-neutral-200 group-hover:text-black transition-colors duration-300">
                                {item.title}
                            </h3>
                            <span className="text-sm font-mono text-neutral-500 group-hover:text-neutral-500 mt-2 sm:mt-0 transition-colors duration-300">
                                {item.desc}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 03. Discipline/Personal Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24">

                {/* Left Column: Heading and Image */}
                <div className="md:w-1/3 flex flex-col pt-4 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [03] Off the Court
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-[3/4] sm:aspect-square md:aspect-[3/4] bg-neutral-900 border border-neutral-800 relative overflow-hidden group"
                    >
                        <Image
                            src="/images/olympic-torch.jpeg"
                            alt="Olympic Torch 2016"
                            fill
                            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        <div className="absolute top-4 left-4 flex flex-col text-[10px] font-mono text-white mix-blend-difference z-10 pointer-events-none">
                            <span className="opacity-70">OLYMPIC_TORCH</span>
                            <span className="opacity-40">Rio 2016</span>
                        </div>
                        <div className="absolute bottom-4 right-4 flex text-[10px] font-mono text-white mix-blend-difference z-10 pointer-events-none opacity-40">
                            <span>3:4_RATIO</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Narrative block */}
                <div className="md:w-2/3 flex flex-col w-full pb-24 border-b border-neutral-800">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1] text-neutral-100 mb-12"
                    >
                        &quot;If you don&apos;t find me in front of a monitor, I&apos;m probably exploding on a tennis court.&quot;
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl font-medium leading-normal tracking-tight text-neutral-400 max-w-2xl"
                    >
                        As a <span className="text-[#a3e635] selection:bg-[#a3e635] selection:text-black">Regional League Champion (Category B)</span>, I bring the analytical competitiveness and strict focus of the sport to every line of architecture I sign. I&apos;m addicted to clean movement and the perennial adrenaline of surpassing metrics and my own absolute limits.
                    </motion.p>
                </div>
            </div>

            {/* 04. The Mentality / Quotes Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24 mb-32 pt-24 mt-24 border-t border-neutral-800">

                {/* Left Column: Heading */}
                <div className="md:w-1/3 flex flex-col pt-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [04] The Mentality
                    </motion.h2>
                </div>

                {/* Right Column: Quotes block */}
                <div className="md:w-2/3 flex flex-col w-full space-y-24">

                    {/* Quote 1: Einstein */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-neutral-300 border-l-4 border-white pl-6 md:pl-10 py-2 relative"
                    >
                        <span className="text-neutral-600">&quot;</span>The definition of insanity is doing the same thing over and over again and expecting a different result.<span className="text-neutral-600">&quot;</span>
                        <footer className="mt-8 text-sm font-mono text-neutral-500 tracking-widest uppercase">— Albert Einstein</footer>
                    </motion.blockquote>

                    {/* Quote 2: Attack the Challenge */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-neutral-400 border-l border-neutral-800 pl-6 md:pl-10"
                    >
                        Move towards that challenge whatever that challenge is, and go attack it. You may be successful and you may not be successful, but you will be better.<br />
                        <span className="text-white font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-8 tracking-tighter">Just Do It!</span>
                    </motion.blockquote>

                    {/* Quote 3: Overnight Success */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-neutral-500 leading-relaxed uppercase tracking-widest"
                    >
                        Work work work, no results but I&apos;m a little bit better,<br />
                        Work work work work work, no results but I&apos;m a little bit better,<br />
                        Work, boom, <span className="text-[#a3e635] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 block mix-blend-difference leading-[0.9]">overnight<br />success.</span>
                    </motion.blockquote>

                    {/* Quote 4: I have a dream */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none text-white/5 uppercase"
                    >
                        &quot;I have a dream&quot;
                    </motion.blockquote>
                </div>
            </div>

        </main>
    );
}
