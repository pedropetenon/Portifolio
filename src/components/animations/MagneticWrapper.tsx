"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion, SpringOptions } from "framer-motion";

interface MagneticWrapperProps {
    children: ReactNode;
}

export default function MagneticWrapper({ children }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Apply a fraction of the distance for a subtle pull effect
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const springConfig: SpringOptions = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    };

    return (
        <motion.div
            className="relative flex items-center justify-center"
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: "spring",
                ...springConfig,
            }}
        >
            {children}
        </motion.div>
    );
}
