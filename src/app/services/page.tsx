"use client";

import { motion } from "framer-motion";
import MagneticWrapper from "@/components/animations/MagneticWrapper";

const services = [
    {
        id: "01",
        title: "Digital Ecosystems",
        description: "Designing end-to-end platforms that unify your brand's digital presence. From initial architecture to final deployment, we build robust environments that scale.",
        tags: ["Architecture", "Full-Stack", "Web3"]
    },
    {
        id: "02",
        title: "Immersive Interactions",
        description: "Crafting memorable WebGL and 3D experiences that elevate standard interfaces. We focus on spring physics, particle systems, and hardware-accelerated rendering.",
        tags: ["Three.js", "WebGL", "Framer Motion"]
    },
    {
        id: "03",
        title: "Brutalist Interfaces",
        description: "Stripping away the unnecessary to deliver raw, typographic-driven design. We embrace high contrast, strict utility, and bold aesthetic decisions.",
        tags: ["UI/UX", "Typography", "Art Direction"]
    },
    {
        id: "04",
        title: "Performance Engineering",
        description: "Optimizing codebases for the modern web. We audit, refactor, and rewrite critical pathways to ensure instant load times and 60fps animations.",
        tags: ["Next.js", "SEO", "Optimization"]
    }
];

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-start justify-start pt-32 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 overflow-hidden">

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">

                {/* Left Column: Heading */}
                <div className="md:w-1/3 flex flex-col pt-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-mono text-neutral-500 uppercase tracking-widest sticky top-32"
                    >
                        [02] Core Capabilities
                    </motion.h1>
                </div>

                {/* Right Column: Services List */}
                <div className="md:w-2/3 flex flex-col w-full border-t border-neutral-800">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col border-b border-neutral-800 py-12 md:py-16 gap-6 transition-colors hover:bg-white hover:text-black px-4 -mx-4 md:px-8 md:-mx-8"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
                                    {service.title}
                                </h2>
                                <span className="text-xs font-mono opacity-50">
                                    VOL.{service.id}
                                </span>
                            </div>

                            <p className="text-base md:text-lg max-w-xl font-medium tracking-tight text-neutral-400 group-hover:text-neutral-600 transition-colors">
                                {service.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 mt-4">
                                {service.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className="text-xs font-mono uppercase tracking-widest border border-neutral-800 group-hover:border-neutral-300 px-3 py-1 rounded-full transition-colors"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            {/* Interactive CTA per service */}
                            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <MagneticWrapper>
                                    <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1">
                                        Inquire
                                    </button>
                                </MagneticWrapper>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

        </main>
    );
}
