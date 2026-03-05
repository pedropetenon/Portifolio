"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MagneticWrapper from "@/components/animations/MagneticWrapper";

export default function Header() {
    const [timeBRT, setTimeBRT] = useState("");
    const [timeWDC, setTimeWDC] = useState("");
    const [usdRate, setUsdRate] = useState("");

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

    const links = [
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    // Using a 3-column grid for perfect center alignment of the timezone block
    return (
        <header className="fixed top-0 z-50 grid w-full grid-cols-1 md:grid-cols-3 items-center p-6 md:p-8 mix-blend-difference text-white">

            {/* Left: Brand Name */}
            <div className="hidden md:flex justify-start text-base font-semibold tracking-tight">
                <MagneticWrapper>
                    <Link href="/" className="hover:opacity-75 transition-opacity">
                        petenon.io
                    </Link>
                </MagneticWrapper>
            </div>

            {/* Center: Flight-Board Timezones & Currency */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 pointer-events-none md:text-neutral-300 text-xs sm:text-[13px] font-medium tracking-tight">
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

            {/* Right: Navigation */}
            <nav className="hidden md:flex justify-end items-center gap-8 text-[13px] font-medium tracking-tight">
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
        </header>
    );
}
