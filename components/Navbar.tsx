"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-xl font-bold tracking-tight text-white">
            OSCAR{" "}
            <span className="text-[#2563EB]">
              KOÏ
            </span>
          </div>

          <div className="mt-0.5 text-[9px] tracking-[0.35em] text-slate-400">
            DATA · WEB · DIGITAL
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="relative text-sm font-medium text-white transition-colors"
          >
            Accueil
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#2563EB]" />
          </Link>

          <Link
            href="/a-propos"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            À propos
          </Link>

          <Link
            href="/competences"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Compétences
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]"
        >
          Me contacter
          <span className="ml-2">→</span>
        </Link>

      </div>
    </header>
  );
}