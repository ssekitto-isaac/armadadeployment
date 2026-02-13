import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBolt, faLock, faUsers, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    description: "We blend international expertise with deep regional knowledge to deliver precise, actionable, and context-aware insights.",
    accent: "#14B1E7",
  },
  {
    icon: faBolt,
    title: "Real-Time Intelligence",
    description: "By leveraging live, up-to-the-minute data, we empower you to make decisions that are timely, confident, and fully informed.",
    accent: "#91CD95",
  },
  {
    icon: faLock,
    title: "Uncompromising Security",
    description: "We apply industry-leading encryption and rigorous compliance protocols to ensure your data remains secure, private, and fully protected.",
    accent: "#0066AB",
  },
  {
    icon: faUsers,
    title: "Our Team’s Expertise",
    description: "You will benefit from the collective skills of our seasoned professionals in credit, risk, and data management, delivering insights that are reliable, actionable, and tailored to your specific needs.",
    accent: "#14B1E7",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
   {/* Hero Section */}
{/* Hero Section – matched to CreditReportsPage sizing */}
<section
  className="relative h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-start overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  }}
>
  {/* NO OVERLAY */}

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
      <FontAwesomeIcon
        icon={faArrowRight}
        className="w-4 h-4"
      />
    </a>
  </div>
</section>

        {/* Excellence & Inclusion Section – unchanged */}
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

        {/* Why Partner With Us – unchanged */}
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
                      background: card.accent,
                      borderRadius: "50%",
                      width: 96,
                      height: 96,
                      border: `3px solid ${card.accent}`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={card.icon}
                      style={{ color: "#fff", fontSize: "3.0rem" }}
                    />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 min-h-[80px]">
                    {card.description}
                  </p>

                  <Link
                    to="/about"
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
          </div>
        </section>

        {/* Trusted by Leading Institutions – unchanged */}
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

        {/* Closing CTA – updated to match StatsSection design */}
       {/* Compact Closing CTA – matches CreditReportsPage sizing */}
<section
  className="py-12 md:py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
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