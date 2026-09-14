"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import OptimizedTiltCard from "@/components/ui/optimized-tilt-card";
import { motion } from "framer-motion";

export default function Home() {
  const [filter, setFilter] = useState("all");

  return (
    <main className="w-full bg-primary min-h-screen overflow-x-hidden">
      <div className="flex flex-col w-full">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc="/vulcan.mp4"
          bgImageSrc="/images/architectur2.jpg"
          title="VULCAN STUDIO"
          date="International"
          scrollToExpand="Scroll to enter"
          textBlend={true}
        />

        {/* Architectural Showcase Strip */}
        <section className="w-full px-margin-mobile md:px-margin py-space-md bg-primary">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center bg-primary-container border border-white/10 p-space-md md:p-space-lg">
            <div className="md:col-span-8 flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-widest">Featured Architectural Monograph</span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary">The Pavillon d&apos;Observation • Engadin Alpine Matrix</h2>
              <p className="font-body-md text-body-md text-on-primary/70 max-w-2xl">
                An asymmetric concrete pavilion cantilevered above the alpine valley. An exploration of thermal mass, sharp triangular sightlines, and shadow calibration.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end items-center gap-space-md">
              <div className="flex flex-col text-right">
                <span className="font-label-mono text-label-mono text-on-primary font-semibold">46.4907° N, 9.8355° E</span>
                <span className="font-label-mono text-label-mono text-on-primary/60">GR, Switzerland</span>
              </div>
              <div className="w-12 h-12 bg-surface-container-lowest text-primary flex items-center justify-center font-semibold">
                <span className="text-[22px]">↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Feature Architecture Card Visual */}
        <section className="w-full px-margin-mobile md:px-margin pb-space-xl bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[460px] md:h-[580px] overflow-hidden bg-primary border border-white/10">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]" 
                alt="Monolithic minimalist modern concrete gallery pavilion set in Swiss alpine stone landscape" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6Fz0TA_pAXA6t6cK3CqOiqTXjbFxBLl-OzesBIYAKE3Xc99qSCWwRYEcvBY3LZqXN2wA0YXb4XQIza5OC7fmoGldsfY3-IvI179_MBSB4ZhcXm_PyB6am9Y-LYqu3-73Gp6ENqG7cBCS7NpxUrxcbxD-Sj8Wnm4qxW01dashezgSsL9s76NI38NnBVrYiWs4R0ZFZ5xCn0n_NYqGGHbIe9r6eXA8DKv8NU0Izydv3Iirs1cVNjz6" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-space-md md:p-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md text-on-primary">
                  <div className="max-w-xl">
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-primary/70">Folio Plate 01-A</span>
                    <h3 className="font-headline-md text-headline-md text-on-primary mt-1">Sculpted Void &amp; Volumetric Mass</h3>
                    <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">Raw poured pozzolanic concrete, triple-glazed floor-to-ceiling diaphragms, and blackened bronze fittings.</p>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest px-space-md py-space-xs bg-surface-container-lowest text-primary font-semibold">Spatial Specimen Completed 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practices & Services Section: Three Equal, Balanced Cards */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary border-t border-b border-white/10" id="practices">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="w-4 h-[1px] bg-on-primary/40"></span>
                  <span className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-widest">Tripartite Discipline</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-primary">Curated Studio Practices</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-primary/70 max-w-md">
                Three specialized departments executing as an interdependent unit—from conceptual brand architecture to built reality and kinetic transport systems.
              </p>
            </div>
            {/* The Three Equal Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {/* 01. Architectural Designs */}
              <OptimizedTiltCard className="group flex flex-col bg-primary-container border border-white/10 p-space-lg justify-between h-full">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-mono text-label-mono text-on-primary/60">PRACTICE / 01</span>
                    <span className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-wider">Spatial</span>
                  </div>
                  {/* Abstract Architectural Wireframe SVG */}
                  <div className="w-full h-56 bg-primary border border-white/10 flex items-center justify-center p-space-md overflow-hidden relative">
                    <svg className="w-full h-full text-on-primary stroke-current fill-none opacity-80" strokeWidth="1.2" viewBox="0 0 240 180">
                      <polygon className="text-outline" points="40,140 120,165 200,120 120,95" strokeDasharray="2 2"></polygon>
                      <polygon points="40,65 120,90 200,45 120,20"></polygon>
                      <line x1="40" x2="40" y1="65" y2="140"></line>
                      <line x1="120" x2="120" y1="90" y2="165"></line>
                      <line x1="200" x2="200" y1="45" y2="120"></line>
                      <line className="text-on-primary" strokeWidth="1.8" x1="120" x2="160" y1="20" y2="145"></line>
                      <circle className="text-on-primary" cx="160" cy="145" fill="currentColor" r="3"></circle>
                      <circle cx="120" cy="20" fill="currentColor" r="3"></circle>
                      <line className="text-outline" strokeDasharray="3 3" x1="80" x2="80" y1="77" y2="152"></line>
                      <line className="text-outline" strokeDasharray="3 3" x1="160" x2="160" y1="32" y2="107"></line>
                    </svg>
                    <div className="absolute bottom-3 left-4 font-label-mono text-[9px] text-on-primary/40 tracking-widest uppercase">AXO-SYS 01.3 // ELEV</div>
                  </div>
                  <div className="flex flex-col gap-space-xs mt-space-sm">
                    <h3 className="font-headline-md text-headline-md text-on-primary">Architectural Designs</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-wide">Retail &amp; Commercial Architecture</p>
                    <p className="font-body-sm text-body-sm text-on-primary/70 mt-2 leading-relaxed">
                      Monolithic volumes, curated light, and bespoke commercial spaces engineered for lasting impact. From flagship brand sanctuaries to private institutional environments.
                    </p>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <Link className="inline-flex items-center gap-space-xs font-label-mono text-label-mono text-on-primary font-semibold uppercase tracking-wider hover:text-on-primary/70 group-hover:translate-x-1 transition-all" href="/architecture">
                    <span className="">Explore Architecture</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </OptimizedTiltCard>
              {/* 02. Branding & Logo Design */}
              <OptimizedTiltCard className="group flex flex-col bg-primary-container border border-white/10 p-space-lg justify-between h-full">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-mono text-label-mono text-on-primary/60">PRACTICE / 02</span>
                    <span className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-wider">Identity</span>
                  </div>
                  <div className="w-full h-56 bg-primary border border-white/10 flex items-center justify-center p-space-xs overflow-hidden relative">
                    <img alt="vulcan_Logo Design braindig.jpeg" className="w-full h-full object-contain p-2 filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzDOQK320IpDMx1nwPBsTooNtmuJfRZf19GC5WEz7LM7U1TF8fnJrJvvvx-oDp6vlaVxZTEfWrfuibiBxq18VSgTBYQuQvya-kXs90dGlaOHGMTVjXNe94ayxVgsZa9JqMoBHCSSn0-dJ_oLr99WNlnEK0xtDAzgcBjHIwhB7NdLXf0AuzVn4WY4XwaLpc4QFddJUVxdp5OZRJEYnLCbR0McrizJckJKF7aSUSJ-VjzgHyAwCR73e5zy6w5YseYh0zww" />
                    <div className="absolute bottom-3 left-4 font-label-mono text-[9px] text-on-primary/40 tracking-widest uppercase">ID-MATRIX 02.8 // RATIO</div>
                    <div className="absolute top-3 right-4 font-label-mono text-[9px] text-on-primary/40 tracking-widest uppercase">1:1.00 GEO</div>
                  </div>
                  <div className="flex flex-col gap-space-xs mt-space-sm">
                    <h3 className="font-headline-md text-headline-md text-on-primary">Branding &amp; Identity</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-wide">Strategy • Identity • Design</p>
                    <p className="font-body-sm text-body-sm text-on-primary/70 mt-2 leading-relaxed">
                      Rigorous brand systems, typographic identity, and strategic visual positioning for discerning entities. Mathematical proportion and disciplined Swiss iconography.
                    </p>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <Link className="inline-flex items-center gap-space-xs font-label-mono text-label-mono text-on-primary font-semibold uppercase tracking-wider hover:text-on-primary/70 group-hover:translate-x-1 transition-all" href="/branding">
                    <span className="">View Brand Systems</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </OptimizedTiltCard>
              {/* 03. International Vehicle Transport */}
              <OptimizedTiltCard className="group flex flex-col bg-primary-container border border-white/10 p-space-lg justify-between h-full">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-label-mono text-label-mono text-on-primary/60">PRACTICE / 03</span>
                    <span className="font-label-caps text-label-caps text-on-primary/40 uppercase tracking-wider">Kinetic Logistics</span>
                  </div>
                  <div className="w-full h-56 bg-primary border border-white/10 flex items-center justify-center p-space-xs overflow-hidden relative">
                    <img alt="vulcan_Logo International Vehicle Transport.jpeg" className="w-full h-full object-contain p-2 filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0nemwaLWR0Y2O2GXbTyZ-6nt2Fno4xGrLW_0pymArGN0U6fNlZHytJEfMUA4zr9LIoP1yD-AS9XlvY6rC9VsmcM58am-Qe3EOSm1ZFW0LTf3lsfhWPVhtZBPZ_sSv4822cwhJ6y31g6L49wQ_uu2mq3hlhhuSg2bQUwhcqCKkG4kSO6ZNr7xv1pClpN0R6lvRljQwtyZ6hwudUvRXVejb4Q-ER-SWX5lKsjQJFZekgAki69LALCm8K5Tj9OI4mZQDQ" />
                    <div className="absolute bottom-3 left-4 font-label-mono text-[9px] text-on-primary/40 tracking-widest uppercase">LOG-TRANS 03.4 // AIR-GROUND</div>
                    <div className="absolute top-3 right-4 font-label-mono text-[9px] text-on-primary/40 tracking-widest uppercase">ESCORT SECURE</div>
                  </div>
                  <div className="flex flex-col gap-space-xs mt-space-sm">
                    <h3 className="font-headline-md text-headline-md text-on-primary">Vehicle Transport</h3>
                    <p className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-wide">Enclosed Transit &amp; Bespoke Interior Customization</p>
                    <p className="font-body-sm text-body-sm text-on-primary/70 mt-2 leading-relaxed">
                      White-glove cross-border vehicular logistics with dedicated interior curation and object retrofitting. Climate-sealed pods, diplomatic clearance, and bespoke cabins.
                    </p>
                  </div>
                </div>
                <div className="pt-space-lg">
                  <Link className="inline-flex items-center gap-space-xs font-label-mono text-label-mono text-on-primary font-semibold uppercase tracking-wider hover:text-on-primary/70 group-hover:translate-x-1 transition-all" href="/transport">
                    <span className="">Discover Logistics &amp; Bespoke</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </OptimizedTiltCard>
            </div>
          </div>
        </section>

        {/* Detailed Dual Showcase: Branding & Kinetic Transport */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-6 flex flex-col gap-space-md order-2 lg:order-1"
              >
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-mono text-label-mono text-on-primary/60">CASE STUDY 184</span>
                  <span className="text-outline">/</span>
                  <span className="font-label-caps text-label-caps text-on-primary/40 uppercase">Retail Monolith</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-primary">Vulint Concept Store &amp; Archive: Omotesando</h3>
                <p className="font-body-md text-body-md text-on-primary/70">
                  A tripartite space merging high-horology display cases, custom aluminum vehicle viewing bays, and private client negotiation lounges under a seamless basalt ceiling plane.
                </p>
                <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                  <div className="p-space-sm bg-primary-container border border-white/10">
                    <span className="font-label-mono text-label-mono text-on-primary/60 uppercase">Materials</span>
                    <p className="font-body-sm text-body-sm text-on-primary font-medium mt-1">Brushed raw steel, volcanic basalt, acoustic felt</p>
                  </div>
                  <div className="p-space-sm bg-primary-container border border-white/10">
                    <span className="font-label-mono text-label-mono text-on-primary/60 uppercase">Footprint</span>
                    <p className="font-body-sm text-body-sm text-on-primary font-medium mt-1">840 m² over three subterranean levels</p>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <Link className="inline-flex items-center gap-space-xs font-label-mono text-label-mono uppercase tracking-wider text-on-primary hover:text-on-primary/70" href="/architecture">
                    Inspect Architectural Dossier →
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative w-full h-80 md:h-[420px] bg-primary border border-white/10 overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Luxury Tokyo flagship retail interior architectural design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-qMqH7DA-MVk-b9ipgSfTFWfHqa5iU1kKmSfoQL9jlAuDU07vRSrC0AVJkSTk1hlAv10JrKKCLLulk9T7qXKmEupR-ppvjxUDw1fjBeHtedSIjVDFqh37aKRbknm4wG0TuLk4pgW6rjiYwjnx9C8DkFgpHmqBFR1cDBEpsI8GXh_SKfa1RwbEvb5LHiJfvCTwaJ-5T9JN8qArQnf2pdTjdmua-2VhsWLyARfMxZ6wI47suVrkITc" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 border border-white/10 backdrop-blur font-label-mono text-label-mono text-on-primary uppercase">Tokyo Site Plan // Level -01</div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-space-lg">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-6"
              >
                <div className="relative w-full h-80 md:h-[420px] bg-primary border border-white/10 overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Ultra-high-end enclosed automotive transport container bay interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMmxlZWIm06QEefpeTlEATJNVRw2RT20kfoTu-Fdq-4kNGhChNJ0X8pcSSqpSmO668vhTdugo1LS7gO8Tv7k5-S7mn-sI5wavhM4mhO1A_8bubvOP7sRAFqpXvbxLoTCCEigDJ1imDAPjbZPJLK8x9SIeffY00hQJot4wD7Qsaz4penrFYCa2Wznau5d8Poj7RYcRyOhRE1tWDcqIu96b7y09GpvEX2bFS1GCxgDheMP8IIydbELp9" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 border border-white/10 backdrop-blur font-label-mono text-label-mono text-on-primary uppercase">Pod 07 // Climate Matrix 19°C</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-6 flex flex-col gap-space-md"
              >
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-mono text-label-mono text-on-primary/60">CASE STUDY 092</span>
                  <span className="text-outline">/</span>
                  <span className="font-label-caps text-label-caps text-on-primary/40 uppercase">Customization &amp; Escort</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-primary">Transcontinental Hypercar Relocation &amp; Cabin Refit</h3>
                <p className="font-body-md text-body-md text-on-primary/70">
                  Cross-continental transit between Frankfurt and St. Moritz with a concurrent cabin transformation using hand-finished aniline hides, machined titanium switchgear, and bespoke telemetry enclosures.
                </p>
                <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                  <div className="p-space-sm bg-primary-container border border-white/10">
                    <span className="font-label-mono text-label-mono text-on-primary/60 uppercase">Transit Mode</span>
                    <p className="font-body-sm text-body-sm text-on-primary font-medium mt-1">Air freight &amp; hydraulic air-ride container</p>
                  </div>
                  <div className="p-space-sm bg-primary-container border border-white/10">
                    <span className="font-label-mono text-label-mono text-on-primary/60 uppercase">Interior Tailoring</span>
                    <p className="font-body-sm text-body-sm text-on-primary font-medium mt-1">Carbon-weave matrix, Connolly leather</p>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <Link className="inline-flex items-center gap-space-xs font-label-mono text-label-mono uppercase tracking-wider text-on-primary hover:text-on-primary/70" href="/transport">
                    Review Logistics Protocol →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Studio Manifesto & Metrics Section */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary text-on-primary border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-4 flex flex-col gap-space-xs">
                <span className="font-label-mono text-label-mono text-on-primary/60 tracking-widest uppercase">Atelier Manifesto</span>
                <span className="font-label-caps text-label-caps text-on-primary/40 uppercase">Permanent Form Over Temporal Fashion</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <p className="font-headline-md text-headline-md text-on-primary font-normal leading-snug">
                  Vulcan operates not as an advertising bureau or modular contractor, but as an architectural laboratory. Whether generating an identity system or transport capsule, our thesis remains unaltered: reduction to absolute structural integrity.
                </p>
                <p className="font-body-md text-body-md text-on-primary/70 max-w-2xl">
                  Every millimeter is reconciled through physical prototyping, rigorous typographic rules, and materials that mature rather than deteriorate.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
              <div className="p-space-lg bg-primary-container border border-white/10 flex flex-col gap-space-sm">
                <div className="font-label-mono text-label-mono text-on-primary/60">INDEX // STAT 01</div>
                <div className="font-display-hero text-headline-xl md:text-display-hero text-on-primary font-light">03</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">Dedicated Practices</div>
                <p className="font-body-sm text-body-sm text-on-primary/70">
                  Commercial Architecture, Identity Systems, and Specialized Kinetic Transport fully synchronized under single creative directors.
                </p>
              </div>
              <div className="p-space-lg bg-primary-container border border-white/10 flex flex-col gap-space-sm">
                <div className="font-label-mono text-label-mono text-on-primary/60">INDEX // STAT 02</div>
                <div className="font-display-hero text-headline-xl md:text-display-hero text-on-primary font-light">140+</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">International Deployments</div>
                <p className="font-body-sm text-body-sm text-on-primary/70">
                  Executed projects spans across Switzerland, the United Kingdom, Japan, the UAE, and the Americas with zero jurisdictional compromise.
                </p>
              </div>
              <div className="p-space-lg bg-primary-container border border-white/10 flex flex-col gap-space-sm">
                <div className="font-label-mono text-label-mono text-on-primary/60">INDEX // STAT 03</div>
                <div className="font-display-hero text-headline-xl md:text-display-hero text-on-primary font-light">100%</div>
                <div className="font-headline-sm text-headline-sm text-on-primary">In-House Synthesis</div>
                <p className="font-body-sm text-body-sm text-on-primary/70">
                  Zero third-party white-labeling. Structural calculation, graphic manuals, industrial tooling, and flight clearance crafted internally.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-space-sm pt-space-lg">
              <div className="font-label-caps text-label-caps tracking-widest uppercase text-on-primary/40 pb-2">Specification Folio</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="p-space-md bg-primary-container border border-white/10 flex flex-col gap-space-xs">
                  <span className="font-label-mono text-label-mono text-on-primary/60">01.0 / SPATIAL SPEC</span>
                  <ul className="font-body-sm text-body-sm text-on-primary/80 space-y-1">
                    <li className="">• Flagship Retail Architecture</li>
                    <li className="">• Private Collector Pavilions</li>
                    <li className="">• Structural Renovation &amp; Massing</li>
                    <li className="">• Lighting Engineering &amp; Acoustics</li>
                  </ul>
                </div>
                <div className="p-space-md bg-primary-container border border-white/10 flex flex-col gap-space-xs">
                  <span className="font-label-mono text-label-mono text-on-primary/60">02.0 / IDENTITY SPEC</span>
                  <ul className="font-body-sm text-body-sm text-on-primary/80 space-y-1">
                    <li className="">• Typographic Design &amp; Bespoke Type</li>
                    <li className="">• Brand Systems &amp; Tone Guidelines</li>
                    <li className="">• Packaging &amp; Monograph Publication</li>
                    <li className="">• Digital Flagships &amp; Spatial UX</li>
                  </ul>
                </div>
                <div className="p-space-md bg-primary-container border border-white/10 flex flex-col gap-space-xs">
                  <span className="font-label-mono text-label-mono text-on-primary/60">03.0 / TRANSPORT SPEC</span>
                  <ul className="font-body-sm text-body-sm text-on-primary/80 space-y-1">
                    <li className="">• Climate-Shielded Vehicular Freight</li>
                    <li className="">• Bespoke Cockpit Ergonomics</li>
                    <li className="">• Concierge ATA Carnet Handling</li>
                    <li className="">• Retrofit of Bespoke Prototype Objets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Folio Directory Section */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-widest">Archive 2021 — 2025</span>
                <h2 className="font-headline-lg text-headline-lg text-on-primary">Selected Works &amp; Engagements</h2>
              </div>
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-primary/60">
                <span className="">FILTER:</span>
                <button 
                  className={`px-2 py-1 uppercase text-[10px] ${filter === 'all' ? 'bg-surface-container-lowest text-primary font-semibold' : 'bg-primary-container text-on-primary hover:bg-white/20 border border-white/10'}`} 
                  onClick={() => setFilter('all')}>
                  All [05]
                </button>
                <button 
                  className={`px-2 py-1 uppercase text-[10px] ${filter === 'arch' ? 'bg-surface-container-lowest text-primary font-semibold' : 'bg-primary-container text-on-primary hover:bg-white/20 border border-white/10'}`} 
                  onClick={() => setFilter('arch')}>
                  Arch
                </button>
                <button 
                  className={`px-2 py-1 uppercase text-[10px] ${filter === 'brand' ? 'bg-surface-container-lowest text-primary font-semibold' : 'bg-primary-container text-on-primary hover:bg-white/20 border border-white/10'}`} 
                  onClick={() => setFilter('brand')}>
                  Brand
                </button>
                <button 
                  className={`px-2 py-1 uppercase text-[10px] ${filter === 'trans' ? 'bg-surface-container-lowest text-primary font-semibold' : 'bg-primary-container text-on-primary hover:bg-white/20 border border-white/10'}`} 
                  onClick={() => setFilter('trans')}>
                  Trans
                </button>
              </div>
            </div>
            
            <div className="flex flex-col divide-y-0 gap-2">
              {(filter === 'all' || filter === 'arch') && (
                <div className="archive-row group p-space-md bg-primary-container border border-white/10 hover:bg-white/10 flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all">
                  <div className="flex items-center gap-space-md">
                    <span className="font-label-mono text-label-mono text-on-primary/50">01</span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-primary group-hover:text-on-primary/80">Engadin Valley Alpine Pavillon</span>
                      <p className="font-body-sm text-body-sm text-on-primary/70">Monolithic concrete residence &amp; private vehicle chamber</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-lg justify-between md:justify-end">
                    <span className="font-label-mono text-label-mono text-on-primary/60">St. Moritz, CH</span>
                    <span className="font-label-caps text-label-caps px-space-sm py-space-xs bg-white/10 text-on-primary border border-white/10">Architecture</span>
                    <span className="font-label-mono text-label-mono text-on-primary font-semibold">2024</span>
                  </div>
                </div>
              )}

              {(filter === 'all' || filter === 'brand') && (
                <div className="archive-row group p-space-md bg-primary-container border border-white/10 hover:bg-white/10 flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all">
                  <div className="flex items-center gap-space-md">
                    <span className="font-label-mono text-label-mono text-on-primary/50">02</span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-primary group-hover:text-on-primary/80">Aethelstan Horology Identity Matrix</span>
                      <p className="font-body-sm text-body-sm text-on-primary/70">Swiss bespoke watchmaker brand codex, typography, and unboxing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-lg justify-between md:justify-end">
                    <span className="font-label-mono text-label-mono text-on-primary/60">Geneva, CH</span>
                    <span className="font-label-caps text-label-caps px-space-sm py-space-xs bg-white/10 text-on-primary border border-white/10">Branding</span>
                    <span className="font-label-mono text-label-mono text-on-primary font-semibold">2024</span>
                  </div>
                </div>
              )}

              {(filter === 'all' || filter === 'trans') && (
                <div className="archive-row group p-space-md bg-primary-container border border-white/10 hover:bg-white/10 flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all">
                  <div className="flex items-center gap-space-md">
                    <span className="font-label-mono text-label-mono text-on-primary/50">03</span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-primary group-hover:text-on-primary/80">Concourse Escort System X-09</span>
                      <p className="font-body-sm text-body-sm text-on-primary/70">Secure air-tight transfer for six historic Le Mans prototypes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-lg justify-between md:justify-end">
                    <span className="font-label-mono text-label-mono text-on-primary/60">London / Tokyo</span>
                    <span className="font-label-caps text-label-caps px-space-sm py-space-xs bg-white/10 text-on-primary border border-white/10">Vehicle Logistics</span>
                    <span className="font-label-mono text-label-mono text-on-primary font-semibold">2023</span>
                  </div>
                </div>
              )}

              {(filter === 'all' || filter === 'arch') && (
                <div className="archive-row group p-space-md bg-primary-container border border-white/10 hover:bg-white/10 flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all">
                  <div className="flex items-center gap-space-md">
                    <span className="font-label-mono text-label-mono text-on-primary/50">04</span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-primary group-hover:text-on-primary/80">Kurogane Atelier &amp; Prototype Bay</span>
                      <p className="font-body-sm text-body-sm text-on-primary/70">Commercial retail and automotive customization laboratory</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-lg justify-between md:justify-end">
                    <span className="font-label-mono text-label-mono text-on-primary/60">Kyoto, JP</span>
                    <span className="font-label-caps text-label-caps px-space-sm py-space-xs bg-white/10 text-on-primary border border-white/10">Architecture</span>
                    <span className="font-label-mono text-label-mono text-on-primary font-semibold">2023</span>
                  </div>
                </div>
              )}

              {(filter === 'all' || filter === 'brand') && (
                <div className="archive-row group p-space-md bg-primary-container border border-white/10 hover:bg-white/10 flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all">
                  <div className="flex items-center gap-space-md">
                    <span className="font-label-mono text-label-mono text-on-primary/50">05</span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-primary group-hover:text-on-primary/80">Volcanic Monogram &amp; Kinetic Mark Refinement</span>
                      <p className="font-body-sm text-body-sm text-on-primary/70">Global corporate visual architecture and spatial signage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-lg justify-between md:justify-end">
                    <span className="font-label-mono text-label-mono text-on-primary/60">Zürich, CH</span>
                    <span className="font-label-caps text-label-caps px-space-sm py-space-xs bg-white/10 text-on-primary border border-white/10">Branding</span>
                    <span className="font-label-mono text-label-mono text-on-primary font-semibold">2022</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Engagement / Inquiry CTA Banner */}
        <section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary">
          <div className="max-w-7xl mx-auto p-space-lg md:p-space-xl bg-primary-container border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-xl">
              <span className="font-label-caps text-label-caps text-on-primary/60 uppercase tracking-widest">Commence Engagement</span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary">Initiate a Spatial or Brand Commission</h2>
              <p className="font-body-md text-body-md text-on-primary/70">
                We welcome confidential briefs for retail developments, comprehensive identity programs, or transcontinental vehicle projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
              <Link className="w-full sm:w-auto text-center px-space-lg py-space-md bg-surface-container-lowest text-primary font-label-mono text-label-mono uppercase tracking-widest hover:bg-surface-container-highest transition-all font-medium" href="#">
                Inquire Direct →
              </Link>
              <Link className="w-full sm:w-auto text-center px-space-lg py-space-md bg-primary-container border border-white/20 text-on-primary font-label-mono text-label-mono uppercase tracking-widest hover:bg-white/10 transition-all" href="mailto:contact@vulint.com">
                contact@vulint.com
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
