"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  index: string;
}

export default function ProjectCard({ title, category, imageUrl, index }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden border border-white/10 bg-primary-container aspect-[4/3] mb-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          {/* using unoptimized for placeholder images to avoid next/image config issues */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            unoptimized
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
      <div className="flex justify-between items-start pt-4 border-t border-white/10">
        <div className="flex gap-4">
          <span className="text-[11px] font-medium tracking-[0.08em] mt-1 text-on-primary/60">
            {index}
          </span>
          <h3 className="text-lg font-medium uppercase tracking-tight">{title}</h3>
        </div>
        <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-on-primary/60 mt-1">
          {category}
        </span>
      </div>
    </div>
  );
}
