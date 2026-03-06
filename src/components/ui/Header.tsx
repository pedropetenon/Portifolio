"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticWrapper from "@/components/animations/MagneticWrapper";

export default function Header() {
    const [timeBRT, setTimeBRT] = useState("");
    const [timeWDC, setTimeWDC] = useState("");
    const [usdRate, setUsdRate] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // BRT (Brasília Time)
            setTimeBRT(now.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" }));
            // WDC (Eastern Time)
            setTimeWDC(now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false }));
        };

        const fetchUSD = async () => {
            try {
                const res = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
                const data = await res.json();
                const rate = parseFloat(data.USDBRL.bid).toFixed(2);
                setUsdRate(`R$ ${rate}`);
            } catch (error) {
                console.error("Failed to fetch USD exchange rate", error);
                setUsdRate("R$ --");
            }
        };

        updateTime();
        fetchUSD();
        const interval = setInterval(updateTime, 1000);
        // Update currency every 5 minutes
        const usdInterval = setInterval(fetchUSD, 300000);

        return () => {
            clearInterval(interval);
            clearInterval(usdInterval);
        };
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    const links = [
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full p-6 md:p-8 mix-blend-difference text-white">
            <div className="flex justify-between items-center w-full">

                {/* Left: Brand Name (Visible on all screens) */}
                <div className="flex justify-start text-base font-semibold tracking-tight z-50">
                    <MagneticWrapper>
                        <Link href="/" className="hover:opacity-75 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                            petenon.io
                        </Link>
                    </MagneticWrapper>
                </div>

                {/* Center: Flight-Board Timezones & Currency (Desktop Only) */}
                <div className="hidden md:flex justify-center items-center gap-3 sm:gap-4 pointer-events-none md:text-neutral-300 text-xs sm:text-[13px] font-medium tracking-tight absolute left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <span className="text-neutral-500">BRT</span>
                        <span>{timeBRT || "00:00"}</span>
                        <span>28°C</span>
                    </div>

                    <span className="text-neutral-500 mx-1 sm:mx-2">→</span>

                    <div className="flex items-center gap-1.5 sm:gap-3">
                        <span className="text-neutral-500">WDC</span>
                        <span>{timeWDC || "00:00"}</span>
                        <span>15°C</span>
                    </div>

                    <span className="text-neutral-500 mx-1 sm:mx-2">•</span>

                    <div className="flex items-center gap-1.5">
                        <span className="text-neutral-500">USD</span>
                        <span className="text-[#a3e635]">{usdRate || "R$ --"}</span>
                    </div>
                </div>

                {/* Right: Navigation (Desktop Only) */}
                <nav className="hidden md:flex justify-end items-center gap-8 text-[13px] font-medium tracking-tight z-50">
                    {links.map((link) => (
                        <MagneticWrapper key={link.name}>
                            <Link href={link.href} className="flex group">
                                <div className="relative overflow-hidden h-[19.5px]">
                                    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-1/2 group-hover:translate-y-0">
                                        <span className="h-[19.5px] items-center flex">{link.name}</span>
                                        <span className="h-[19.5px] items-center flex">{link.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </MagneticWrapper>
                    ))}
                </nav>

                {/* Right: Mobile Menu Toggle (Mobile Only) */}
                <button
                    className="md:hidden flex items-center justify-end min-h-[48px] min-w-[48px] z-50 text-sm font-medium uppercase tracking-widest focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <MagneticWrapper>
                        <span className="block px-2">{isMobileMenuOpen ? "Close" : "Menu"}</span>
                    </MagneticWrapper>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-neutral-950 text-white z-40 flex flex-col pt-32 px-6 pb-12 overflow-y-auto mix-blend-normal"
                style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
            >
                <nav className="flex flex-col gap-6 text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-auto border-t border-neutral-800 pt-12">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex py-2 w-full active:text-neutral-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Flight-Board Timezones */}
                <div className="flex flex-col gap-4 text-base font-mono tracking-tight border-t border-neutral-800 pt-8 mt-12 text-neutral-400">
                    <div className="flex justify-between items-center py-2">
                        <span className="text-neutral-600 uppercase">BRT Brazil</span>
                        <div className="flex gap-4">
                            <span>{timeBRT || "00:00"}</span>
                            <span>28°C</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-neutral-600 uppercase">WDC East</span>
                        <div className="flex gap-4">
                            <span>{timeWDC || "00:00"}</span>
                            <span>15°C</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-2 text-[#a3e635]">
                        <span className="text-neutral-600 uppercase">USD Exchange</span>
                        <span>{usdRate || "R$ --"}</span>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}
