"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full border border-white/10 bg-primary-container p-8 hover:bg-surface-container-lowest transition-colors flex flex-col"
      >
        <div className="mb-6 text-primary group-hover:text-on-primary/80 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-medium tracking-tight mb-4 uppercase">{title}</h3>
        <p className="text-sm text-on-primary/60 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-[0.08em] text-primary group-hover:text-on-primary/80 transition-colors">
          Explore <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
