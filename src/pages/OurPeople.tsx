import React from "react";
import { ArrowRight, Award, Globe, Linkedin, Mail } from "lucide-react";
import ceoImage from "@/assets/CEO.jpg";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChat";
import StatsSection from "@/components/StatsSection";

const featuredMember = {
  name: "Adebowale Atobatele",
  position: "Ag. Chief Executive/Operating Officer",
  image: ceoImage,
  bio: "Visionary leader in credit bureau operations, banking & technology. Driving innovation in credit reporting and analytics across Africa — focused on trust, inclusion, and data-driven decisions.",
  expertise: "Global standards, local impact",
  linkedin: "https://www.linkedin.com/in/adebowale-atobatele-9412b212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  email: "info@armadacrb.co.ug",
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Team Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
                <div className="text-left">
                  <span className="section-label font-semibold text-lg flex items-center gap-2 mb-2">
                    Our Team
                    <span className="inline-block w-8 h-1 bg-[#22313F] rounded ml-2 align-middle"></span>
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">We draw on our global network to assemble a team of experts.</h2>
                </div>
                <div className="text-left md:w-1/2 md:pl-8">
                  <p className="text-lg text-muted-foreground">
                    We apply our experience to empower you to achieve your goals. Get to know our teams and advisors, and find out how, through collaboration and earned trust, we can guide you.
                  </p>
                </div>
              </div>

              {/* Portrait and Bio */}
              <div className="flex flex-col items-center justify-center mb-12">
                <div className="w-84 h-100 rounded-2xl overflow-hidden shadow-xl mb-6">
                  <img
                    src={featuredMember.image}
                    alt={featuredMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2 mb-1">{featuredMember.name}</h3>
                <p className="text-base text-muted-foreground mb-2">{featuredMember.position}</p>
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

export default TeamPage;