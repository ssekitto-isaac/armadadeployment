import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import ProductSuiteList from "@/components/ProductSuiteList";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Finance_team2.png"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductSuitePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <ProductHero title="Product Suites" subtitle="Home - Product Suites" />
        <ProductSuiteList />

        {/* Closing CTA */}
        <section
          className="py-12 md:py-16 relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
                <span className="text-white font-bold text-xl tracking-wide uppercase">
                  Get Started
                </span>
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Unlock Financial Clarity?
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join leading institutions and individuals who trust Armada Credit Bureau for secure and accurate credit information.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
              >
                <span>Contact Us Now</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[#91CD95] text-base" />
                </div>
              </Link>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default ProductSuitePage;
