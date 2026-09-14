import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-white/10 mt-space-xl">
      <div className="w-full px-margin-mobile md:px-margin py-space-xl flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps tracking-widest text-on-primary uppercase">Vulcan International • Studio</span>
            <p className="font-body-sm text-body-sm text-on-primary/70 max-w-sm">
              Spatial monographs, architectural folio systems, and industrial transport design conceived with geometric permanence.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps tracking-widest text-on-primary uppercase">Presence</span>
            <p className="font-label-mono text-label-mono text-on-primary/70 tracking-wider uppercase">Zürich • London • Tokyo</p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-space-xs md:items-end">
            <span className="font-label-caps text-label-caps tracking-widest text-on-primary uppercase">Network</span>
            <Link className="font-label-mono text-label-mono text-on-primary/70 hover:text-on-primary transition-colors lowercase" href="mailto:contact@vulint.com">contact@vulint.com</Link>
            <span className="font-label-mono text-label-mono text-on-primary/70">+41 44 215 88 00</span>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-space-sm border-t border-white/10">
          <div className="font-label-mono text-label-mono text-on-primary/60">© 2025 Vulcan International. All rights reserved.</div>
          <div className="flex items-center gap-space-md">
            <Link className="font-label-mono text-label-mono text-on-primary/60 hover:text-on-primary transition-colors uppercase" href="#">Privacy</Link>
            <Link className="font-label-mono text-label-mono text-on-primary/60 hover:text-on-primary transition-colors uppercase" href="#">Terms</Link>
            <Link className="font-label-mono text-label-mono text-on-primary/60 hover:text-on-primary transition-colors uppercase" href="#">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
