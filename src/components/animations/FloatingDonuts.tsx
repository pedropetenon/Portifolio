"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Donut({ initialPosition, color, initialVelocity }: { initialPosition: [number, number, number], color: string, initialVelocity: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    // Hold base independent position that continuously drifts
    const basePosition = useRef(new THREE.Vector3(...initialPosition));
    // Hold the target position for the lerp calculation
    const target = useRef(new THREE.Vector3(...initialPosition));

    // Assign a random velocity vector to each donut
    const velocity = useRef(new THREE.Vector3(...initialVelocity));

    // Current scale state starting at almost 0
    const currentScale = useRef(new THREE.Vector3(0.01, 0.01, 0.01));
    const targetScale = useRef(new THREE.Vector3(1, 1, 1));

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // 0. Smooth entrance scaling (from 0 to 1 on initial load)
        if (currentScale.current.x < 0.99) {
            currentScale.current.lerp(targetScale.current, 0.05);
            meshRef.current.scale.copy(currentScale.current);
        }

        // 1. Rotation on its own axis
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;

        // 2. Continuous Free-floating Translation
        basePosition.current.add(velocity.current.clone().multiplyScalar(delta));

        // Screen boundary wrapping (outside of the visible camera range)
        let wrapped = false;
        if (basePosition.current.x > 25) { basePosition.current.x = -25; wrapped = true; }
        if (basePosition.current.x < -25) { basePosition.current.x = 25; wrapped = true; }
        if (basePosition.current.y > 18) { basePosition.current.y = -18; wrapped = true; }
        if (basePosition.current.y < -18) { basePosition.current.y = 18; wrapped = true; }
        if (basePosition.current.z > 5) { basePosition.current.z = -15; wrapped = true; }
        if (basePosition.current.z < -15) { basePosition.current.z = 5; wrapped = true; }

        if (wrapped) {
            // Instantly snap the physical mesh and target to the new wrapped position to avoid flying across screen
            meshRef.current.position.copy(basePosition.current);
            target.current.copy(basePosition.current);
        }

        // 3. Mouse Repulsion Calculation (Strong Negative Magnetic Field)
        const mouseX = (state.pointer.x * state.viewport.width) / 2;
        const mouseY = (state.pointer.y * state.viewport.height) / 2;
        const mouseVec = new THREE.Vector3(mouseX, mouseY, basePosition.current.z);

        const currentPos = meshRef.current.position;
        const distance = currentPos.distanceTo(mouseVec);

        // Drastically increased action zone for a wider "magnetic field" feeling
        const repelRadius = 4.0;

        if (distance < repelRadius) {
            // Push away from the mouse gently
            const dir = new THREE.Vector3().subVectors(currentPos, mouseVec).normalize();

            // Linear, gentle repulsion strength
            const strength = (repelRadius - distance) * 0.5;

            target.current.x = basePosition.current.x + dir.x * strength;
            target.current.y = basePosition.current.y + dir.y * strength;
            target.current.z = basePosition.current.z + dir.z * strength;
        } else {
            // Restore to its continuous drifting base smoothly
            target.current.copy(basePosition.current);
        }

        // Extremely fast interpolation out (dodging), slow interpolation in (returning)
        const lerpFactor = distance < repelRadius ? 0.05 : 0.02;
        meshRef.current.position.lerp(target.current, lerpFactor);
    });

    return (
        <mesh ref={meshRef} position={initialPosition}>
            <torusGeometry args={[0.5, 0.2, 16, 64]} />
            <meshPhysicalMaterial
                color={color}
                roughness={0.1}
                metalness={0.8}
                clearcoat={1.0}
                clearcoatRoughness={0.1}
            />
        </mesh>
    );
}

export default function FloatingDonuts() {
    // Ensuring the event source captures global HTML body mouse movements despite z-index
    const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEventSource(document.body);
    }, []);

    // Initialize the array once to avoid re-rendering layout on every mount cycle
    const [donuts] = useState(() => {
        return Array.from({ length: 45 }).map((_, i) => {
            const x = (Math.random() - 0.5) * 30; // Random X spread
            const y = (Math.random() - 0.5) * 20; // Random Y spread
            const z = (Math.random() - 0.5) * 15 - 5; // Negative Z depth spread

            const vx = (Math.random() - 0.5) * 1.2;
            const vy = (Math.random() - 0.5) * 1.2;
            const vz = (Math.random() - 0.5) * 0.5;

            // Brutalist monochrome colors + slight neon accents to contrast the deep background
            const colors = ["#ffffff", "#d4d4d4", "#737373", "#262626", "#171717"];
            const color = colors[Math.floor(Math.random() * colors.length)];

            return { id: i, position: [x, y, z] as [number, number, number], velocity: [vx, vy, vz] as [number, number, number], color };
        });
    });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Canvas eventSource={eventSource || undefined}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />

                {donuts.map((d) => (
                    <Donut key={d.id} initialPosition={d.position} initialVelocity={d.velocity} color={d.color} />
                ))}
            </Canvas>
        </div>
    );
}
