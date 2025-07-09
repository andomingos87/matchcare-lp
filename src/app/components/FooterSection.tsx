export default function FooterSection() {
  return (
    <footer className="w-full bg-[#F8F9FA] py-8 mt-auto border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span className="font-semibold">Let’s stay connected:</span>
          <a href="https://www.instagram.com/matchcarehub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-[#4A90E2]">
            <span className="text-2xl">📸</span> @matchcarehub
          </a>
          <a href="mailto:contact@matchcare.com" className="flex items-center gap-2 hover:underline text-[#4A90E2]">
            <span className="text-2xl">📬</span> contact@matchcare.com
          </a>
        </div>
        <div className="text-gray-600 text-sm text-center md:text-right">
          We’re currently in pre-launch mode. More updates coming soon!<br />
          <a href="#" className="underline hover:text-[#4A90E2]">Link to Terms of Use & Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
