import React from "react";
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp, Users } from "lucide-react";
import literacyHero from "@/assets/FinanceWorkshop2.jpg";
import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

        {/* ── Hero ── */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "clamp(260px, 50vw, 420px)" }}
        >
          {/* <img> instead of backgroundAttachment:fixed — works on all mobile browsers */}
          <img
            src={literacyHero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/50 z-[3]" />

          <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <h1
                className="font-bold text-white mb-4 drop-shadow-lg leading-tight"
                style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}
              >
                Credit Education &<br className="hidden sm:block" /> Financial Literacy
              </h1>

              <p
                className="text-white/90 mb-6 drop-shadow-md"
                style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.25rem)" }}
              >
                Knowledge builds financial confidence. We equip individuals, businesses, and institutions with the skills to make smart credit and money decisions.
              </p>

              <a
                href="#benefits"
                className="inline-flex items-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-7 py-3 rounded-lg font-medium transition shadow-md"
                style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
              >
                Explore Our Programs
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[420px]">
              {benefits.map((card, index) => (
                <div
                  key={card.title}
                  className="value-card group text-center flex flex-col justify-between h-full gap-y-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-y-4">
                    <div
                      className="mx-auto flex items-center justify-center mb-4"
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

                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-muted-foreground mb-0 min-h-[100px]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-center mt-2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* <img> instead of backgroundAttachment:fixed */}
          <img
            src={literacyHero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
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