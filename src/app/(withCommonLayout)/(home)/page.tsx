import AboutSection from "@/components/home/about/about-section";
import CommonFeaturesSection from "@/components/home/common-feature-section";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero/Hero";
import NoticeSection from "@/components/home/notice/notice-section";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <AboutSection />
      <NoticeSection />
      <CommonFeaturesSection />
      <Footer />
    </div>
  );
}
