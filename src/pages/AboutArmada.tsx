import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe, faEye, faBolt, faLock, faUsers, faArrowRight, faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import heroImage from "@/assets/Finance_team2.png";
import teamImage from "@/assets/FinanceAnyalysing.jpg";

import LiveChatWidget from "@/components/LiveChat";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import logo1 from "@/assets/GTCO Uganda.png";
import logo2 from "@/assets/Housing Finance Bank Logo.png";
import logo3 from "@/assets/Tropical-Bank.png";
import logo4 from "@/assets/Finance Trust Bank Logo.png";

const partners = [
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
  { name: "Company C", logo: logo3 },
  { name: "Company D", logo: logo4 },
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
];

const AboutPage = () => {
  const location = useLocation();
  const [openItem, setOpenItem] = useState<string | null>(null);

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

        {/* ── Hero Section ── */}
        <section
          id="head"
          className="relative flex items-center justify-start overflow-hidden"
          style={{ minHeight: "clamp(260px, 45vw, 400px)" }}
        >
          {/* <img> instead of backgroundAttachment:fixed — fully supported on iOS/Android */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/50 z-[3]" />

          <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-20">
            <div className="max-w-3xl">
              <h1
                className="font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg"
                style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}
              >
                About Armada Credit Bureau
              </h1>

              <div className="flex flex-wrap items-start gap-2">
                <p
                  className="text-white drop-shadow-md"
                  style={{ fontSize: "clamp(0.8rem, 2.2vw, 1.125rem)" }}
                >
                  At Armada Credit Bureau, we believe reliable data is the heartbeat of a thriving economy. We transform raw data into actionable intelligence that fosters trust between lenders and borrowers.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("excellence-inclusion");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full font-semibold transition-colors shadow whitespace-nowrap self-center"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}
                >
                  <span>Read More</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center ml-1">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Excellence & Inclusion ── */}
        <section id="excellence-inclusion" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 mb-8">
                <img
                  src={teamImage}
                  alt="Armada team analyzing data"
                  className="w-full h-[560px] object-cover"
                  loading="eager"
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

        {/* ── Vision, Mission & Values ── */}
        <section
          id="about"
          className="relative py-14 md:py-20 border-t border-muted/40 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.77)" }}
          />
          <div className="relative container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-4xl font-bold mt-3 mb-3 text-gray-900">
                Our Vision, Mission & Values
              </h2>
              <p className="max-w-3xl mx-auto">
                Click below to explore what drives Armada Credit Bureau.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "vision",
                  title: "Our Vision",
                  icon: faEye,
                  content: "Our vision is to be the leading and most trusted single source of reliable and actionable insights for individuals, businesses, and non-corporate entities.",
                },
                {
                  id: "mission",
                  title: "Our Mission",
                  icon: faBolt,
                  content: "To facilitate value creation and trust between creditors and their customers through the power of data and analytics.",
                },
                {
                  id: "values",
                  title: "Our Values",
                  icon: faUsers,
                  content: (
                    <ul className="space-y-3">
                      {["Innovation", "Excellence", "Collaboration", "Accountability"].map((value, index) => (
                        <li key={index} className="flex gap-3 items-center">
                          <span className="w-2 h-2 rounded-full bg-[#91CD95]" />
                          <span className="font-semibold text-white">{value}</span>
                        </li>
                      ))}
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
                    <button
                      onClick={() => setOpenItem(isOpen ? null : item.id)}
                      className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 rounded-xl transition-all duration-300 ${
                        isOpen ? "bg-white shadow-lg" : "bg-white/70 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            background: "#91CD95",
                            borderRadius: "50%",
                            width: "clamp(52px, 10vw, 84px)",
                            height: "clamp(52px, 10vw, 84px)",
                            border: "3px solid #91CD95",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            style={{ color: "#fff", fontSize: "clamp(1.4rem, 3.5vw, 3rem)" }}
                          />
                        </div>
                        <h3
                          className={`font-extrabold transition-colors duration-300 ${
                            isOpen ? "text-[#91CD95]" : "text-gray-800"
                          }`}
                          style={{ fontSize: "clamp(1rem, 3.5vw, 1.875rem)" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition-transform duration-300 flex-shrink-0 ml-2 ${
                          isOpen ? "rotate-180 text-[#91CD95]" : "text-gray-500"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 py-6 rounded-xl bg-[#0B1F3A] text-white shadow-xl">
                        {typeof item.content === "string" ? (
                          <p className="leading-relaxed text-gray-200">{item.content}</p>
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

        {/* ── Trusted Partners ── */}
        <section id="partners" className="py-10 md:py-10 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                <span className="section-label text-xl font-heading font-bold text-foreground">Trusted Partners</span>
                <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
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

        {/* ── Closing CTA ── */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* <img> instead of backgroundAttachment:fixed */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#91CD95]"></div>
                <span className="text-white font-bold text-xl tracking-wide uppercase">Get Started</span>
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