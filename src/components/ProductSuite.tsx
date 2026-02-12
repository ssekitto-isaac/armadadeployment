import { ArrowRight, FileText, BarChart3, Shield, Database } from "lucide-react";

interface Product {
  id: string;
  icon: any;
  title: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    id: "credit-reports",
    icon: FileText,
    title: "Credit Information & Risk Reports",
    description: "Credit information and risk reports are an important source of actionable insights.",
    link: "/product-suites/credit-reports",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Decision and Data Analytics",
    description: "Data speaks. We know its voice and help you understand its language.",
    link: "/product-suites/analytics",
  },
  {
    id: "portfolio",
    icon: Shield,
    title: "Portfolio & Risk Management",
    description: "Risk is ubiquitous. You need a partner that works hand-in-glove with you to manage it.",
    link: "/product-suites/portfolio",
  },
  {
    id: "data-management",
    icon: Database,
    title: "Data Management",
    description: "Data is a valuable source of actionable insight for organizations that win.",
    link: "/product-suites/data-management",
  },
];

const ProductSuite = () => {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
            <span className="section-label text-xl font-heading font-bold text-foreground">What We Offer</span>
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="section-title-dark">Product Suite</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Armada Credit Bureau has an advanced suite of credit bureau and analytics products and services that will help you achieve your business objectives.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center justify-items-center">
          {products.map((p) => (
            <div
              key={p.id}
              className="product-card group scroll-mt-24 h-[26rem] flex flex-col w-full items-center text-center bg-white shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#0068AD]"
            >
              {/* Icon Header */}
              <div className="p-4 justify-center">
                <div className="w-28 h-28 rounded-full bg-[#91CD95] flex items-center justify-center mx-auto mb-8 transition-colors duration-300">
                  <p.icon
                    className="w-14 h-14 text-white"
                    stroke="currentColor"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 w-full items-center text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-base mb-4 line-clamp-3 flex-1 group-hover:text-white transition-colors">
                  {p.description}
                </p>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-foreground font-bold text-base hover:gap-3 transition-all group-hover:text-white"
                >
                  Read More{" "}
                  <span className="w-8 h-8 rounded-full bg-[#1d2530] flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-secondary-foreground transition-colors" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;