"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[var(--primary)]/80 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="sr-only">MatchCare</span>
          <Image
            src="/logo-white.png"
            alt="MatchCare Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>
        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-white font-medium text-base">
          <li><a href="#hero" className="hover:text-[var(--gold)] transition">Início</a></li>
          <li><a href="#about" className="hover:text-[var(--gold)] transition">Sobre</a></li>
          <li><a href="#benefits" className="hover:text-[var(--gold)] transition">Benefícios</a></li>
          <li><a href="#contact" className="hover:text-[var(--gold)] transition">Contato</a></li>
        </ul>
        {/* CTA Button */}
        <a href="#sign-up-form" className="ml-4 inline-block bg-[var(--gold)] text-[var(--primary)] rounded-full px-6 py-2 shadow hover:bg-yellow-400 transition text-base focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]">
          Entrar na Lista
        </a>
      </nav>
    </header>
  );
}
