import React from "react";
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp, Users } from "lucide-react";
import literacyHero from "@/assets/FinanceWorkshop2.jpg";
import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: BookOpen,
    title: "Master Your Credit",
    description: "Understand credit scoring to unlock better rates and stronger financial access.",
    color: "#14B1E7",
  },
  {
    icon: TrendingUp,
    title: "Strategic Decisions",
    description: "Interpret reports, spot trends, and optimize borrowing & repayment strategies.",
    color: "#91CD95",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Aware Planning",
    description: "Build a resilient profile that anticipates challenges and supports sustainable growth.",
    color: "#0066AB",
  },
  {
    icon: Users,
    title: "Real-World Guidance",
    description: "Practical workshops & tools turn complex concepts into immediate results.",
    color: "#14B1E7",
  },
];

const CreditEducationPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero – no overlay, fixed background */}
        <section
          className="relative h-[400px] md:h-[420px] overflow-hidden"
          style={{
            backgroundImage: `url(${literacyHero})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* No overlay – clean image */}

          <div className="relative z-10 container mx-auto px-5 md:px-16 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 drop-shadow-lg">
                Credit Education & Financial Literacy
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-7 drop-shadow-md">
                Knowledge builds financial confidence. We equip individuals, businesses, and institutions with the skills to make smart credit and money decisions.
              </p>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-7 py-3 rounded-lg font-medium transition shadow-md"
              >
                Explore Our Programs
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits section – unchanged (already good) */}
        <section id="benefits" className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-5 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                Empowerment Through Knowledge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why It Matters</h2>
              <p className="text-muted-foreground">
                Gain confidence, avoid costly mistakes, and turn financial understanding into real advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((card, index) => (
                <div
                  key={card.title}
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

                    <p className="text-muted-foreground mb-6 min-h-[100px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    {/* Optional: add "Learn More" links here if desired */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Final CTA – standardized navy overlay + StatsSection style, reduced size */}
        <section
          className="py-12 md:py-16 relative overflow-hidden"
          style={{
            backgroundImage: `url(${literacyHero})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
          />

          <div className="container mx-auto px-5 md:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  Get Started
                </span>
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Build Financial Confidence?
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join our workshops and programs to master credit and achieve better financial outcomes.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
                >
                  <span>Join a Workshop</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

              
              </div>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default CreditEducationPage;