"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FlipCardProps {
    src: string;
    index: number;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: Math.max(0, target.opacity),
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
                zIndex: 5,
            }}
            className="pointer-events-auto cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-md shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-md shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-on-primary uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Repeat local images to reach 20
const LOCAL_IMAGES = [
    "/images/architectur1.jpg",
    "/images/architectur2.jpg",
    "/images/brinding1.jpg",
    "/images/brinding2.jpg",
    "/images/brinding3.jpg",
    "/images/transport1.jpg",
    "/images/transport2.jpg",
    "/images/transport3.jpg",
];

const TOTAL_IMAGES = 20;
const IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => LOCAL_IMAGES[i % LOCAL_IMAGES.length]);

export default function ScatterMorphImages({ scrollProgress, isMobileState }: { scrollProgress: number, isMobileState: boolean }) {
    
    // We compute positions based on scrollProgress
    // When progress == 0, form a circle around the central video
    // When progress > 0, they fly outwards (scatter away)
    
    const positions = useMemo(() => {
        const radius = isMobileState ? 170 : 380; // Distance from center
        
        return IMAGES.map((_, i) => {
            // Distribute images in an upper arc (horseshoe) to avoid the bottom area
            // 0 is right, 90 is bottom, 180 is left, 270 (-90) is top
            // We want from 135 (bottom-left) to 405 (bottom-right)
            const startAngle = 135;
            const endAngle = 405;
            const angle = startAngle + (i / (TOTAL_IMAGES - 1)) * (endAngle - startAngle);
            const rad = (angle * Math.PI) / 180;
            
            // Base circle position
            const baseX = Math.cos(rad) * radius;
            const baseY = Math.sin(rad) * radius;
            
            // Outward fly vector
            const flyDistance = scrollProgress * (isMobileState ? 600 : 1200);
            const flyX = Math.cos(rad) * flyDistance;
            const flyY = Math.sin(rad) * flyDistance;

            return {
                x: baseX + flyX,
                y: baseY + flyY,
                rotation: angle + 90 + (scrollProgress * 180), // Spin as they fly away
                scale: Math.max(0, 1 - scrollProgress * 0.5), // Shrink slightly as they fly
                opacity: 1 - scrollProgress * 1.5, // Fade out
            };
        });
    }, [scrollProgress, isMobileState]);

    // Don't render if completely faded out to save performance
    if (scrollProgress > 0.8) return null;

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-10">
            {IMAGES.map((src, i) => (
                <FlipCard
                    key={i}
                    src={src}
                    index={i}
                    target={positions[i]}
                />
            ))}
        </div>
    );
}
