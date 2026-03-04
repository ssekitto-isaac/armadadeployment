import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
// import Header2 from "@/components/header2";
import HeroSection from "@/components/HeroSection";
import StandardsSection from "@/components/StandardsSection";
import CoreValues from "@/components/CoreValues";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductSuite from "@/components/ProductSuite";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      {/* <Header2 /> */}
      <main>
        <HeroSection />
        <StandardsSection />
        <CoreValues />
        <AboutSection />
        {/* <WhyChooseUs /> */}
        <ProductSuite />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
