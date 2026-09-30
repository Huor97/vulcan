"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

  useEffect(() => {
    if (isActive === false) {
      x.set(0);
      y.set(0);
    }
  }, [isActive, x, y]);

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
        transformPerspective: 1500,
      }}
      className={`relative group ${className}`}
      data-active={isActive}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-12 px-4 gap-3 text-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [appState, setAppState] = useState("init"); // "init", "loading", "center", "center-text", "center-no-text", "full"
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const activeCardTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (activeCardTimeoutRef.current) clearTimeout(activeCardTimeoutRef.current);
    };
  }, []);

  const handleCardClick = (id: number) => {
    // Basic detection for touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setActiveCard(id);
      if (activeCardTimeoutRef.current) clearTimeout(activeCardTimeoutRef.current);
      activeCardTimeoutRef.current = setTimeout(() => {
        setActiveCard(null);
      }, 800); // 0.8s to let the user tap the link
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
      setAppState("center-icon");
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isThrottled = false;
    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 350; // Require 350px of scrolling to trigger the next step

    let touchStartY = 0;

    const advanceState = () => {
      if (appState === "center-icon") {
        setAppState("center");
        setTimeout(() => { isThrottled = false; }, 2500); // 2.5s cooldown
      } else if (appState === "center") {
        setAppState("center-text");
        setTimeout(() => { isThrottled = false; }, 3000); // 3s cooldown to let text settle
      } else if (appState === "center-text") {
        setAppState("center-no-text");
        setTimeout(() => {
          setAppState("full");
          sessionStorage.setItem("vulcan_intro_played", "true");
        }, 1500); // Wait 1.5s for text to fully fade out before moving to full
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      scrollAccumulator += e.deltaY;
      
      if (scrollAccumulator > SCROLL_THRESHOLD) {
        isThrottled = true;
        scrollAccumulator = 0;
        advanceState();
      } else if (scrollAccumulator < 0) {
        scrollAccumulator = 0; // Prevent scrolling up from building a negative debt
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isThrottled) return;
      const touchY = e.touches[0].clientY;
      const delta = touchStartY - touchY; // Positive delta means scrolling down
      
      const TOUCH_THRESHOLD = 80; // 80px swipe is enough on mobile
      
      if (delta > TOUCH_THRESHOLD) {
        isThrottled = true;
        touchStartY = touchY; // Reset for next interaction if needed
        advanceState();
      }
    };

    if (appState === "center-icon" || appState === "center" || appState === "center-text") {
      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
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
    return <div className="w-full min-h-screen bg-[#f4f5f7]" />;
  }

  if (appState === "loading") {
    return (
      <div className="w-full min-h-screen bg-[#f4f5f7] flex flex-col items-center justify-center">
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
          layout
          layoutId="logo-container"
          transition={logoTransition}
          className="flex items-center justify-center gap-2 md:gap-4 w-full max-w-full px-4 h-32"
        >
          <motion.img 
            layout
            layoutId="logo-icon" 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              layout: logoTransition,
              opacity: { duration: 1.2, ease: "easeOut" },
              scale: { duration: 1.2, ease: "easeOut" },
              filter: { duration: 1.2, ease: "easeOut" }
            }}
            src="/logos/Logo-Black.png" 
            alt="Vulcan Logo" 
            className="h-16 sm:h-24 md:h-40 w-auto object-contain shrink-0" 
          />
          <motion.div 
            layout
            layoutId="logo-text" 
            initial={false}
            animate={{ 
              width: appState === "center-icon" ? 0 : "auto", 
              opacity: appState === "center-icon" ? 0 : 1,
              filter: appState === "center-icon" ? 'blur(10px)' : 'blur(0px)'
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col justify-center shrink-0 overflow-hidden"
          >
            <div className="w-max flex flex-col justify-center items-center text-center mb-2 md:mb-6">
              <span className="text-[18px] sm:text-[42px] md:text-[60px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-normal leading-none uppercase">Vulcan International</span>
              <span className="text-[13px] sm:text-[30px] md:text-[40px] font-[family-name:var(--font-cormorant)] font-light italic tracking-[0.05em] text-gray-800 mt-1 md:mt-2 leading-none">General Trading Group</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: appState === "center-text" ? 1 : 0, 
            y: appState === "center-text" ? 0 : 10 
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl text-center mt-0 sm:mt-6 md:mt-12 text-[#5f5e5e] text-[10px] sm:text-xs md:text-base leading-relaxed tracking-wide pointer-events-none px-2"
        >
          Vulcan, named after the Roman god of craftsmanship, fire and creation, was founded in 2017 with a vision to build and shape brands, spaces and businesses with a distinctly international perspective.<br/><br/>
          Today, Vulcan operates as a holding company comprising three specialized entities: Vulcan Brand House, Vulcan Architecture, and Vulcan Motors — connecting brand, space and commerce through a refined, integrated approach.<br/><br/>
          With projects delivered across more than 10 countries and an international client base, Vulcan continues to create distinctive experiences across borders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: appState !== "center-no-text" ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-4 sm:bottom-12 flex flex-col items-center gap-3 pointer-events-none"
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
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-12">
        <TiltCard 
          onClick={() => handleCardClick(1)}
          isActive={activeCard === 1}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          transition={{ duration: 1, delay: 1.2 }}
          className="group w-[26vw] sm:w-32 md:w-48 h-[400px] sm:h-[350px] md:h-[480px] rounded-sm"
        >
          {/* Animated Backgrounds */}
          <div className="absolute inset-0 bg-[#f4f5f7]/40 backdrop-blur-md group-hover:opacity-0 group-data-[active=true]:opacity-0 transition-opacity duration-700 -z-20 rounded-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#333333] to-[#000000] opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-700 -z-20 rounded-sm" />
          
          <div className="absolute inset-x-0 bottom-0 h-[60%] -z-10 pointer-events-none group-hover:opacity-[0.15] group-data-[active=true]:opacity-[0.15] transition-opacity duration-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] rounded-b-sm">
            <Image src="/images/Left.png" alt="" fill sizes="(max-width: 768px) 30vw, 20vw" className="object-cover object-bottom rounded-b-sm" />
          </div>
          <Image src="/logos/Logo-Black.png" alt="Vulcan Logo" width={200} height={200} className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80 mb-0 group-hover:brightness-0 group-hover:invert group-data-[active=true]:brightness-0 group-data-[active=true]:invert transition-all duration-700" style={{ transform: "translateZ(70px)" }} />
          <div className="flex flex-col items-center mb-1 sm:mb-2 text-center transition-colors duration-700 group-hover:text-white group-data-[active=true]:text-white" style={{ transform: "translateZ(50px)" }}>
            <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-[0.2em] leading-none uppercase">Vulcan</span>
            <span className="text-[10px] sm:text-[14px] md:text-[19px] lg:text-[24px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-wide leading-none whitespace-nowrap uppercase mt-[1px] sm:mt-[2px]">Brand House</span>
            <span className="text-[6px] sm:text-[8px] md:text-[10px] font-[family-name:var(--font-cormorant)] font-light italic tracking-[0.1em] text-gray-800 group-hover:text-gray-300 group-data-[active=true]:text-gray-300 transition-colors duration-700 mt-[1px] sm:mt-[2px] leading-none">Branding & Identity</span>
          </div>
          <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center">
            <p className="text-[6px] sm:text-[8px] md:text-[10px] text-[#5f5e5e] group-hover:text-gray-300 group-data-[active=true]:text-gray-300 font-body-sm leading-relaxed mt-1 sm:mt-2 text-justify opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0 transition-all duration-[800ms] ease-out">
              A global brand house shaping every touchpoint of a brand — making all audience experiences from strategy and identity to environments, packaging and people. With more than 200 projects across more than 10 countries, we build distinctive brands designed to exist beyond borders.
            </p>
            <Link href="/branding" className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-data-[active=true]:pointer-events-auto z-50 p-2 -m-2 cursor-pointer">
              <motion.div
                animate={{
                  scale: [0.95, 1, 0.95],
                  boxShadow: [
                    "0 0 0 0 rgba(247, 247, 245, 0.7)",
                    "0 0 0 15px rgba(247, 247, 245, 0)",
                    "0 0 0 0 rgba(247, 247, 245, 0)"
                  ]
                }}
                style={{ borderRadius: "30px" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-[#f7f7f5] text-[#0b0b0b] px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1 font-sans font-bold tracking-widest uppercase text-[5px] sm:text-[7px] md:text-[9px] whitespace-nowrap"
              >
                Click for more
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </motion.div>
            </Link>
          </div>
        </TiltCard>
        <TiltCard 
          onClick={() => handleCardClick(2)}
          isActive={activeCard === 2}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowCenter }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowCenter }} 
          transition={{ duration: 1, delay: 1.5 }}
          className="group w-[28vw] sm:w-32 md:w-48 h-[480px] sm:h-[460px] md:h-[620px] rounded-sm z-10"
        >
          {/* Animated Backgrounds */}
          <div className="absolute inset-0 bg-[#f4f5f7]/40 backdrop-blur-md group-hover:opacity-0 group-data-[active=true]:opacity-0 transition-opacity duration-700 -z-20 rounded-sm" />
          <div className="absolute inset-0 bg-[#343434] opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-700 -z-20 rounded-sm" />
          
          <div className="absolute inset-x-0 bottom-0 h-[60%] -z-10 pointer-events-none group-hover:opacity-[0.15] group-data-[active=true]:opacity-[0.15] transition-opacity duration-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] rounded-b-sm">
            <Image src="/images/Center.png" alt="" fill sizes="(max-width: 768px) 30vw, 20vw" className="object-cover object-bottom rounded-b-sm" />
          </div>
          <Image src="/logos/Logo-Black.png" alt="Vulcan Logo" width={200} height={200} className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80 mb-0 mt-[40px] sm:mt-[55px] md:mt-[70px] group-hover:brightness-0 group-hover:invert group-data-[active=true]:brightness-0 group-data-[active=true]:invert transition-all duration-700" style={{ transform: "translateZ(70px)" }} />
          <div className="flex flex-col items-center mb-1 sm:mb-2 text-center transition-colors duration-700 text-black group-hover:text-white group-data-[active=true]:text-white" style={{ transform: "translateZ(50px)" }}>
            <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-[0.2em] leading-none uppercase">Vulcan</span>
            <span className="text-[10px] sm:text-[14px] md:text-[19px] lg:text-[24px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-wide leading-none whitespace-nowrap uppercase mt-[1px] sm:mt-[2px]">Architecture</span>
            <span className="text-[6px] sm:text-[8px] md:text-[10px] font-[family-name:var(--font-cormorant)] font-light italic tracking-[0.1em] text-gray-800 group-hover:text-gray-300 group-data-[active=true]:text-gray-300 transition-colors duration-700 mt-[1px] sm:mt-[2px] leading-none">Spatial Design & Development</span>
          </div>
          <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center">
            <p className="text-[6px] sm:text-[8px] md:text-[10px] text-[#5f5e5e] group-hover:text-gray-300 group-data-[active=true]:text-gray-300 font-body-sm leading-relaxed mt-1 sm:mt-2 text-justify opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0 transition-all duration-[800ms] ease-out">
              An architecture and design studio creating spaces that extend and complete the identity of a brand. From commercial and corporate environments to residential and hospitality projects, we bring architecture and experience into one language.
            </p>
            <Link href="/architecture" className="mt-4 sm:mt-6 md:mt-7 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-data-[active=true]:pointer-events-auto z-50 p-2 -m-2 cursor-pointer">
              <motion.div
                animate={{
                  scale: [0.95, 1, 0.95],
                  boxShadow: [
                    "0 0 0 0 rgba(247, 247, 245, 0.7)",
                    "0 0 0 15px rgba(247, 247, 245, 0)",
                    "0 0 0 0 rgba(247, 247, 245, 0)"
                  ]
                }}
                style={{ borderRadius: "30px" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-[#f7f7f5] text-[#0b0b0b] px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1 font-sans font-bold tracking-widest uppercase text-[5px] sm:text-[7px] md:text-[9px] whitespace-nowrap"
              >
                Click for more
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </motion.div>
            </Link>
          </div>
        </TiltCard>
        <TiltCard 
          onClick={() => handleCardClick(3)}
          isActive={activeCard === 3}
          initial={{ opacity: 0, scale: 0.95, boxShadow: shadowSide }} 
          animate={{ opacity: 1, scale: 1, boxShadow: shadowSide }} 
          transition={{ duration: 1, delay: 1.8 }}
          className="group w-[26vw] sm:w-32 md:w-48 h-[400px] sm:h-[350px] md:h-[480px] rounded-sm"
        >
          {/* Animated Backgrounds */}
          <div className="absolute inset-0 bg-[#f4f5f7]/40 backdrop-blur-md group-hover:opacity-0 group-data-[active=true]:opacity-0 transition-opacity duration-700 -z-20 rounded-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#651622] to-[#000000] opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-700 -z-20 rounded-sm" />
          
          <div className="absolute inset-x-0 bottom-0 h-[60%] -z-10 pointer-events-none group-hover:opacity-[0.15] group-data-[active=true]:opacity-[0.15] transition-opacity duration-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] rounded-b-sm">
            <Image src="/images/Right.png" alt="" fill sizes="(max-width: 768px) 30vw, 20vw" className="object-cover object-bottom rounded-b-sm" />
          </div>
          <Image src="/logos/Logo-Black.png" alt="Vulcan Logo" width={200} height={200} className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80 mb-0 group-hover:brightness-0 group-hover:invert group-data-[active=true]:brightness-0 group-data-[active=true]:invert transition-all duration-700" style={{ transform: "translateZ(70px)" }} />
          <div className="flex flex-col items-center mb-1 sm:mb-2 text-center transition-colors duration-700 group-hover:text-white group-data-[active=true]:text-white" style={{ transform: "translateZ(50px)" }}>
            <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-[0.2em] leading-none uppercase">Vulcan</span>
            <span className="text-[10px] sm:text-[14px] md:text-[19px] lg:text-[24px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-wide leading-none whitespace-nowrap uppercase mt-[1px] sm:mt-[2px]">Motors</span>
            <span className="text-[6px] sm:text-[8px] md:text-[10px] font-[family-name:var(--font-cormorant)] font-light italic tracking-[0.1em] text-gray-800 group-hover:text-gray-300 group-data-[active=true]:text-gray-300 transition-colors duration-700 mt-[1px] sm:mt-[2px] leading-none">Automotive Sourcing & Trading</span>
          </div>
          <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center">
            <p className="text-[6px] sm:text-[8px] md:text-[10px] text-[#5f5e5e] group-hover:text-gray-300 group-data-[active=true]:text-gray-300 font-body-sm leading-relaxed mt-1 sm:mt-2 text-justify opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0 transition-all duration-[800ms] ease-out">
              An automotive trading company connecting all around the World to Iran through the sourcing and export of vehicles and automotive parts. We provide a focused, reliable bridge between selected markets and the automotive industry.
            </p>
            <Link href="/transport" className="mt-4 sm:mt-6 md:mt-7 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-data-[active=true]:pointer-events-auto z-50 p-2 -m-2 cursor-pointer">
              <motion.div
                animate={{
                  scale: [0.95, 1, 0.95],
                  boxShadow: [
                    "0 0 0 0 rgba(247, 247, 245, 0.7)",
                    "0 0 0 15px rgba(247, 247, 245, 0)",
                    "0 0 0 0 rgba(247, 247, 245, 0)"
                  ]
                }}
                style={{ borderRadius: "30px" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="bg-[#f7f7f5] text-[#0b0b0b] px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1 font-sans font-bold tracking-widest uppercase text-[5px] sm:text-[7px] md:text-[9px] whitespace-nowrap"
              >
                Click for more
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </motion.div>
            </Link>
          </div>
        </TiltCard>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 1 }}
        className="w-16 h-[2px] bg-black mt-10 md:mt-24 mb-6"
      ></motion.div>

      <motion.div 
        layoutId="logo-container"
        transition={logoTransition}
        className="flex items-center justify-center gap-2 mb-2 sm:mb-4"
      >
        <motion.img 
          layoutId="logo-icon" 
          transition={logoTransition}
          src="/logos/Logo-Black.png" 
          alt="Vulcan Logo" 
          className="h-10 sm:h-14 md:h-16 w-auto object-contain" 
        />
        <motion.div 
          layoutId="logo-text" 
          transition={logoTransition}
          className="flex flex-col justify-center items-center text-center shrink-0 mb-1 md:mb-2"
        >
          <span className="text-[16px] sm:text-[24px] md:text-[32px] font-[family-name:var(--font-cormorant)] font-bold italic tracking-normal leading-none uppercase">Vulcan International</span>
          <span className="text-[12px] sm:text-[18px] md:text-[22px] font-[family-name:var(--font-cormorant)] font-light italic tracking-[0.05em] text-gray-800 mt-1 leading-none">General Trading Group</span>
        </motion.div>
      </motion.div>

    </main>
  );
}
