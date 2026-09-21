import Link from "next/link";

export default function BrandingPage() {
  return (
    <main className="w-full pt-20 bg-primary min-h-screen">
      <Link href="/" className="fixed top-6 left-6 md:top-10 md:left-10 z-50 px-4 py-2 bg-white text-black font-label-mono text-label-mono uppercase tracking-wider hover:bg-[#eeeeed] transition-colors shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
        ← Retour
      </Link>
      <div className="flex flex-col w-full">
<div className="w-full px-margin-mobile md:px-margin pt-space-xl pb-space-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 bg-on-primary"></span>
<span className="font-label-mono text-label-mono text-outline uppercase tracking-widest">PRACTICE 02 // BRAND SYSTEMS</span>
<span className="font-label-mono text-label-mono text-outline">/</span>
<span className="font-label-mono text-label-mono text-on-primary uppercase">ZÜRICH STUDIO</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<h1 className="font-display-hero text-display-hero text-on-primary tracking-tight lowercase">
          strategy <span className="font-display-hero text-outline font-light">•</span> identity <span className="font-display-hero text-outline font-light">•</span> design
        </h1>
<p className="font-body-lg text-body-lg text-outline max-w-2xl pt-space-xs">
          A strategic methodology synthesizing semiotics, modern typography, and comprehensive corporate design systems engineered for permanence across digital, spatial, and tactile mediums.
        </p>
</div>
<div className="lg:col-span-4 flex lg:flex-col justify-between items-start lg:items-end gap-space-sm pb-1">
<div className="flex flex-col lg:items-end">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">System Protocol</span>
<span className="font-label-mono text-label-mono text-on-primary uppercase">ISO 128-2023 // DIN-SPEC 91</span>
</div>
<a className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface text-primary font-label-mono text-label-mono uppercase tracking-wider hover:bg-surface-container-highest transition-colors" href="#consultation">
          Initiate Brief →
        </a>
</div>
</div>
</div>
<div className="w-full px-margin-mobile md:px-margin py-space-md bg-primary-container">
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter font-label-mono text-label-mono text-outline uppercase tracking-wider">
<div className="flex flex-col gap-space-xs">
<span className="text-outline">01 / DISCIPLINE</span>
<span className="text-on-primary font-semibold">Structural Monograms</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="text-outline">02 / TYPOGRAPHY</span>
<span className="text-on-primary font-semibold">Custom Matrix Fonts</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="text-outline">03 / SUBSTRATES</span>
<span className="text-on-primary font-semibold">Tactile Monograph Specs</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="text-outline">04 / CODEC</span>
<span className="text-on-primary font-semibold">Kinetic Token Systems</span>
</div>
</div>
</div>
<section className="w-full px-margin-mobile md:px-margin py-space-xl flex flex-col gap-space-xl">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-sm">
<div className="flex items-baseline gap-space-sm">
<span className="font-label-mono text-label-mono text-outline">FOLIO 01</span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">Monograph Archive &amp; Marks</h2>
</div>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Selective Identity Index [4 Works]</span>
</div>
<div className="w-full bg-primary-container text-on-primary p-space-lg md:p-space-xl flex flex-col gap-space-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 bg-surface text-primary font-label-caps text-label-caps uppercase">FLAGSHIP IDENTITY</span>
<span className="font-label-mono text-label-mono text-outline tracking-wider">SPEC_001.VUL</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Internal Monograph</span>
<h3 className="font-headline-xl text-headline-xl text-surface tracking-tight">Vulcan Symbol Archive</h3>
</div>
<p className="font-body-md text-body-md text-primary-fixed-dim">
            The mathematical derivation of the faceted triangular 'V' emblem. Built upon optical vector grids, strict 30° angled bevel cuts, golden ratio balance, and absolute monochrome polarity. Engineered to survive 1:1 scale on heavy machinery and 8px digital viewports with equal architectural permanence.
          </p>
<div className="grid grid-cols-3 gap-space-sm pt-space-xs font-label-mono text-label-mono text-primary-fixed-dim">
<div className="flex flex-col bg-inverse-surface p-space-sm">
<span className="text-outline">CUT ANGLE</span>
<span className="text-surface font-medium">30.00° EXACT</span>
</div>
<div className="flex flex-col bg-inverse-surface p-space-sm">
<span className="text-outline">ASPECT RATIO</span>
<span className="text-surface font-medium">1:1 EQUILATERAL</span>
</div>
<div className="flex flex-col bg-inverse-surface p-space-sm">
<span className="text-outline">CONTRAST</span>
<span className="text-surface font-medium">100% K MATRIX</span>
</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col items-center justify-center p-space-md bg-inverse-surface">
<div className="relative w-full max-w-md aspect-square flex items-center justify-center p-space-lg">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
<div className="bg-surface/10 m-0.5"></div>
</div>
<img alt="Vulcan Faceted Geometric Symbol Specimen" className="relative z-10 w-full h-full object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlO8-dM_ZAf_Bj_VvTggst16LUlO0jqwNVUmlxVbSjGtdMrnPwjvd175cI-mG6T9StPFEWP7buIKWvNoKYSp_-Kc2-qurX-rGNyQlUGDsjwSEqrjJ6pQsu-djM7AYfzdETLq1yZSRtmbfs0LYhJ9oGT4RCvo88AmBnCG12NDge86MBfe-0nJJiUtgmQ3L69bjStHqtIK2eIT-tn88fGpRGt8KLIiFzWprKWchLf4hVu1ZpR2-o--4MOcoGyAlKytABRQ"/>
<div className="absolute bottom-2 right-2 font-label-mono text-label-mono text-primary-fixed-dim/60 uppercase">
              X: 1440 Y: 1440 DP
            </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
<div className="flex flex-col gap-space-xs bg-inverse-surface p-space-md">
<span className="font-label-mono text-label-mono text-surface font-medium tracking-wider">GEOMETRIC PROPORTION</span>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
            Root-3 triangles combined with asymmetrical negative internal volume create rapid recognition under peripheral human gaze.
          </p>
</div>
<div className="flex flex-col gap-space-xs bg-inverse-surface p-space-md">
<span className="font-label-mono text-label-mono text-surface font-medium tracking-wider">OPTICAL COMPENSATION</span>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
            The central transverse beam is weighted +2.4% relative to diagonal ascenders to counteract gravitational visual sag.
          </p>
</div>
<div className="flex flex-col gap-space-xs bg-inverse-surface p-space-md">
<span className="font-label-mono text-label-mono text-surface font-medium tracking-wider">MONOCHROME POLARITY</span>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
            No tonal gradients. Pure binary polarity ensures zero fidelity loss across micro-etching, steel stampings, and fiber screens.
          </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="group flex flex-col bg-primary-container p-space-md hover:bg-inverse-surface transition-colors">
<div className="aspect-[4/3] w-full overflow-hidden bg-inverse-surface relative">
<img className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" data-alt="Minimalist high finance corporate stationery folio mockup for Aetherium Capital, heavy blind deboss on thick cotton ivory paper, black foiled custom serif wordmark, architectural precision, dramatic angled studio raking light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbtdJBLCFHZ6NB4jiaxCIQjfebgVptzmdntAODoEmMCUzuiroxBv-rQ5PUfMeOl_tlgZf94wzKKchQ1paWHuQQ74DseVrWfji88KenxCBStCv1LSUcRSC3xXR3j_4Xw5U3OSehh3te_R7dEHy_ie1eMLaxr3gXM4wCklqaZdSVAY8joaoc-y1SHvJlbVqYuQB73g60dfogFsYrtOYontNov4U8WIOFSfAXLuPwwHljACIJvwV5m_vm"/>
<div className="absolute top-space-xs left-space-xs bg-primary/90 px-space-xs py-0.5">
<span className="font-label-caps text-label-caps uppercase text-on-primary">FOLIO 02</span>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-md">
<span className="font-label-mono text-label-mono text-outline uppercase">Geneva • Institutional Finance</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Aetherium Capital</h3>
<p className="font-body-sm text-body-sm text-primary-fixed-dim pt-1">
            High-finance typographic identity system including blind deboss stationery systems, custom modified serif wordmark, and security-grade certificate layouts.
          </p>
<div className="flex flex-wrap gap-space-xs pt-space-sm">
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Blind Deboss</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Serif Mark</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Cotton 600gsm</span>
</div>
</div>
</div>
<div className="group flex flex-col bg-primary-container p-space-md hover:bg-inverse-surface transition-colors">
<div className="aspect-[4/3] w-full overflow-hidden bg-inverse-surface relative">
<img className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" data-alt="Technical Swiss horological brand identity packaging for Kronos Chronometry, matte slate black packaging box with micro-typography, engraved brushed aluminum plate, blueprint caliber drawings, hyper detailed luxury watchmaker branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8vNhWrHamsaU4XaX_D8pLYSbP8vnxlEWYaf06_XPL6omDGa4Sejql5qsCA_QSziDap65S-HZt8dgQ4MDYWS7kKVglYPz002YXtP7X8Mq_rjm6v7fAD8tyqr6USQL1ebkJeMjEWOZCplvQ6CGQz-DSz_l75NsiREe0QRZ8lObeEGcxN-bC4keA0HjmJH3GaCig3Ib8SBbjGeqlFyNhQkSPgFRVy4jhMWKVDqOzx93430N__cQqbqY6"/>
<div className="absolute top-space-xs left-space-xs bg-primary/90 px-space-xs py-0.5">
<span className="font-label-caps text-label-caps uppercase text-on-primary">FOLIO 03</span>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-md">
<span className="font-label-mono text-label-mono text-outline uppercase">La Chaux-de-Fonds • Horology</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Kronos Chronometry</h3>
<p className="font-body-sm text-body-sm text-primary-fixed-dim pt-1">
            Swiss horological brand identity with technical micro-typography, matte anodized chronometer packaging architecture, and caliper-measured certificate folios.
          </p>
<div className="flex flex-wrap gap-space-xs pt-space-sm">
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Micro-Type</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Anodized Slate</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Caliber Codec</span>
</div>
</div>
</div>
<div className="group flex flex-col bg-primary-container p-space-md hover:bg-inverse-surface transition-colors">
<div className="aspect-[4/3] w-full overflow-hidden bg-inverse-surface relative">
<img className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" data-alt="Futuristic autonomous transport vehicle brand identity for Solari Autonomous Mobility, minimalist aerodynamic logo illuminated on vehicle chassis, matte titanium textures, kinetic digital user interface dashboard display." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxcRSJRxFoWb8gvRNgDzwRxH1PkWeJgxOIVUeO6UzGYtIDPoo0wJoa8xRK4yLhAUaGDo-pAvYa75YkkxfrKWRde_lE2adeDES9U615k6MNqIfb7a1DdvnGLcUYQtbh9MK-EmAjg6RndsWtKO6NFPfBuBisVxmkH7T8vErJ9LTaAaTkhNWa6vS-C649atqwITSRKh_cD80q4yEifiY1tBE610PX-juPWpo_eo5N9z1pyQus7YR8Q1cP"/>
<div className="absolute top-space-xs left-space-xs bg-primary/90 px-space-xs py-0.5">
<span className="font-label-caps text-label-caps uppercase text-on-primary">FOLIO 04</span>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-md">
<span className="font-label-mono text-label-mono text-outline uppercase">Stuttgart • Next-Gen Mobility</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Solari Autonomous Mobility</h3>
<p className="font-body-sm text-body-sm text-primary-fixed-dim pt-1">
            Dynamic identity suite for heavy autonomous haulage and passenger pods, delivering kinetic UI design tokens, physical laser-cut badging, and exterior fleet decals.
          </p>
<div className="flex flex-wrap gap-space-xs pt-space-sm">
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Kinetic Tokens</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">Fleet Identity</span>
<span className="px-space-xs py-0.5 bg-inverse-surface font-label-mono text-label-mono text-outline uppercase">HUD Protocol</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-mono text-label-mono text-outline uppercase">ARCHITECTURE // SPECIFICATION</span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">Brand System Components Breakdown</h2>
<p className="font-body-md text-body-md text-outline max-w-xl">
        Every brand ecosystem generated by Vulcan is an interconnected operational engine comprising typography, materials science, and unified rulebooks.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-6 flex flex-col gap-space-md bg-primary-container p-space-lg">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">Component 01 • Type Specimen</span>
<span className="font-label-mono text-label-mono text-outline">MATRIX_3.2</span>
</div>
<div className="flex flex-col gap-space-md bg-inverse-surface p-space-md">
<div className="flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-outline">DISPLAY 72PX / 1.05 LH</span>
<span className="font-display-hero text-headline-lg text-on-primary font-medium leading-none tracking-tight">VULCAN MONO</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-outline">EDITORIAL 24PX / 1.25 LH</span>
<span className="font-headline-md text-headline-md text-on-primary font-normal">Rigorous architectural typography with pure vertical stems.</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-outline">TECHNICAL TELEMETRY 11PX / 1.45 LH / MONOSPACE</span>
<span className="font-label-mono text-label-mono text-outline">LOC: 47.3769° N, 8.5417° E // SYSTEM_STATUS: NOMINAL // BUILD: V25.1</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm font-label-mono text-label-mono text-outline">
<div className="flex flex-col gap-1 bg-inverse-surface p-space-sm">
<span className="text-on-primary font-semibold">Optical Kerning Pairs</span>
<span>Hand-adjusted for all capital combinations (VA, AV, TA, WA).</span>
</div>
<div className="flex flex-col gap-1 bg-inverse-surface p-space-sm">
<span className="text-on-primary font-semibold">Variable Axis Weight</span>
<span>Fine-grained interpolation from 300 Light to 750 Semi-Bold.</span>
</div>
</div>
</div>
<div className="lg:col-span-6 flex flex-col gap-space-md bg-primary-container p-space-lg">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">Component 02 • Materials &amp; Palette</span>
<span className="font-label-mono text-label-mono text-outline">PIGMENT_LAB</span>
</div>
<div className="grid grid-cols-3 gap-space-xs">
<div className="flex flex-col bg-inverse-surface p-space-sm aspect-square justify-between">
<span className="font-label-caps text-label-caps text-on-primary">CARBON 100</span>
<div className="w-full h-8 bg-primary"></div>
<span className="font-label-mono text-label-mono text-outline">PANTONE BLACK 6 C</span>
</div>
<div className="flex flex-col bg-inverse-surface p-space-sm aspect-square justify-between">
<span className="font-label-caps text-label-caps text-on-primary">TITANIUM DUSK</span>
<div className="w-full h-8 bg-surface-container-highest"></div>
<span className="font-label-mono text-label-mono text-outline">NEUTRAL 900 C</span>
</div>
<div className="flex flex-col bg-inverse-surface p-space-sm aspect-square justify-between">
<span className="font-label-caps text-label-caps text-on-primary">TERRESTRIAL CHALK</span>
<div className="w-full h-8 bg-surface-container-lowest"></div>
<span className="font-label-mono text-label-mono text-outline">UNCOATED WHITE</span>
</div>
</div>
<div className="flex flex-col gap-space-xs bg-inverse-surface p-space-md">
<span className="font-label-mono text-label-mono text-on-primary font-semibold uppercase">Physical Finish Standards</span>
<ul className="font-body-sm text-body-sm text-outline flex flex-col gap-space-xs pt-1">
<li className="flex items-center justify-between">
<span>Stationery Foil Stamping</span>
<span className="font-label-mono text-label-mono text-on-primary">Micro-etched brass dye (0.15mm relief)</span>
</li>
<li className="flex items-center justify-between">
<span>Hardware Substrates</span>
<span className="font-label-mono text-label-mono text-on-primary">Hard-anodized 6061 aluminium / bead blasted</span>
</li>
<li className="flex items-center justify-between">
<span>Paper Stocks</span>
<span className="font-label-mono text-label-mono text-on-primary">G.F Smith Colorplan 350gsm + Fedrigoni Sirio</span>
</li>
</ul>
</div>
</div>
</div>
<div className="w-full bg-primary-container p-space-lg flex flex-col md:flex-row gap-space-lg items-center justify-between">
<div className="flex flex-col gap-space-xs max-w-xl">
<span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest">Component 03 • Guidelines Manual</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">240-Page Comprehensive Delivery Monograph</h3>
<p className="font-body-sm text-body-sm text-outline">
          Complete with clearspace calculations, digital token exports (CSS variables, Figma tokens, iOS structs), and architectural signage schematics.
        </p>
</div>
<div className="flex items-center gap-space-md w-full md:w-auto">
<div className="flex flex-col font-label-mono text-label-mono text-outline">
<span className="text-on-primary font-semibold">EXPORT FORMATS</span>
<span>PDF, FIG, TOKENS.JSON, SVG</span>
</div>
<div className="h-10 w-px bg-inverse-surface hidden md:block"></div>
<button className="px-space-md py-space-sm bg-surface text-primary font-label-mono text-label-mono uppercase hover:bg-surface-container-highest transition-colors" type="button">
          Inspect Guideline Index
        </button>
</div>
</div>
</section>
<section className="w-full px-margin-mobile md:px-margin py-space-xl flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-mono text-label-mono text-outline uppercase">ENGAGEMENT PROTOCOL</span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">System Deployment Phases</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="flex flex-col p-space-md bg-primary-container gap-space-sm">
<span className="font-label-mono text-label-mono text-outline">PHASE // 01</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Semiotic Audit</h3>
<p className="font-body-sm text-body-sm text-outline">
          Deep structural analysis of market landscape, legacy semiotics, geometric positioning, and perceptual white space.
        </p>
<span className="font-label-caps text-label-caps text-surface uppercase pt-space-xs">WEEKS 01—03</span>
</div>
<div className="flex flex-col p-space-md bg-primary-container gap-space-sm">
<span className="font-label-mono text-label-mono text-outline">PHASE // 02</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Vector Geometry</h3>
<p className="font-body-sm text-body-sm text-outline">
          Construction of the core symbol mark, typographic hierarchy, optical balances, and structural negative space systems.
        </p>
<span className="font-label-caps text-label-caps text-surface uppercase pt-space-xs">WEEKS 04—07</span>
</div>
<div className="flex flex-col p-space-md bg-primary-container gap-space-sm">
<span className="font-label-mono text-label-mono text-outline">PHASE // 03</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Tactile &amp; Digital Collateral</h3>
<p className="font-body-sm text-body-sm text-outline">
          Application across stationery, high-precision industrial hardware plates, spatial wayfinding, and responsive code tokens.
        </p>
<span className="font-label-caps text-label-caps text-surface uppercase pt-space-xs">WEEKS 08—11</span>
</div>
<div className="flex flex-col p-space-md bg-primary-container gap-space-sm">
<span className="font-label-mono text-label-mono text-outline">PHASE // 04</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Monograph Delivery</h3>
<p className="font-body-sm text-body-sm text-outline">
          Full hardcover brand book production, digital asset repository handoff, global copyright registration assistance.
        </p>
<span className="font-label-caps text-label-caps text-surface uppercase pt-space-xs">WEEK 12</span>
</div>
</div>
</section>
<section className="w-full px-margin-mobile md:px-margin py-space-xl bg-primary-container" id="consultation">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-mono text-label-mono text-outline uppercase">COMMISSION INQUIRY</span>
<h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight">Initiate brand strategy consultation</h2>
</div>
<p className="font-body-md text-body-md text-outline">
          We accept a maximum of four comprehensive brand system engagements annually. Our Zurich and London design directorships oversee all semiotic research and vector executions personally.
        </p>
<div className="flex flex-col gap-space-xs pt-space-md font-label-mono text-label-mono text-outline">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 bg-surface"></span>
<span>NEXT ENGAGEMENT WINDOW: Q3 2025</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 bg-surface"></span>
<span>MINIMUM COMMITMENT: 10 WEEKS</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 bg-surface"></span>
<span>DIRECTOR DESK: ZURICH • STRASSE 14</span>
</div>
</div>
</div>
<div className="lg:col-span-7 bg-primary p-space-lg flex flex-col gap-space-md">
<form className="flex flex-col gap-space-md" >
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase">Principal Contact</label>
<input className="w-full px-space-sm py-space-sm bg-inverse-surface font-body-sm text-body-sm text-on-primary focus:outline-none focus:bg-primary-container" placeholder="Full Name"  type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase">Corporate Entity</label>
<input className="w-full px-space-sm py-space-sm bg-inverse-surface font-body-sm text-body-sm text-on-primary focus:outline-none focus:bg-primary-container" placeholder="Company / Studio"  type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase">Direct Email</label>
<input className="w-full px-space-sm py-space-sm bg-inverse-surface font-body-sm text-body-sm text-on-primary focus:outline-none focus:bg-primary-container" placeholder="name@domain.com"  type="email"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase">Scope of System</label>
<select className="w-full px-space-sm py-space-sm bg-inverse-surface font-body-sm text-body-sm text-on-primary focus:outline-none focus:bg-primary-container">
<option>New Corporate Identity &amp; Monogram</option>
<option>Complete Rebrand &amp; System Restructure</option>
<option>Custom Typeface &amp; Spatial Signage</option>
<option>Physical Packaging &amp; Substrate Program</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-caps text-label-caps text-outline uppercase">Strategic Context &amp; Objectives</label>
<textarea className="w-full px-space-sm py-space-sm bg-inverse-surface font-body-sm text-body-sm text-on-primary focus:outline-none focus:bg-primary-container" placeholder="Briefly outline brand lineage, market sector, timeline expectations, and core challenges..." rows={4}></textarea>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-xs">
<span className="font-label-mono text-label-mono text-outline">CONFIDENTIAL TRANSMISSION // NDA ENFORCED</span>
<button className="px-space-lg py-space-sm bg-surface text-primary font-label-mono text-label-mono uppercase tracking-wider hover:bg-surface-container-highest transition-colors" type="submit">
              Submit Strategic Brief →
            </button>
</div>
<div className="hidden p-space-sm bg-inverse-surface font-label-mono text-label-mono text-on-primary uppercase tracking-wider" id="form-confirm">
            ✓ Inquiry lodged. Studio directorship will respond within 48 standard business hours.
          </div>
</form>
</div>
</div>
</section>
</div></main>
  );
}