"use client";

import { motion } from "framer-motion";

// Dummy data for the "log" entries
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

export default function CoreDumpPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-start justify-start pt-32 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 overflow-hidden">

            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto mb-20 md:mb-32 border-b border-neutral-800 pb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15vw] sm:text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black tracking-tighter leading-[0.8] text-white uppercase mix-blend-difference"
                >
                    Core<br />Dump.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-sm md:text-base font-mono text-neutral-500 uppercase tracking-widest max-w-2xl"
                >
                    &gt; Unfiltered technical logs, design experiments, and raw thoughts.
                    Data output is sequential. Formatting is strictly utilitarian.
                </motion.p>
            </div>

            {/* Log Entries Timeline */}
            <div className="w-full max-w-7xl mx-auto flex flex-col relative before:absolute before:inset-y-0 before:left-0 md:before:left-[20%] before:w-[1px] before:bg-neutral-800">

                {logEntries.map((entry, index) => (
                    <motion.article
                        key={entry.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row w-full py-16 group relative"
                    >
                        {/* Timeline Node (Hidden on absolute mobile, visible on sm+) */}
                        <div className="absolute left-[-4px] md:left-[calc(20%-4px)] top-20 w-[9px] h-[9px] bg-neutral-950 border-2 border-neutral-600 group-hover:border-white group-hover:bg-white transition-colors duration-300 z-10" />

                        {/* Left: Metadata */}
                        <div className="md:w-1/5 flex flex-col font-mono gap-2 pr-8 pl-6 md:pl-0 mb-6 md:mb-0 pt-3">
                            <span className="text-white font-bold tracking-tight">{entry.id}</span>
                            <span className="text-xs text-neutral-500 tracking-widest">{entry.date}</span>
                            <span className="text-[10px] text-[#a3e635] uppercase tracking-widest mt-2">{entry.category}</span>
                        </div>

                        {/* Right: Content */}
                        <div className="md:w-4/5 flex flex-col pl-6 md:pl-16">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-neutral-200 mb-6 group-hover:text-white transition-colors">
                                {entry.title}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-neutral-400 font-sans group-hover:text-neutral-300 transition-colors max-w-4xl">
                                {entry.content}
                            </p>
                        </div>
                    </motion.article>
                ))}

            </div>

            {/* End of Log Marker */}
            <div className="w-full max-w-7xl mx-auto mt-24 flex justify-start md:justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xs font-mono text-neutral-700 uppercase tracking-widest"
                >
                    [EOF]
                </motion.div>
            </div>

        </main>
    );
}
