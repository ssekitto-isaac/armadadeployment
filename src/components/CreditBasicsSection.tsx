import { Info, TrendingDown, AlertTriangle, DollarSign } from "lucide-react";

const topics = [
  {
    icon: Info,
    title: "What is Credit?",
    description: "Understanding the basics of credit, how it works, and why it matters in your financial life.",
  },
  {
    icon: TrendingDown,
    title: "Credit Reports",
    description: "Learn what's on your credit report, how to access it, and what information lenders see.",
  },
  {
    icon: DollarSign,
    title: "Credit Score Factors",
    description: "Discover the five key factors that make up your credit score and how they're weighted.",
  },
  {
    icon: AlertTriangle,
    title: "Impact of Credit",
    description: "Understand how your credit score affects loans, interest rates, and financial opportunities.",
  },
];

const CreditBasicsSection = () => {
  return (
    <section id="basics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Foundation</span>
          <h2 className="section-title mb-6">Credit Basics 101</h2>
          <p className="text-lg text-muted-foreground">
            Start your credit education journey by understanding the fundamentals of credit management and how it impacts your financial life.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="value-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle-outline mx-auto">
                <topic.icon className="w-8 h-8 text-secondary group-hover:text-navy transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {topic.title}
              </h3>
              <p className="text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditBasicsSection;
