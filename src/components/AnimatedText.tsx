"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  delay?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  el: Wrapper = "p",
  delay = 0 
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    }
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.25em]">
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
