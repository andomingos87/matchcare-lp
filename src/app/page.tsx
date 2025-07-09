import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import WhyCreatedSection from "./components/WhyCreatedSection";
import GettingStartedSection from "./components/GettingStartedSection";
import SignUpFormSection from "./components/SignUpFormSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-gray-900">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <WhyCreatedSection />
      <GettingStartedSection />
      <SignUpFormSection />
      <FooterSection />
    </div>
  );
}
