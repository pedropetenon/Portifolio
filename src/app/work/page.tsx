"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";


const projects = [
    { title: "Project Alpha", category: "Web Design", year: "2024", href: "#", image: "https://picsum.photos/seed/alp/800/600?grayscale" },
    { title: "Project Beta", category: "3D Interaction", year: "2023", href: "#", image: "https://picsum.photos/seed/bet/800/600?grayscale" },
    { title: "Project Gamma", category: "Branding", year: "2023", href: "#", image: "https://picsum.photos/seed/gam/800/600?grayscale" },
    { title: "Project Delta", category: "Experimental", year: "2022", href: "#", image: "https://picsum.photos/seed/del/800/600?grayscale" },
];

const logEntries = [
    {
        id: "sys.004",
        date: "2026.03.04",
        title: "WebGL Performance Profiling",
        category: "[EXPERIMENT]",
        content: "Pushing instance counts past 10k in Three.js. Standard material shaders hold 60fps, but physical materials cause significant frame dropping on mobile processors. Investigating custom shader overrides to bypass built-in lighting calcs while retaining specular highlights.",
    },
    {
        id: "sys.003",
        date: "2026.02.28",
        title: "Typography as Interface",
        category: "[DESIGN]",
        content: "Exploring layouts where text size defines interaction priority completely eliminating traditional buttons. If a headline occupies 40vh, it IS the primary action. The challenge is mobile adaptation without losing the aggressive brutalist scaling.",
    },
    {
        id: "sys.002",
        date: "2026.02.15",
        title: "Logistics Routing Algorithm vs State Management",
        category: "[ENGINEERING]",
        content: "Interesting parallel discovered today: optimizing truck routes for the family transport business uses almost identical conceptual logic as predicting react component state trees. DAGs (Directed Acyclic Graphs) govern both delivery stops and render lifecycles.",
    },
    {
        id: "sys.001",
        date: "2026.01.10",
        title: "Initial System Boot",
        category: "[LOG]",
        content: "Repository initialized. The objective of this 'Core Dump' sector is to serve as an unfiltered, raw output of thoughts, code snippets, and design experiments. No polish required. Just pure data.",
    }
];

export default function WorkPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Physics variables for the smooth floating image container
    const mouseX = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });
    const mouseY = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Offset exactly by half the image width/height to center it on the cursor
            mouseX.set(e.clientX - 160); // Half of w-80 (320px)
            mouseY.set(e.clientY - 120); // Half of h-60 (240px)
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <main className="flex min-h-screen flex-col items-start justify-center pt-32 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 overflow-hidden relative">

            {/* The cursor-following image container */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block w-[320px] h-[240px] overflow-hidden rounded-sm"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    opacity: hoveredIndex !== null ? 1 : 0,
                    scale: hoveredIndex !== null ? 1 : 0.8,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <div
                    className="w-full h-full relative"
                    style={{
                        transform: `translateY(-${(hoveredIndex || 0) * 100}%)`,
                        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                >
                    {projects.map((p, i) => (
                        <div key={i} className="w-full h-full">
                            {/* Disabling standard Next Image optimization here for absolute stylistic control & external generic urls without domain headaches */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-widest relative z-10"
            >
                [01] Selected Works
            </motion.h1>

            <div className="w-full flex flex-col border-t border-neutral-800 relative z-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group border-b border-neutral-800"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Link href={project.href} className="flex relative w-full items-center justify-between py-12 px-4 transition-colors hover:bg-white hover:text-black">
                            <span className="text-[6vw] md:text-[4vw] font-bold leading-none tracking-tighter">
                                {project.title}
                            </span>
                            <div className="flex flex-col items-end text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                                <span>{project.category}</span>
                                <span>{project.year}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* 02. Core Dump Section */}
            <div className="w-full max-w-7xl mx-auto mt-48 mb-12 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest"
                >
                    [02] Core Dump
                </motion.h2>
                <div className="border-b border-neutral-800 pb-12 mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mix-blend-difference"
                    >
                        Core<br />Dump.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 text-sm md:text-base font-mono text-neutral-500 uppercase tracking-widest max-w-2xl"
                    >
                        &gt; Unfiltered technical logs, design experiments, and raw thoughts.
                        Data output is sequential. Formatting is strictly utilitarian.
                    </motion.p>
                </div>

                {/* Log Entries Timeline */}
                <div className="w-full flex flex-col relative before:absolute before:inset-y-0 before:left-0 md:before:left-[20%] before:w-[1px] before:bg-neutral-800">
                    {logEntries.map((entry) => (
                        <motion.article
                            key={entry.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col md:flex-row w-full py-16 group relative"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[-4px] md:left-[calc(20%-4px)] top-20 w-[9px] h-[9px] bg-neutral-950 border-2 border-neutral-600 group-hover:border-white group-hover:bg-white transition-colors duration-300 z-10" />

                            {/* Left: Metadata */}
                            <div className="md:w-1/5 flex flex-col font-mono gap-2 pr-8 pl-6 md:pl-0 mb-6 md:mb-0 pt-3">
                                <span className="text-white font-bold tracking-tight">{entry.id}</span>
                                <span className="text-xs text-neutral-500 tracking-widest">{entry.date}</span>
                                <span className="text-[10px] text-[#a3e635] uppercase tracking-widest mt-2">{entry.category}</span>
                            </div>

                            {/* Right: Content */}
                            <div className="md:w-4/5 flex flex-col pl-6 md:pl-16">
                                <h4 className="text-2xl md:text-4xl font-bold tracking-tighter text-neutral-200 mb-6 group-hover:text-white transition-colors">
                                    {entry.title}
                                </h4>
                                <p className="text-base md:text-lg leading-relaxed text-neutral-400 font-sans group-hover:text-neutral-300 transition-colors max-w-4xl">
                                    {entry.content}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* End of Log Marker */}
                <div className="w-full mt-24 flex justify-start md:justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xs font-mono text-neutral-700 uppercase tracking-widest"
                    >
                        [EOF]
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
