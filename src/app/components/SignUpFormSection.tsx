export default function SignUpFormSection() {
  return (
    <section className="w-full max-w-lg mx-auto px-6 py-14 md:py-20" id="sign-up-form">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Be the first to try MatchCare!</h2>
      <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5" autoComplete="off">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">Name</label>
          <input id="name" name="name" type="text" className="rounded border border-gray-300 px-3 py-2 focus:outline focus:ring-2 focus:ring-[#B39DDB]" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">Email <span className="text-red-500">*</span></label>
          <input id="email" name="email" type="email" required className="rounded border border-gray-300 px-3 py-2 focus:outline focus:ring-2 focus:ring-[#B39DDB]" />
        </div>
        <fieldset className="flex flex-col gap-2">
          <legend className="font-medium">I am a <span className="text-red-500">*</span></legend>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="family" required className="accent-[#4A90E2]" /> Family
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="nanny" required className="accent-[#4A90E2]" /> Nanny
            </label>
          </div>
        </fieldset>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="exclusiveContent" className="accent-[#B39DDB]" />
          I want to receive exclusive content on childcare and child development.
        </label>
        <div className="bg-[#F9D923]/10 text-[#4A90E2] rounded p-3 text-sm font-medium">
          Sign up to get early access to the app + receive expert content on parenting, development, and family wellness.
        </div>
        <button type="submit" className="w-full bg-[#F9D923] text-[#4A90E2] font-bold rounded-full px-8 py-3 mt-2 shadow-lg hover:bg-yellow-400 transition text-lg focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-[#F9D923]">
          Join the MatchCare Waitlist
        </button>
        <div className="text-xs text-gray-500 text-center mt-2">Your information is safe with us. No spam, ever.</div>
      </form>
    </section>
  );
}
