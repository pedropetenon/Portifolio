"use client";

import { useState } from "react";
import MagneticWrapper from "@/components/animations/MagneticWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    const socials = [
        { name: "X", url: "https://x.com/PedroPetenon" },
        { name: "Instagram", url: "https://www.instagram.com/pedropetenon" },
        { name: "Discord", url: "https://discord.gg/M6WEHmUkYx" },
        { name: "WhatsApp", url: "https://wa.me/5519998689239" },
        { name: "Spotify", url: "https://open.spotify.com/playlist/50HcM19ViHEA0vhBT57jz0?si=c9ff3aa07cf84493" },
        { name: "GitHub", url: "https://github.com/pedropetenon" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/pedro-petenon-b81371328/" },
    ];

    return (
        <>
            <footer className="fixed bottom-0 z-50 flex w-full flex-col sm:flex-row items-start sm:items-center justify-between p-6 text-sm font-medium tracking-tight mix-blend-difference text-white gap-6 pointer-events-none">

                {/* Desktop Socials */}
                <div className="hidden sm:flex flex-wrap items-center gap-x-8 gap-y-4 pointer-events-auto">
                    {socials.map((social) => (
                        <MagneticWrapper key={social.name}>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-75 transition-opacity"
                            >
                                {social.name}
                            </a>
                        </MagneticWrapper>
                    ))}
                </div>

                {/* Mobile Socials Toggle */}
                <div className="flex sm:hidden pointer-events-auto w-full justify-between items-center">
                    <button
                        onClick={() => setIsSocialOpen(!isSocialOpen)}
                        className="hover:opacity-75 uppercase tracking-widest text-xs font-bold"
                    >
                        {isSocialOpen ? "[ - Close ]" : "[ + Socials ]"}
                    </button>

                    <MagneticWrapper>
                        <a
                            href="mailto:pedrogpetenon@gmail.com"
                            className="hover:opacity-75 transition-opacity block"
                        >
                            pedrogpetenon@gmail.com
                        </a>
                    </MagneticWrapper>
                </div>

                {/* Desktop Email */}
                <div className="hidden sm:block pointer-events-auto">
                    <MagneticWrapper>
                        <a
                            href="mailto:pedrogpetenon@gmail.com"
                            className="hover:opacity-75 transition-opacity block"
                        >
                            pedrogpetenon@gmail.com
                        </a>
                    </MagneticWrapper>
                </div>
            </footer>

            {/* Mobile Socials Overlay */}
            <AnimatePresence>
                {isSocialOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-0 left-0 w-full bg-neutral-950 text-white z-40 flex flex-col pt-12 px-6 pb-24 sm:hidden border-t border-neutral-800 pointer-events-auto shadow-2xl"
                    >
                        <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6 px-2">Socials</h2>
                        <div className="flex flex-col gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl font-bold tracking-tighter uppercase px-2 hover:opacity-75 transition-colors"
                                    onClick={() => setIsSocialOpen(false)}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
