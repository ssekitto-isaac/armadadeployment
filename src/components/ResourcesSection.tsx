import { Download, BookOpen, Video, FileText, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Credit Guide Handbook",
    description: "Comprehensive guide covering all aspects of credit management and financial planning.",
    type: "PDF Download",
    action: "Download",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides on how to check your credit report and improve your score.",
    type: "Video Series",
    action: "Watch Now",
  },
  {
    icon: BookOpen,
    title: "Glossary of Terms",
    description: "A complete glossary of credit and financial terms to help you understand the industry.",
    type: "Reference",
    action: "View Glossary",
  },
  {
    icon: Download,
    title: "Budget Planner",
    description: "Free downloadable budget template to help you manage money and build good credit habits.",
    type: "Tool",
    action: "Download",
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Support</span>
          <h2 className="section-title mb-6">Learning Resources</h2>
          <p className="text-lg text-muted-foreground">
            Access our comprehensive collection of free educational resources to accelerate your credit knowledge journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className="value-card group text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle mb-6">
                <resource.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-secondary font-semibold mb-3">
                {resource.type}
              </p>
              <p className="text-muted-foreground mb-6">
                {resource.description}
              </p>
              <button className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all rounded-full px-4 py-2 group-hover:bg-navy group-hover:text-primary-foreground">
                {resource.action}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-muted rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our learning center is packed with articles and guides. If you can't find what you're looking for, our support team is ready to help.
          </p>
          <button className="btn-secondary inline-flex items-center gap-2 group">
            Contact Support
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
