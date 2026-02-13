import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dataImage from "@/assets/data.jpg";
import { Database, Shield, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DataService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const dataServices: DataService[] = [
  {
    id: "data-assurance",
    icon: <Shield className="w-12 h-12 text-secondary" />,
    title: "Data Assurance",
    description: "For identifying, analyzing, and resolving all data quality issues that may impede your ability to draw intelligent conclusions from your data.",
  },
  {
    id: "data-consolidation",
    icon: <Database className="w-12 h-12 text-secondary" />,
    title: "Data Consolidation",
    description: "For aggregating your organization's data from multiple sources in order to provide a centralized view and usability.",
  },
  {
    id: "enterprise-data",
    icon: <Zap className="w-12 h-12 text-secondary" />,
    title: "Enterprise Data Management",
    description: "For establishing enterprise-wide policies and standards for collating, storing, securing, accessing, and using your organization's data.",
  },
];

const DataManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
       {/* Hero */}
<section
  className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden"
  style={{
    backgroundImage: `url(${dataImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  }}
>
  <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-white/90 text-sm uppercase tracking-wider mb-4 drop-shadow-md">
        <span>Home</span>
        <span>/</span>
        <span>Product Suites</span>
        <span>/</span>
        <span className="font-semibold">Data Management</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
        Data Management
      </h1>

      <p className="text-white/90 text-lg mb-6 max-w-2xl">
        Transform your data into a strategic asset with structured governance,
        integration, and quality control.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#services"
          className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full shadow-md transition-colors"
        >
          Explore Solutions
        </a>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all text-base"
        >
          Speak to Our Experts
        </Link>
      </div>
    </div>
  </div>
</section>


  <section id="services" className="py-20 bg-white">

          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl font-bold section-title-dark mb-6">
                Data is a valuable source of actionable insight.
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Organizations that win adopt a data-driven approach to making business and management decisions, improving service delivery, and identifying trends that lead to value creation. Armada CRB has an all-inclusive data management implementation strategy that includes, but is not limited to, data architecture design, data aggregation, data management, data integration, data quality management, and data usage.
              </p>
              
              <div className="bg-secondary/10 border-l-4 border-secondary pl-6 py-4 mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">Products</h3>
                <p className="text-lg text-foreground">
                  <span className="font-bold text-secondary">Contact us today for an organized, efficient</span> and scalable way of collating, storing, and mining your organization's data. We will help you design and implement a comprehensive data management strategy that covers:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto">
              <Link to="/product-suites/portfolio" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
              <Link to="/product-suites/credit-reports" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:opacity-90">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

       {/* CTA */}
<section
  className="py-12 md:py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${dataImage})`,
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
          Unlock the Power of Your Data
        </span>
        <div className="h-0.5 w-8 bg-[#91CD95]" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Ready to Build a Scalable Data Strategy?
      </h2>

      <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
        Let us help you design, consolidate, and govern your data for smarter
        decisions and sustainable growth.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
        >
          Start Your Data Journey
        </Link>

        <Link
          to="/product-suites"
          className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full font-semibold text-base transition-colors backdrop-blur-sm border border-white/30"
        >
          View All Suites
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

export default DataManagementPage;