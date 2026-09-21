"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [appState, setAppState] = useState("loading"); // "loading", "center", "center-text", "center-no-text", "full"

  useEffect(() => {
    // 1. After 2.5s, finish loading and show logos in center
    const timer1 = setTimeout(() => {
      setAppState("center");
    }, 2500);

    // 2. After another 2s (4.5s total), show text
    const timer2 = setTimeout(() => {
      setAppState("center-text");
    }, 4500);

    // 3. Text visible for 4s, then hide it (8.5s total)
    const timer3 = setTimeout(() => {
      setAppState("center-no-text");
    }, 8500);

    // 4. After text hides, move logos and show blocks (9.5s total)
    const timer4 = setTimeout(() => {
      setAppState("full");
    }, 9500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const logoTransition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Super smooth custom ease
  };

  const shadowSide = "10px 10px 20px rgba(174,174,192,0.4), -10px -10px 20px #ffffff";
  const shadowSideInset = "inset 6px 6px 12px rgba(174,174,192,0.4), inset -6px -6px 12px #ffffff";
  const shadowCenter = "15px 15px 25px rgba(174,174,192,0.4), -15px -15px 25px #ffffff";
  const shadowCenterInset = "inset 8px 8px 16px rgba(174,174,192,0.4), inset -8px -8px 16px #ffffff";

  if (appState === "loading") {
    return (
      <div className="w-full min-h-screen bg-[#111] flex flex-col items-center justify-center">
        <style>{`
          @keyframes loading {
            0% { width: 0px; opacity: 1; }
            90% { opacity: 1; }
            100% { width: 300px; opacity: 0; }
          }
          .animate-loading-bar {
            animation: loading 2.5s ease-out forwards;
          }
        `}</style>
        <div className="relative w-[300px] h-[20px] flex items-center justify-start">
          <div className="h-[1px] border-r-[5px] border-white bg-[#5CE6E6] shadow-[0_0_10px_#5CE6E6] animate-loading-bar" />
        </div>
      </div>
    );
  }

  if (appState.startsWith("center")) {
    return (
      <main className="w-full min-h-screen bg-[#f4f5f7] text-black flex flex-col items-center justify-center font-sans overflow-hidden px-6">
        <motion.div 
          layoutId="logo-container"
          transition={logoTransition}
          className="flex items-center justify-center gap-8"
        >
          <motion.img 
            layoutId="logo-icon" 
            transition={logoTransition}
            src="/logos/Logo-Black.png" 
            alt="Vulcan Logo" 
            className="h-24 md:h-32 w-auto object-contain" 
          />
          <motion.img 
            layoutId="logo-text" 
            transition={logoTransition}
            src="/logos/Name-General-Black.png" 
            alt="Vulcan International" 
            className="h-16 md:h-24 w-auto object-contain" 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: appState === "center-text" ? 1 : 0, 
            y: appState === "center-text" ? 0 : 10 
          }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center mt-12 text-[#5f5e5e] font-body-lg text-body-lg pointer-events-none"
        >
          Vulcan, named after the Roman god of craftsmanship, fire and creation, was founded in 2017 with a vision to build and shape brands, spaces and businesses with a distinctly international perspective.<br/><br/>
          Today, Vulcan operates as a holding company comprising three specialized entities: Vulcan Brand House, Vulcan Architecture, and Vulcan Motors — connecting brand, space and commerce through a refined, integrated approach.<br/><br/>
          With projects delivered across more than 10 countries and an international client base, Vulcan continues to create distinctive experiences across borders.
        </motion.p>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#f4f5f7] text-black flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1 }} 
        className="absolute top-16 flex flex-col items-center"
      >
      </motion.div>

      {/* Frames appear in sequence AFTER the logos have moved */}
      <div className="flex items-center justify-center gap-4 mt-20 mb-8">
        <motion.div 
          onClick={() => router.push('/branding')}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          whileHover={{ scale: 0.98, boxShadow: shadowSideInset, transition: { duration: 0.2, delay: 0 } }}
          transition={{ duration: 1, delay: 1.2 }}
          className="cursor-pointer w-32 md:w-48 h-[400px] md:h-[560px] bg-gradient-to-t from-[#0b0b0b]/10 to-[#f4f5f7] to-[40%] rounded-sm -translate-y-8 flex flex-col items-center pt-8 px-4 gap-3 text-center"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-8 md:h-10 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Brand-Black.png" alt="Brand" className="h-5 md:h-6 w-auto object-contain opacity-80 mb-2" />
          <p className="text-[10px] md:text-sm text-[#5f5e5e] font-body-sm leading-relaxed mt-2 pointer-events-none">A global brand house shaping every touchpoint of a brand — making all audience experiences from strategy and identity to environments, packaging and people. With more than 200 projects across more than 10 countries, we build distinctive brands designed to exist beyond borders.</p>
        </motion.div>
        <motion.div 
          onClick={() => router.push('/architecture')}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowCenter }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowCenter }} 
          whileHover={{ scale: 0.98, boxShadow: shadowCenterInset, transition: { duration: 0.2, delay: 0 } }}
          transition={{ duration: 1, delay: 1.5 }}
          className="cursor-pointer w-36 md:w-56 h-[500px] md:h-[680px] bg-gradient-to-t from-[#f6f6f4]/50 to-[#f4f5f7] to-[40%] rounded-sm z-10 translate-y-6 flex flex-col items-center pt-10 px-5 gap-4 text-center"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-10 md:h-12 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Arch-Black.png" alt="Arch" className="h-6 md:h-7 w-auto object-contain opacity-80 mb-2" />
          <p className="text-[11px] md:text-base text-[#5f5e5e] font-body-sm leading-relaxed mt-4 pointer-events-none">An architecture and design studio creating spaces that extend and complete the identity of a brand. From commercial and corporate environments to residential and hospitality projects, we bring architecture and experience into one language.</p>
        </motion.div>
        <motion.div 
          onClick={() => router.push('/transport')}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          whileHover={{ scale: 0.98, boxShadow: shadowSideInset, transition: { duration: 0.2, delay: 0 } }}
          transition={{ duration: 1, delay: 1.8 }}
          className="cursor-pointer w-32 md:w-48 h-[400px] md:h-[560px] bg-gradient-to-t from-[#6e0820]/15 to-[#f4f5f7] to-[40%] rounded-sm -translate-y-8 flex flex-col items-center pt-8 px-4 gap-3 text-center"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-8 md:h-10 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Motors-Black.png" alt="Motors" className="h-5 md:h-6 w-auto object-contain opacity-80 mb-2" />
          <p className="text-[10px] md:text-sm text-[#5f5e5e] font-body-sm leading-relaxed mt-2 pointer-events-none">An automotive trading company connecting all around the World to Iran through the sourcing and export of vehicles and automotive parts. We provide a focused, reliable bridge between selected markets and the automotive industry.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1 }}
        className="w-16 h-[2px] bg-black mb-8 mt-12"
      ></motion.div>

      <motion.div 
        layoutId="logo-container"
        transition={logoTransition}
        className="flex items-center justify-center gap-6 mb-10"
      >
        <motion.img 
          layoutId="logo-icon" 
          transition={logoTransition}
          src="/logos/Logo-Black.png" 
          alt="Vulcan Logo" 
          className="h-16 md:h-20 w-auto object-contain" 
        />
        <motion.img 
          layoutId="logo-text" 
          transition={logoTransition}
          src="/logos/Name-General-Black.png" 
          alt="Vulcan International" 
          className="h-12 md:h-16 w-auto object-contain" 
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 right-8"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <path d="M19 4 l-1.5 -1.5 l-1.5 1.5 l1.5 1.5 z" fill="black" stroke="none"></path>
        </svg>
      </motion.div>
    </main>
  );
}
