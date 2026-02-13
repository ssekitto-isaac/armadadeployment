import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";
import armada23 from "@/assets/armada-23.jpg";
import { BarChart3, TrendingUp, Target, Users, Zap, DollarSign, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface AnalyticsService {
  id: string;
  icon: any;           // lucide component
  title: string;
  description: string;
}

const analyticsServices: AnalyticsService[] = [
  {
    id: "batch-review",
    icon: BarChart3,
    title: "Armada Batch Review",
    description: "For periodic assessment of your entire credit portfolio. Our batch review allows for large-scale assessment in order to obtain detailed information contained in credit reports, in a practical format that supports content filtering.",
  },
  {
    id: "reject-inference",
    icon: TrendingUp,
    title: "Reject Inference Analysis",
    description: "Optimal Cut-off Calculation useful for determining the optimal cut-off score based on maximizing the gross profit of the credit portfolio. RIA adopted the Monte Carlo simulation in calculating the value at risk and the economic capital for credit portfolios held by banks and other creditors.",
  },
  {
    id: "armada-score-plus",
    icon: Target,
    title: "ArmadaScore® Plus",
    description: "For customization of variables, parameter adjustments, and most importantly, modeling the product with the information of the credits that make up the credit portfolios of the Institution.",
  },
  {
    id: "income-capacity",
    icon: Users,
    title: "Expected Income Capacity",
    description: "For estimating the expected income of credit customers in order to determine their capacity to repay a loan or credit facility.",
  },
  {
    id: "armada-score",
    icon: Zap,
    title: "ArmadaScore®",
    description: "Also called credit score, makes it feasible for creditors to quickly measure the credit default risk of each credit applicant.",
  },
  {
    id: "risk-pricing",
    icon: DollarSign,
    title: "Armada Risk-Pricing Score",
    description: "(Risk Based Interest Rates) for calculating the ideal interest rate for each credit customer based on the level of risk associated with each consumer.",
  },
];

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
       {/* Hero Section – standardized sizing */}
<section
  className="relative h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-start overflow-hidden"
  style={{
    backgroundImage: `url(${armada23})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  }}
>
  {/* Standard overlay */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 text-left px-6 md:px-12 lg:px-20 max-w-4xl">
    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
      Data & Decision<br />
      Analytics
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-md">
      Home - Product Suites - Analytics
    </p>
  </div>
</section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold section-title-dark mb-6">
                Data speaks. We know its voice and we will help you
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                to understand the language of data's intelligence. With our analytics services, you will get more insight from data, learn more about prevailing trends and acquire the acumen to scale and optimize your products and services. Available analytics products/services are:
              </p>
            </div>

           {/* Cards grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {analyticsServices.map((card, index) => (
    <div
      key={card.id}
      className="value-card group text-center flex flex-col justify-between h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div>
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

        <p className="text-muted-foreground mb-6 min-h-[120px]">
          {card.description}
        </p>
      </div>

      <div className="flex justify-center">
       
      </div>
    </div>
  ))}
</div>
            {/* ───────────────────────────────── */}

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="/product-suites/credit-reports" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/portfolio" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

       {/* Compact Closing CTA – with overlay */}
{/* Compact Closing CTA – with overlay */}
{/* Compact Closing CTA – Deep Blue Overlay */}
<section
  className="py-12 md:py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${armada23})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Deep Blue Overlay */}
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
  />

  <div className="container mx-auto px-4 relative z-10 text-center">
    <div className="max-w-3xl mx-auto">

      {/* Accent Lines */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
        <span className="text-white font-bold text-sm tracking-wide uppercase">
          Get Started
        </span>
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Transform Your Data Into Insights
      </h2>

      <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
        Let our advanced analytics solutions help you understand trends, optimize decisions, and drive measurable business growth.
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

export default AnalyticsPage;