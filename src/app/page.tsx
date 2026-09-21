"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/navigation";

function TiltCard({ 
  children, 
  className = "", 
  onClick, 
  initial, 
  animate, 
  transition,
  isActive
}: { 
  children: ReactNode; 
  className?: string; 
  onClick?: () => void;
  initial?: HTMLMotionProps<"div">["initial"];
  animate?: HTMLMotionProps<"div">["animate"];
  transition?: HTMLMotionProps<"div">["transition"];
  isActive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.6, 0, 0.6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={initial}
      animate={animate}
      transition={transition}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      data-active={isActive}
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)",
          x: glareX,
          y: glareY,
          opacity: glareOpacity,
          mixBlendMode: "overlay",
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-8 px-4 gap-3 text-center pointer-events-none" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

function RainText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="flex">
          {word.split("").map((char, cIdx) => {
            const seed = wIdx * 100 + cIdx;
            const delay = (seed % 20) * 0.02; // Random stagger up to 0.4s
            const y = 40 + (seed % 60); // Falls down by 40-100px
            const x = (seed % 40) - 20; // Scatters horizontally
            const rot = (seed % 90) - 45; // Rotates slightly

            return (
              <span
                key={cIdx}
                className="inline-block opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-all duration-[800ms] ease-out translate-y-[var(--ty)] translate-x-[var(--tx)] rotate-[var(--rot)] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 group-data-[active=true]:translate-y-0 group-data-[active=true]:translate-x-0 group-data-[active=true]:rotate-0"
                style={{
                  "--ty": `${y}px`,
                  "--tx": `${x}px`,
                  "--rot": `${rot}deg`,
                  transitionDelay: `${delay}s`,
                } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [appState, setAppState] = useState("init"); // "init", "loading", "center", "center-text", "center-no-text", "full"
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number, route: string) => {
    // Basic detection for touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      if (activeCard === id) {
        router.push(route);
      } else {
        setActiveCard(id);
      }
    } else {
      router.push(route);
    }
  };

  useEffect(() => {
    if (typeof performance !== "undefined") {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      const isReload = navEntries.length > 0 
        ? navEntries[0].type === "reload"
        : (performance.navigation && performance.navigation.type === 1);
        
      if (isReload) {
        sessionStorage.removeItem("vulcan_intro_played");
      }
    }

    const isPlayed = sessionStorage.getItem("vulcan_intro_played");
    if (isPlayed) {
      setTimeout(() => setAppState("full"), 0);
      return;
    }

    setTimeout(() => setAppState("loading"), 0);
    let isMounted = true;

    const imagesToPreload = [
      "/logos/Logo-Black.png",
      "/logos/Name-General-Black.png",
      "/logos/Name-Brand-Black.png",
      "/logos/Name-Arch-Black.png",
      "/logos/Name-Motors-Black.png"
    ];

    const preloadPromise = Promise.all(
      imagesToPreload.map(src => {
        return new Promise(resolve => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
      })
    );

    // Enforce a minimum 2.5s loading animation time (matches CSS animation)
    const timerPromise = new Promise(resolve => setTimeout(resolve, 2500));

    Promise.all([preloadPromise, timerPromise]).then(() => {
      if (!isMounted) return;
      setAppState("center");
      
      // 2. After another 2s, show text
      setTimeout(() => {
        if (isMounted) setAppState("center-text");
      }, 2000);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleUserScroll = () => {
      if (appState === "center-text") {
        setAppState("center-no-text");
        setTimeout(() => {
          setAppState("full");
          sessionStorage.setItem("vulcan_intro_played", "true");
        }, 800);
      }
    };

    if (appState === "center-text") {
      window.addEventListener("wheel", handleUserScroll);
      window.addEventListener("touchmove", handleUserScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [appState]);

  const logoTransition = {
    duration: 1.2,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Super smooth custom ease
  };

  const shadowSide = "0px 0px 30px rgba(174,174,192,0.45)";
  const shadowCenter = "0px 0px 40px rgba(174,174,192,0.45)";

  if (appState === "init") {
    // Blank screen for one frame to avoid hydration mismatch flashes
    return <div className="w-full min-h-screen bg-[#111]" />;
  }

  if (appState === "loading") {
    return (
      <div className="w-full min-h-screen bg-[#111] flex flex-col items-center justify-center">
        <style>{`
          @keyframes loading {
            0% { width: 0px; opacity: 1; }
            90% { width: 300px; opacity: 1; }
            100% { width: 300px; opacity: 1; }
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
      <main className="w-full min-h-screen bg-[#f4f5f7] text-black flex flex-col items-center justify-center font-sans overflow-hidden px-6 relative">
        <motion.div 
          layoutId="logo-container"
          transition={logoTransition}
          className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-full px-4"
        >
          <motion.img 
            layoutId="logo-icon" 
            transition={logoTransition}
            src="/logos/Logo-Black.png" 
            alt="Vulcan Logo" 
            className="h-16 sm:h-20 md:h-32 w-auto object-contain shrink-0" 
          />
          <motion.img 
            layoutId="logo-text" 
            transition={logoTransition}
            src="/logos/Name-General-Black.png" 
            alt="Vulcan International" 
            className="h-10 sm:h-12 md:h-24 w-auto object-contain shrink-0" 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: appState === "center-text" ? 1 : 0, 
            y: appState === "center-text" ? 0 : 10 
          }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center mt-6 md:mt-12 text-[#5f5e5e] text-[11px] sm:text-xs md:text-base leading-relaxed tracking-wide pointer-events-none px-2"
        >
          Vulcan, named after the Roman god of craftsmanship, fire and creation, was founded in 2017 with a vision to build and shape brands, spaces and businesses with a distinctly international perspective.<br/><br/>
          Today, Vulcan operates as a holding company comprising three specialized entities: Vulcan Brand House, Vulcan Architecture, and Vulcan Motors — connecting brand, space and commerce through a refined, integrated approach.<br/><br/>
          With projects delivered across more than 10 countries and an international client base, Vulcan continues to create distinctive experiences across borders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: appState === "center-text" ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 pointer-events-none"
        >
          <span className="font-label-mono text-label-mono text-[#a1a1aa] uppercase tracking-widest text-[10px]">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gray-300 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-black absolute top-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
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
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-12 sm:mt-24 mb-4" style={{ perspective: 1500 }}>
        <TiltCard 
          onClick={() => handleCardClick(1, '/branding')}
          isActive={activeCard === 1}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          transition={{ duration: 1, delay: 1.2 }}
          className="group w-[28vw] sm:w-36 md:w-52 h-[300px] sm:h-[400px] md:h-[560px] bg-gradient-to-t from-[#0b0b0b]/10 to-[#f4f5f7]/80 to-[40%] rounded-sm backdrop-blur-md"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Brand-Black.png" alt="Brand" className="h-3.5 sm:h-5 md:h-6 w-auto object-contain opacity-80 mb-1 sm:mb-2" />
          <RainText 
            text="A global brand house shaping every touchpoint of a brand — making all audience experiences from strategy and identity to environments, packaging and people. With more than 200 projects across more than 10 countries, we build distinctive brands designed to exist beyond borders."
            className="text-[8px] sm:text-[10px] md:text-xs text-[#5f5e5e] font-body-sm leading-relaxed mt-1 sm:mt-2"
          />
        </TiltCard>
        <TiltCard 
          onClick={() => handleCardClick(2, '/architecture')}
          isActive={activeCard === 2}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowCenter }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowCenter }} 
          transition={{ duration: 1, delay: 1.5 }}
          className="group w-[30vw] sm:w-36 md:w-52 h-[380px] sm:h-[520px] md:h-[720px] bg-gradient-to-t from-[#f6f6f4]/50 to-[#f4f5f7]/80 to-[40%] rounded-sm z-10 backdrop-blur-md"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Arch-Black.png" alt="Arch" className="h-3.5 sm:h-5 md:h-6 w-auto object-contain opacity-80 mb-1 sm:mb-2" />
          <RainText 
            text="An architecture and design studio creating spaces that extend and complete the identity of a brand. From commercial and corporate environments to residential and hospitality projects, we bring architecture and experience into one language."
            className="text-[8px] sm:text-[10px] md:text-xs text-[#5f5e5e] font-body-sm leading-relaxed mt-1 sm:mt-2"
          />
        </TiltCard>
        <TiltCard 
          onClick={() => handleCardClick(3, '/transport')}
          isActive={activeCard === 3}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          transition={{ duration: 1, delay: 1.8 }}
          className="group w-[28vw] sm:w-36 md:w-52 h-[300px] sm:h-[400px] md:h-[560px] bg-gradient-to-t from-[#6e0820]/15 to-[#f4f5f7]/80 to-[40%] rounded-sm backdrop-blur-md"
        >
          <img src="/logos/Logo-Black.png" alt="Vulcan Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80" />
          <img src="/logos/Name-Motors-Black.png" alt="Motors" className="h-3.5 sm:h-5 md:h-6 w-auto object-contain opacity-80 mb-1 sm:mb-2" />
          <RainText 
            text="An automotive trading company connecting all around the World to Iran through the sourcing and export of vehicles and automotive parts. We provide a focused, reliable bridge between selected markets and the automotive industry."
            className="text-[8px] sm:text-[10px] md:text-xs text-[#5f5e5e] font-body-sm leading-relaxed mt-1 sm:mt-2"
          />
        </TiltCard>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1 }}
        className="w-16 h-[2px] bg-black mb-4 mt-4"
      ></motion.div>

      <motion.div 
        layoutId="logo-container"
        transition={logoTransition}
        className="flex items-center justify-center gap-4 mb-4"
      >
        <motion.img 
          layoutId="logo-icon" 
          transition={logoTransition}
          src="/logos/Logo-Black.png" 
          alt="Vulcan Logo" 
          className="h-10 sm:h-16 md:h-20 w-auto object-contain" 
        />
        <motion.img 
          layoutId="logo-text" 
          transition={logoTransition}
          src="/logos/Name-General-Black.png" 
          alt="Vulcan International" 
          className="h-6 sm:h-12 md:h-16 w-auto object-contain" 
        />
      </motion.div>

    </main>
  );
}
