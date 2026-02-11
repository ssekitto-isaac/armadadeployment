import { ArrowRight, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.png";
import { Link } from "react-router-dom";

const features = [
  "Licensed by Bank of Uganda",
  "Advanced analytics platform",
  "Robust credit reporting",
  "Stakeholder-focused approach",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Armada team in meeting"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="section-label font-semibold text-lg flex items-center gap-2 mb-2">
              About us
              <span className="inline-block w-8 h-1 bg-[#91CD95] rounded ml-2 align-middle"></span>
            </span>

            <h2 className="section-title-dark mb-6">
              We are dedicated to supporting you
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Armada Credit Bureau Limited is a duly licensed credit reporting and
              analytics company operating within the regulatory framework of the Bank of
              Uganda. Riding on the strength of our robust credit reporting and analytics
              platform, we offer an advanced suite of products.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/AboutArmada"
              className="btn-primary inline-flex items-center gap-4 group rounded-full px-10 py-3 text-lg font-bold"
              style={{ borderRadius: '9999px' }}
            >
              Read More
              <span className="flex items-center justify-center bg-white" style={{ borderRadius: '50%', width: 40, height: 40 }}>
                <ArrowRight className="w-6 h-6 text-[#0068ad] group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
