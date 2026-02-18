import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBolt,
  faLock,
  faUsers,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import heroImage from "@/assets/FinanaceTeam1.jpg"; // team or data visualization
import teamImage from "@/assets/FinanceAnyalysing.jpg"; // professional team photo

import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Replace these with your actual logo paths
import logo1 from "@/assets/GTCO Uganda.png";
import logo2 from "@/assets/Housing Finance Bank Logo.png";
import logo3 from "@/assets/Tropical-Bank.png";
import logo4 from "@/assets/Finance Trust Bank Logo.png";

const partners = [
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
  { name: "Company C", logo: logo3 },
  { name: "Company D", logo: logo4 },
  // duplicate for seamless infinite scroll
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
];

const whyPartner = [
  {
    icon: faGlobe,
    title: "Global Insight, Local Impact",
    description:
      "We blend international expertise with deep regional knowledge to deliver precise, actionable, and context-aware insights.",
    accent: "#14B1E7",
  },
  {
    icon: faBolt,
    title: "Real-Time Intelligence",
    description:
      "By leveraging live, up-to-the-minute data, we empower you to make decisions that are timely, confident, and fully informed.",
    accent: "#91CD95",
  },
  {
    icon: faLock,
    title: "Uncompromising Security",
    description:
      "We apply industry-leading encryption and rigorous compliance protocols to ensure your data remains secure, private, and fully protected.",
    accent: "#0066AB",
  },
  {
    icon: faUsers,
    title: "Our Team’s Expertise",
    description:
      "You will benefit from the collective skills of our seasoned professionals in credit, risk, and data management, delivering insights that are reliable, actionable, and tailored to your specific needs.",
    accent: "#14B1E7",
  },
];

const AboutPage = () => {
  const location = useLocation();
  const [openItem, setOpenItem] = useState<string | null>(null);

  // Auto-open accordion if coming from nav link (e.g. #vision)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setOpenItem(id);

      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Overlay - Stronger on mobile for better text readability */}
          <div className="hero-overlay absolute inset-0 bg-black/4 md:bg-black/4 z-[3]" />

          <div className="relative z-10 text-left px-6 md:px-12 lg:px-20 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
              About Armada Credit Bureau
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-6 drop-shadow-md">
              At Armada Credit Bureau, we believe reliable data is the heartbeat of a thriving economy. We transform raw data into actionable intelligence that fosters trust between lenders and borrowers.
            </p>

            <a
              href="#why-partner"
              className="inline-flex items-center gap-2 px-6 py-3 text-base bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full font-semibold transition-colors shadow-md"
            >
              Why Partner With Us
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Excellence & Inclusion Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src={teamImage}
                  alt="Armada team analyzing data"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>

              <div className="order-1 lg:order-2">
                <span className="section-label">—— Our Commitment</span>
                <h2 className="section-title-dark mb-6">
                  Excellence in Analytics, Integrity in Reporting
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In an era where speed and accuracy are paramount, Armada stands at the forefront of innovation. We leverage cutting-edge technology and robust data modeling to deliver comprehensive credit reports that go beyond just numbers. Our analytics provide a deep-dive into financial behaviors, allowing institutions to mitigate risk effectively while identifying new opportunities for sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  A Catalyst for Financial Inclusion: We don't just report data; we empower futures. For individuals, Armada serves as a gateway to financial opportunity. By maintaining the highest standards of data integrity, we ensure that every credit story is told fairly and accurately, helping consumers unlock access to the capital they need to build their dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

    

        {/* Why Partner With Us */}
<section id="why-partner" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="section-label">Why Choose Armada</span>
      <h2 className="section-title-dark mb-6">Why Partner with Armada?</h2>
      <p className="text-lg text-muted-foreground">
        Whether you are a financial institution seeking to optimize your risk management or an individual looking to understand your credit standing, Armada Credit Bureau is your most trusted ally in the journey toward financial clarity.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {whyPartner.map((card, index) => (
        <div
          key={card.title}
          className="value-card group text-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className="mx-auto flex items-center justify-center mb-6"
            style={{
              background: "#91CD95",           // ← REPLACE THIS with the exact hex from your "Real Time Intelligence" card
              borderRadius: "50%",
              width: 96,
              height: 96,
              border: "3px solid #91CD95",     // same color for border
            }}
          >
            <FontAwesomeIcon
              icon={card.icon}
              style={{ color: "#ffffff", fontSize: "3.0rem" }}
            />
          </div>

          <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
            {card.title}
          </h3>

          <p className="text-muted-foreground mb-6 min-h-[80px]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

            {/* Vision, Mission & Values – Navy + Green Corporate Accordion (your exact design) */}
        <section
          id="about"
          className="relative py-14 md:py-20 border-t border-muted/40 overflow-hidden"
          style={{
           
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Light overlay */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />

          <div className="relative container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-10">
         

              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3 text-gray-900">
                Our Vision, Mission & Values
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Click below to explore what drives Armada Credit Bureau.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {[
                {
                  id: "vision",
                  title: "Our Vision",
                  icon: faGlobe,
                  content:
                    "Our vision is to be the leading and most trusted single source of reliable and actionable insights for individuals, businesses, and non-corporate entities.",
                },
                {
                  id: "mission",
                  title: "Our Mission",
                  icon: faBolt,
                  content:
                    "To facilitate value creation and trust between creditors and their customers through the power of data and analytics.",
                },
                {
                  id: "values",
                  title: "Our Core Values",
                  icon: faUsers,
                  content: (
                    <ul className="space-y-3">
                      {["Innovation", "Excellence", "Collaboration", "Accountability"].map(
                        (value, index) => (
                          <li key={index} className="flex gap-3 items-center">
                            <span className="w-2 h-2 rounded-full bg-[#91CD95]" />
                            <span className="font-semibold text-white">{value}</span>
                          </li>
                        )
                      )}
                    </ul>
                  ),
                },
              ].map((item) => {
                const isOpen = openItem === item.id;

                return (
                  <div key={item.id} id={item.id} className="group scroll-mt-32">
                    {/* Header */}
                    <button
                      onClick={() => setOpenItem(isOpen ? null : item.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${
                        isOpen ? "bg-white shadow-lg" : "bg-white/70 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Green icon */}
                        <div className="w-10 h-10 rounded-lg bg-[#91CD95]/20 flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-[#91CD95] text-lg"
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isOpen ? "text-[#91CD95]" : "text-gray-800"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#91CD95]" : "text-gray-500"
                        }`}
                      />
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-6 rounded-xl bg-[#0B1F3A] text-white shadow-xl">
                        {typeof item.content === "string" ? (
                          <p className="leading-relaxed text-gray-200">
                            {item.content}
                          </p>
                        ) : (
                          item.content
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trusted by Leading Institutions */}
        <section className="py-16 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-5 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
              Trusted by Leading Institutions
            </h2>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />

              <div className="overflow-hidden">
                <div
                  className="flex animate-marquee whitespace-nowrap will-change-transform hover:pause-marquee"
                  style={{
                    animationDuration: "35s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                  }}
                >
                  {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 xl:mx-20"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  Get Started
                </span>
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Unlock Financial Clarity?
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join leading institutions and individuals across Uganda who trust Armada Credit Bureau for secure and accurate credit information.
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

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default AboutPage;