export default function GettingStartedSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-14 md:py-20" id="getting-started">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Getting Started is Simple</h2>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-decimal list-inside text-left">
        <li className="bg-[#F9D923]/20 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <span className="font-semibold text-lg">Create your profile</span>
          <span className="text-gray-700">Tell us who you are, your preferences, and what really matters to you.</span>
        </li>
        <li className="bg-[#B39DDB]/20 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <span className="font-semibold text-lg">Find trustworthy matches</span>
          <span className="text-gray-700">Get personalized suggestions based on compatibility — not just availability.</span>
        </li>
        <li className="bg-[#4A90E2]/10 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <span className="font-semibold text-lg">Build your support network</span>
          <span className="text-gray-700">Chat, schedule, and connect safely. We're here to support every step of the way.</span>
        </li>
      </ol>
      <div className="text-center mt-8">
        <a href="#sign-up-form" className="inline-block bg-[#4A90E2] text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-[#326bb3] transition text-lg focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-[#4A90E2]">
          Ready to get started? Join the waitlist below
        </a>
      </div>
    </section>
  );
}
