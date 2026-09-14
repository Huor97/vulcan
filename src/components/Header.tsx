"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "font-label-caps text-label-caps tracking-wider transition-colors uppercase text-on-primary font-medium underline underline-offset-8 decoration-1 decoration-on-primary"
      : "font-label-caps text-label-caps tracking-wider text-on-primary/60 hover:text-on-primary transition-colors uppercase";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "font-headline-md text-headline-md tracking-wider transition-colors uppercase text-white font-medium underline underline-offset-8 decoration-1 decoration-white"
      : "font-headline-md text-headline-md tracking-wider text-white/60 hover:text-white transition-colors uppercase";
  };

  let logoSrc = "/vulcan_Logo Design braindig.jpeg";
  if (pathname?.startsWith("/architecture")) {
    logoSrc = "/vulcan_Logo Architectural Designs.jpeg";
  } else if (pathname?.startsWith("/transport")) {
    logoSrc = "/vulcan_Logo International Vehicle Transport.jpeg";
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <div className="h-20 w-full px-margin-mobile md:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="flex items-center">
            <Image
              alt="vulcan_Logo"
              className="h-10 w-auto object-contain"
              src={logoSrc}
              width={120}
              height={40}
              unoptimized
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-lg">
          <Link className={getLinkClass("/")} href="/">Overview</Link>
          <Link className={getLinkClass("/architecture")} href="/architecture">Architectural Designs</Link>
          <Link className={getLinkClass("/branding")} href="/branding">Branding & Identity</Link>
          <Link className={getLinkClass("/transport")} href="/transport">Vehicle Transport</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-on-primary/80 hover:text-on-primary transition-colors focus:outline-none z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-10">
          <button 
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/")} href="/">Overview</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/architecture")} href="/architecture">Architectural Designs</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/branding")} href="/branding">Branding & Identity</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/transport")} href="/transport">Vehicle Transport</Link>
        </div>
      )}
    </>
  );
}
