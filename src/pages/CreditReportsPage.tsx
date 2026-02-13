import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import armada25 from "@/assets/credit_report.png";
import { FileText, BarChart3, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CreditService {
  id: string;
  icon: any;           // lucide component
  title: string;
  description: string;
}

const creditServices: CreditService[] = [
  {
    id: "individual-reports",
    icon: FileText,
    title: "Individual Credit Reports",
    description: "Detailed credit profiles for individuals including credit history, payment patterns, and risk assessment.",
  },
  {
    id: "corporate-reports",
    icon: BarChart3,
    title: "Corporate Credit Reports",
    description: "Comprehensive business credit information covering company financials, payment history, and corporate risk evaluation.",
  },
  {
    id: "risk-assessment",
    icon: CheckCircle,
    title: "Risk Assessment Reports",
    description: "Advanced risk analysis and scoring to help you understand potential exposure and make better credit decisions.",
  },
];

const CreditReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Section – updated to standard overlay + fixed background */}
      {/* Hero Section – reduced height + better positioning to avoid heavy cropping */}
<section
  className="relative h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-start overflow-hidden"
  style={{
    backgroundImage: `url(${armada25})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center top",     // ← shows more of the top / main subjects (best for avoiding top cropping)
    // If the image still feels cropped incorrectly, try these alternatives:
    // backgroundPosition: "50% 25%",
    // backgroundPosition: "center 30%",
  }}
>
  {/* NO OVERLAY – removed completely */}

  <div className="relative z-10 text-left px-6 md:px-12 lg:px-20 max-w-4xl">
    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
      Credit Information &<br />
      Risk Reports
    </h1>
  </div>
</section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold section-title-dark mb-6">
                Credit information and risk reports are an important source
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                of actionable insights. Our comprehensive credit information and risk reports provide you with detailed insights into creditworthiness, financial health, and potential risks. These reports are designed to help you make informed decisions in lending, hiring, and business partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creditServices.map((card, index) => (
                <div
                  key={card.id}
                  className="value-card group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="mx-auto flex items-center justify-center mb-6"
                    style={{
                      background: "#91CD95",
                      borderRadius: "50%",
                      width: 96,
                      height: 96,
                      border: "3px solid #91CD95",
                    }}
                  >
                    <card.icon className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 min-h-[80px]">
                    {card.description}
                  </p>

                  <Link
                    to={`/credit-reports/${card.id}`}
                    className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all rounded-full px-4 py-2 group-hover:text-white"
                  >
                    Read more
                    <span className="w-8 h-8 rounded-full bg-[#1d2530] flex items-center justify-center transition-colors group-hover:bg-[#91CD95]">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", fontSize: "1rem" }}
                      />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="/product-suites/data-management" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/analytics" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Closing CTA – updated to match StatsSection design */}
       {/* Compact Closing CTA – reduced padding, smaller text, tighter layout */}
<section
  className="py-12 md:py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${armada25})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Standard overlay */}
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
  />

  <div className="container mx-auto px-4 relative z-10 text-center">
    <div className="max-w-3xl mx-auto">
      {/* Smaller accent lines */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
        <span className="text-white font-bold text-sm tracking-wide uppercase">
          Get Started
        </span>
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Ready to Make Smarter Credit Decisions?
      </h2>

      <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
        Access detailed credit reports and risk assessments trusted by institutions across Uganda.
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

export default CreditReportsPage;