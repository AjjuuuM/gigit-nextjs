"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Gigit logo"
            width={48}
            height={48}
            className="h-12 w-auto rounded-full bg-white/10 p-1"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10 text-[16px] font-medium text-white">
          <Link href="/services" className="transition duration-300 hover:text-[#FF7A00]">
            Services
          </Link>
          <Link href="/how-it-works" className="transition duration-300 hover:text-[#FF7A00]">
            Who we are
          </Link>
          <Link href="/#become-hero" className="transition duration-300 hover:text-[#FF7A00]">
            Become a Hero
          </Link>
        </div>

        {/* Right side: TH/EN + hamburger */}
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-soft hover:bg-[#ff7f2e] transition">
            TH / EN
          </button>
          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-[#191BDF] border-t border-white/20 py-4 px-4 flex flex-col gap-4 text-[16px] font-medium text-white shadow-lg">
          <Link href="/services" className="hover:text-[#FF7A00] transition" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/how-it-works" className="hover:text-[#FF7A00] transition" onClick={() => setMenuOpen(false)}>
            Who we are
          </Link>
          <Link href="/#become-hero" className="hover:text-[#FF7A00] transition" onClick={() => setMenuOpen(false)}>
            Become a Hero
          </Link>
        </div>
      )}
    </nav>
  );
}
