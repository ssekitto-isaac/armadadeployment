import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menArmada from "@/assets/men_armada.jpeg";
import {
  BarChart3,
  AlertCircle,
  Zap,
  Workflow,
  Clock,
  TrendingUp,
  Filter,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  subDescription?: string;
}

const portfolioServices: PortfolioService[] = [
  {
    id: "armada-promax",
    icon: <BarChart3 className="w-12 h-12 text-secondary" />,
    title: "ArmadaPromax®",
    description:
      "Portfolio Management for managing all types of portfolio sizes and applying risk and business policies (ArmadaScore, Decision Trees, etc.). It is deployable at all categories of institutions. With ArmadaPromax, customers can review their credit portfolio whenever they desire.",
  },
  {
    id: "warning-alerts",
    icon: <AlertCircle className="w-12 h-12 text-secondary" />,
    title: "Warning and Alerts",
    description:
      "Automated daily, weekly, and monthly monitoring of risk variations including probability of defaults, debt level changes, and overall credit quality movement.",
  },
  {
    id: "armada-xpress",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "ArmadaXpress®",
    description:
      "Expedites order flows within institutions, improves efficiency, reduces response times, and is customizable to institutional requirements.",
  },
  {
    id: "armada-credit-factory",
    icon: <Workflow className="w-12 h-12 text-secondary" />,
    title: "Armada Credit Factory (ACF)",
    description:
      "Manages the full lifecycle of credit products from origination to disbursement or delivery.",
    subDescription:
      "[Decision Tree] integrates business and risk policies into selected Armada CRB products and reports.",
  },
  {
    id: "armada-retro",
    icon: <Clock className="w-12 h-12 text-secondary" />,
    title: "ArmadaRetro®",
    description:
      "Provides historical credit footprint insights and allows institutions to view past customer scores at specific points in time.",
  },
  {
    id: "armada-risk-insight",
    icon: <TrendingUp className="w-12 h-12 text-secondary" />,
    title: "Armada Risk Insight",
    description:
      "Compares institutional portfolio risk performance against overall market benchmarks.",
  },
  {
    id: "armada-filters",
    icon: <Filter className="w-12 h-12 text-secondary" />,
    title: "ArmadaFilters®",
    description:
      "Incorporates institutional business and risk policies into selected Armada CRB products and services. Fully customizable.",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden"
          style={{
            backgroundImage: `url(${menArmada})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-white/90 text-sm uppercase tracking-wider mb-4 drop-shadow-md">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span>Product Suites</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-semibold">
                  Portfolio & Risk Management
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Portfolio & Risk Management
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full shadow-md group transition-colors"
                >
                  Explore Solutions
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all text-base"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold section-title-dark mb-6">
                Risk is Ubiquitous. You Need a Partner That Works.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Manage the dynamics of your credit portfolio lifecycle while
                minimizing risk and maximizing profitability with our analytics
                products and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {portfolioServices.map((service, index) => (
    <div
      key={service.id}
      className="value-card group text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-xl bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon Circle */}
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
        <div className="text-white">
          {React.cloneElement(service.icon as React.ReactElement, {
            className: "w-10 h-10 text-white",
          })}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-foreground mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {service.description}
      </p>

      {service.subDescription && (
        <p className="text-sm text-secondary font-semibold mb-6 leading-relaxed">
          {service.subDescription}
        </p>
      )}

      
    </div>
  ))}
</div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 max-w-3xl mx-auto">
              <Link
                to="/product-suites/analytics"
                className="inline-flex items-center gap-2 px-5 py-2 border rounded-lg text-foreground hover:bg-muted transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Link>

              <Link
                to="/product-suites/data-management"
                className="inline-flex items-center gap-2 px-5 py-2 bg-secondary text-white rounded-lg hover:opacity-90 transition"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-12 md:py-16 relative overflow-hidden"
          style={{
            backgroundImage: `url(${menArmada})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#91CD95]" />
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  Strengthen Your Portfolio
                </span>
                <div className="h-0.5 w-8 bg-[#91CD95]" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Optimize Your Risk Strategy?
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Partner with us to monitor, manage, and improve portfolio
                performance.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
                >
                  Speak to an Expert
                </Link>

                <Link
                  to="/product-suites"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full font-semibold text-base transition-colors backdrop-blur-sm border border-white/30"
                >
                  View All Suites
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="text-[#91CD95] w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
