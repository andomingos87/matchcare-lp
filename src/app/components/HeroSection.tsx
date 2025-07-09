"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-[var(--primary)] h-screen" id="hero">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left content - Text and CTA */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <span className="inline-block bg-[#F9D923]/90 text-[#4A90E2] font-semibold rounded-full px-4 py-1 text-sm mb-2 shadow">Made by caregivers, for caregivers</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-2 text-white">
            Care for those you love,<br className="hidden md:inline" />
            <span className="text-[#F9D923]"> with the ones you trust.</span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium mb-2 text-white max-w-xl">
            MatchCare connects families and nannies based on shared values, trust, and real compatibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a href="#sign-up-form" className="inline-block bg-[#F9D923] text-[#4A90E2] font-bold rounded-full px-8 py-3 shadow-lg hover:bg-yellow-400 transition text-lg focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-[#F9D923]">
              Join the MatchCare Waitlist
            </a>
          </div>
        </div>
        {/* Right content - Improved image presentation */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
          <motion.div
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="relative rounded-3xl bg-white/60 shadow-2xl p-3 md:p-6 flex items-center justify-center border border-[#B39DDB]/30 backdrop-blur-xl overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(74,144,226,0.10), 0 1.5px 8px 0 rgba(179,157,219,0.10)' }}
          >
            {/* Gradient overlay for glassmorphism */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(74,144,226,0.07) 0%, rgba(249,217,35,0.09) 100%)' }} />
            {/* Decorative inner border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#F9D923]/20 pointer-events-none" />
            <Image
              src="/hero-nanny-family.jpg"
              alt="Nanny playing with child while parent looks on"
              width={400}
              height={400}
              className="rounded-2xl object-cover max-w-xs md:max-w-md shadow-lg z-10 transition-transform duration-500"
              priority
            />
            {/* Decorative circles */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#F9D923]/60 blur-2xl hidden md:block"
            />
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.10 }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
              className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-[#4A90E2]/40 blur-2xl hidden md:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
