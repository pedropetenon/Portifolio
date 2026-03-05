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
        </main>
    );
}
