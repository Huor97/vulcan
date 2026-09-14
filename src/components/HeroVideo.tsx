"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import OptimizedTiltCard from '@/components/ui/optimized-tilt-card';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const text1Ref = useRef<HTMLDivElement>(null);
  const detail1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const detail2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const detail3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fix for mobile Safari and strict video loading
    video.pause();
    
    // Timeline linked to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 3, // Ultra-smooth scrubbing over 3 seconds
      }
    });

    // Wait for video metadata to get the exact duration
    const setupVideoAnimation = () => {
      const duration = video.duration || 28;
      
      // Animate video current time across the entire timeline
      tl.fromTo(video, 
        { currentTime: 0 }, 
        { currentTime: duration, duration: 1, ease: "none" }, 
        0
      );

      // ================= BRANDING (0 - 9.6s / 0% - 34%) =================
      // Intro Text (0s - 5s)
      gsap.fromTo(text1Ref.current!.querySelectorAll('.opacity-0'),
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
      // Fade out Intro at 16%
      tl.to(text1Ref.current!.querySelectorAll('.opacity-0'), { opacity: 0, y: -20, filter: "blur(10px)", duration: 0.05, stagger: 0.01, ease: "power2.inOut" }, 0.16);
      
      // Detail Text + Image (5s - 9.6s)
      tl.fromTo(detail1Ref.current!.querySelectorAll('.opacity-0'), 
        { opacity: 0, y: 30, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, stagger: 0.01, ease: "power2.out" }, 
        0.18
      );
      // Fade out Detail at 32%
      tl.to(detail1Ref.current!.querySelectorAll('.opacity-0'), { opacity: 0, y: -20, filter: "blur(10px)", duration: 0.05, stagger: 0.01, ease: "power2.inOut" }, 0.32);

      // ================= ARCHITECTURE (9.6s - 21s / 34% - 75%) =================
      // Intro Text (9.6s - 15s)
      tl.fromTo(text2Ref.current!.querySelectorAll('.opacity-0'), 
        { opacity: 0, y: 30, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, stagger: 0.01, ease: "power2.out" }, 
        0.35
      );
      // Fade out Intro at 52%
      tl.to(text2Ref.current!.querySelectorAll('.opacity-0'), { opacity: 0, y: -20, filter: "blur(10px)", duration: 0.05, stagger: 0.01, ease: "power2.in" }, 0.52);

      // Detail Text + Image (15s - 21s)
      tl.fromTo(detail2Ref.current!.querySelectorAll('.opacity-0'), 
        { opacity: 0, y: 30, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, stagger: 0.01, ease: "power2.out" }, 
        0.54
      );
      // Fade out Detail at 73%
      tl.to(detail2Ref.current!.querySelectorAll('.opacity-0'), { opacity: 0, y: -20, filter: "blur(10px)", duration: 0.05, stagger: 0.01, ease: "power2.in" }, 0.73);

      // ================= TRANSPORT (21s - 28s / 75% - 100%) =================
      // Intro Text (21s - 24s)
      tl.fromTo(text3Ref.current!.querySelectorAll('.opacity-0'), 
        { opacity: 0, y: 30, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, stagger: 0.01, ease: "power2.out" }, 
        0.76
      );
      // Fade out Intro at 84%
      tl.to(text3Ref.current!.querySelectorAll('.opacity-0'), { opacity: 0, y: -20, filter: "blur(10px)", duration: 0.05, stagger: 0.01, ease: "power2.in" }, 0.84);

      // Detail Text + Image (24s - 28s)
      tl.fromTo(detail3Ref.current!.querySelectorAll('.opacity-0'), 
        { opacity: 0, y: 30, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, stagger: 0.01, ease: "power2.out" }, 
        0.86
      );
    };

    if (video.readyState >= 1) {
      setupVideoAnimation();
    } else {
      video.addEventListener('loadedmetadata', setupVideoAnimation);
    }

    return () => {
      video.removeEventListener('loadedmetadata', setupVideoAnimation);
    };

  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-[1200vh] bg-black">
      {/* Sticky container for video and text overlays */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-primary">
        
        {/* Video */}
        <video 
          ref={videoRef}
          src="/vulcan.mp4"
          className="absolute left-1/2 top-1/2 min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
          muted
          playsInline
          preload="auto"
        />

        {/* Text Overlays - Positioned centrally */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-8 pointer-events-none">
          
          {/* BRANDING: INTRO (0 - 5s) */}
          <div ref={text1Ref} className="absolute inset-0 flex flex-col justify-center items-center p-4">
             <span className="opacity-0 font-label-mono text-label-mono uppercase tracking-widest text-white/70 mb-4">01 / Practice</span>
             <h2 className="opacity-0 font-display-hero text-[3rem] md:text-[5rem] lg:text-[7rem] leading-none tracking-tight text-white drop-shadow-lg">BRANDING</h2>
             <p className="opacity-0 mt-6 max-w-lg font-body-md text-white/90 drop-shadow">Rigorous brand systems, typographic identity, and strategic visual positioning for discerning entities.</p>
          </div>

          {/* BRANDING: DETAIL (5 - 9.6s) */}
          <div ref={detail1Ref} className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-8 md:px-24 gap-12">
            <div className="flex flex-col items-start max-w-xl text-left">
               <h3 className="opacity-0 mt-4 text-xl md:text-2xl font-headline-md text-white/90 drop-shadow">Identity Matrix & Typographic Systems</h3>
               <p className="opacity-0 mt-4 font-body-lg text-white/80 drop-shadow">We craft enduring brand codices. Mathematical proportion and disciplined Swiss iconography applied to physical and digital touchpoints.</p>
               <div className="opacity-0 mt-8 font-label-mono text-sm tracking-widest text-white/60 uppercase border-l border-white/20 pl-4">
                 • Logo Conception<br/>
                 • Visual Guidelines<br/>
                 • Editorial & Packaging
               </div>
            </div>
            <OptimizedTiltCard className="opacity-0 hidden lg:block w-[350px] h-[350px] relative border border-white/10 bg-black/20 p-2 backdrop-blur-md shadow-2xl">
               <img src="/images/brinding1.jpg" className="w-full h-full object-cover grayscale contrast-125 opacity-90 pointer-events-none" alt="Logo Design" />
               <div className="absolute bottom-4 left-4 font-label-mono text-[9px] text-white/80 tracking-widest uppercase bg-black/50 px-2 py-1 pointer-events-none">ID-MATRIX 02.8</div>
            </OptimizedTiltCard>
          </div>

          {/* ARCHITECTURE: INTRO (9.6 - 15s) */}
          <div ref={text2Ref} className="absolute inset-0 flex flex-col justify-center items-center p-4">
             <span className="opacity-0 font-label-mono text-label-mono uppercase tracking-widest text-white/70 mb-4">02 / Practice</span>
             <h2 className="opacity-0 font-display-hero text-[3rem] md:text-[5rem] lg:text-[7rem] leading-none tracking-tight text-white drop-shadow-lg">ARCHITECTURE</h2>
             <p className="opacity-0 mt-6 max-w-lg font-body-md text-white/90 drop-shadow">Monolithic volumes, curated light, and bespoke commercial spaces engineered for lasting impact.</p>
          </div>

          {/* ARCHITECTURE: DETAIL (15 - 21s) */}
          <div ref={detail2Ref} className="absolute inset-0 flex flex-col md:flex-row-reverse justify-center items-center p-8 md:px-24 gap-12">
            <div className="flex flex-col items-start max-w-xl text-left">
               <h3 className="opacity-0 mt-4 text-xl md:text-2xl font-headline-md text-white/90 drop-shadow">Retail & Commercial Monoliths</h3>
               <p className="opacity-0 mt-4 font-body-lg text-white/80 drop-shadow">From flagship brand sanctuaries to private institutional environments. An exploration of thermal mass, sharp triangular sightlines, and shadow calibration.</p>
               <div className="opacity-0 mt-8 font-label-mono text-sm tracking-widest text-white/60 uppercase border-l border-white/20 pl-4">
                 • Spatial Prototyping<br/>
                 • Lighting Engineering<br/>
                 • Structural Massing
               </div>
            </div>
            <OptimizedTiltCard className="opacity-0 hidden lg:block w-[450px] h-[300px] relative border border-white/10 bg-black/20 p-2 backdrop-blur-md shadow-2xl">
               <img src="/images/architectur1.jpg" className="w-full h-full object-cover grayscale contrast-125 opacity-90 pointer-events-none" alt="Architecture" />
               <div className="absolute bottom-4 left-4 font-label-mono text-[9px] text-white/80 tracking-widest uppercase bg-black/50 px-2 py-1 pointer-events-none">AXO-SYS 01.3 // ELEV</div>
            </OptimizedTiltCard>
          </div>

          {/* TRANSPORT: INTRO (21 - 24s) */}
          <div ref={text3Ref} className="absolute inset-0 flex flex-col justify-center items-center p-4">
             <span className="opacity-0 font-label-mono text-label-mono uppercase tracking-widest text-white/70 mb-4">03 / Practice</span>
             <h2 className="opacity-0 font-display-hero text-[3rem] md:text-[5rem] lg:text-[7rem] leading-none tracking-tight text-white drop-shadow-lg">TRANSPORT</h2>
             <p className="opacity-0 mt-6 max-w-lg font-body-md text-white/90 drop-shadow">White-glove cross-border vehicular logistics with dedicated interior curation.</p>
          </div>

          {/* TRANSPORT: DETAIL (24 - 28s) */}
          <div ref={detail3Ref} className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-8 md:px-24 gap-12">
            <div className="flex flex-col items-start max-w-xl text-left">
               <h3 className="opacity-0 mt-4 text-xl md:text-2xl font-headline-md text-white/90 drop-shadow">Kinetic Logistics & Customization</h3>
               <p className="opacity-0 mt-4 font-body-lg text-white/80 drop-shadow">Climate-sealed pods, diplomatic clearance, and bespoke cabins. We provide secure transit and transformation of hypercars globally.</p>
               <div className="opacity-0 mt-8 font-label-mono text-sm tracking-widest text-white/60 uppercase border-l border-white/20 pl-4">
                 • Climate-Shielded Freight<br/>
                 • Cockpit Ergonomics<br/>
                 • Concierge Carnet Handling
               </div>
            </div>
            <OptimizedTiltCard className="opacity-0 hidden lg:block w-[450px] h-[300px] relative border border-white/10 bg-black/20 p-2 backdrop-blur-md shadow-2xl">
               <img src="/images/transport1.jpg" className="w-full h-full object-cover grayscale contrast-125 opacity-90 pointer-events-none" alt="Vehicle Transport" />
               <div className="absolute bottom-4 left-4 font-label-mono text-[9px] text-white/80 tracking-widest uppercase bg-black/50 px-2 py-1 pointer-events-none">LOG-TRANS 03.4</div>
            </OptimizedTiltCard>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-20 pointer-events-none">
            <span className="font-label-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>

      </div>
    </div>
  );
}
