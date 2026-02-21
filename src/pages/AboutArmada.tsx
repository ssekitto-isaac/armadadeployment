import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEye,
  faBolt,
  faLock,
  faUsers,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import heroImage from "@/assets/Finance_team2.png"; // team or data visualization
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
        <section id="head"
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

          <div className="relative z-10 text-left px-6 md:px-12 lg:px-20 max-w-4xl ml-28">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
              About Armada Credit Bureau
            </h1>

            {/* <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-6 drop-shadow-md">
              At Armada Credit Bureau, we believe reliable data is the heartbeat of a thriving economy. We transform raw data into actionable intelligence that fosters trust between lenders and borrowers.
            </p> */}

            <div className="flex items-center max-w-2xl mb-6">
              <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-md mb-0 flex-1">
                At Armada Credit Bureau, we believe reliable data is the heartbeat of a thriving economy. We transform raw data into actionable intelligence that fosters trust between lenders and borrowers.
              
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("excellence-inclusion");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-[#91CD95] hover:bg-[#91CD96] text-white rounded-full font-semibold transition-colors shadow ml-2 whitespace-nowrap align-middle"
                style={{ verticalAlign: "middle" }}
              >
                <span className="font-semibold">Read More</span>
                <span className="w-6 h-6 rounded-full bg-[#91CD95] flex items-center justify-center ml-1">
                  <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
                </span>
              </button>
              </p>

            </div>
          </div>
        </section>

        {/* Excellence & Inclusion Section */}
        <section id="excellence-inclusion" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 mb-8">
                <img
                  src={teamImage}
                  alt="Armada team analyzing data"
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>

              <div className="order-1 lg:order-2">

                <div className="flex items-center justify-left gap-4 mb-2">
                  <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                  <span className="section-label text-xl font-heading font-bold text-foreground">Our Commitment</span>
                  <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                </div>

                <h2 className="section-title-dark mb-6">
                  Excellence in Analytics, Integrity in Reporting
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In an era where speed and accuracy are paramount, Armada stands at the forefront of innovation. We leverage cutting-edge technology and robust data modeling to deliver comprehensive credit reports that go beyond just numbers.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our analytics provide a deep-dive into financial behaviors, allowing institutions to mitigate risk effectively while identifying new opportunities for sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We see ourselves as a catalyst for financial inclusion: We don't just provide insights from data; we empower futures. For individuals, ArmadaCRB's products serve as a gateway to financial opportunity. By maintaining the highest standards of data integrity, we ensure that every credit story is told fairly and accurately, helping consumers unlock access to the capital they need to build their dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

            {/* Vision, Mission & Values – Navy + Green Corporate Accordion (your exact design) */}
        <section
          id="about"
          className="relative py-14 md:py-20 border-t border-muted/40 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.77)" }}
          />

          <div className="relative container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-10">
         

              <h2 className="text-4xl md:text-4xl font-bold mt-3 mb-3 text-gray-900">
                Our Vision, Mission & Values
              </h2>

              <p className="max-w-3xl mx-auto">
                Click below to explore what drives Armada Credit Bureau.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {[
                {
                  id: "vision",
                  title: "Our Vision",
                  icon: faEye,
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
                  title: "Our Values",
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
                  <div
                    key={item.id}
                    id={item.id}
                    className="group scroll-mt-32 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 bg-transparent"
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpenItem(isOpen ? null : item.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${
                        isOpen ? "bg-white shadow-lg" : "bg-white/70 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Green circle icon with outline, matching StandardsSection */}
                        <div
                          className="icon-circle-outline mx-auto flex items-center justify-center"
                          style={{
                            background: "#91CD95",
                            borderRadius: "50%",
                            width: 84,
                            height: 84,
                            border: "3px solid #91CD95",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            style={{ color: "#fff", fontSize: "3.0rem" }}
                          />
                        </div>
                        {/* Title */}
                        <h3
                          className={`text-3xl font-extrabold transition-colors duration-300 mb-6 ${
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

       
        {/* Why Partner With Us */}
          {/* Trusted Partners – Modern & Professional Display */}

          <section id="partners" className="py-10 md:py-10 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                      <span className="section-label text-xl font-heading font-bold text-foreground">Trusted Partners</span>
                      <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]">  
                      </div>
                </div>

                <h2 className="section-title-dark mt-4 mb-6">
                  Partnering with Leading Financial Institutions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We work closely with respected banks and financial organizations across Uganda to provide secure, accurate, and actionable credit intelligence that drives trust and growth.
                </p>
              </div>
              
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <Link
                  to="/OurPeople#top"
                  className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
                >
                  <span>See Our People</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#91CD95] text-base" />
                  </div>
                </Link>
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

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default AboutPage;