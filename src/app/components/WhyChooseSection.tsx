export default function WhyChooseSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-14 md:py-20" id="why-choose">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why families and nannies choose MatchCare?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B39DDB] text-white text-2xl">🔒</span>
          <div>
            <h3 className="font-semibold text-lg">Safety you can trust</h3>
            <p className="text-base text-gray-700">Verified profiles, ID checks, and features designed to protect everyone involved.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9D923] text-[#4A90E2] text-2xl">🎯</span>
          <div>
            <h3 className="font-semibold text-lg">Matches that truly fit</h3>
            <p className="text-base text-gray-700">We go beyond availability — we match based on values, parenting style, and connection.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A90E2] text-white text-2xl">📱</span>
          <div>
            <h3 className="font-semibold text-lg">Simple, intuitive app</h3>
            <p className="text-base text-gray-700">No clutter, no confusion. Just a clean, easy-to-use tool made for your daily life.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B39DDB] text-white text-2xl">🤝</span>
          <div>
            <h3 className="font-semibold text-lg">A real support network</h3>
            <p className="text-base text-gray-700">We don’t stop at the match. We offer content, guidance, and community to care for those who care.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 col-span-full sm:col-span-2">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9D923] text-[#4A90E2] text-2xl">🧡</span>
          <div>
            <h3 className="font-semibold text-lg">Built by caregivers</h3>
            <p className="text-base text-gray-700">Created by moms and childcare professionals who know exactly what it takes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
