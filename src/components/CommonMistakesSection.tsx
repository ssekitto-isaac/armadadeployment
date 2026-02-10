import { X, ArrowRight } from "lucide-react";

const mistakes = [
  {
    mistake: "Late Payments",
    impact: "Most damaging factor to your credit score. Can stay on record for 7 years.",
  },
  {
    mistake: "High Credit Utilization",
    impact: "Using more than 30% of your available credit signals financial difficulty.",
  },
  {
    mistake: "Too Many Hard Inquiries",
    impact: "Multiple credit applications in short time appear as desperate seeking credit.",
  },
  {
    mistake: "Ignoring Credit Reports",
    impact: "Errors on your report could harm your score. Check annually.",
  },
  {
    mistake: "Closing Old Accounts",
    impact: "Reduces available credit and shortens your credit history length.",
  },
  {
    mistake: "Co-signing Risks",
    impact: "You're legally responsible if the other person defaults on payments.",
  },
];

const CommonMistakesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Avoid These</span>
          <h2 className="section-title-dark mb-6">Common Credit Mistakes</h2>
          <p className="text-lg text-muted-foreground">
            Learn about the most common mistakes people make with credit and how to avoid them. Small decisions can have big consequences.
          </p>
        </div>

        {/* Mistakes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mistakes.map((item, index) => (
            <div
              key={item.mistake}
              className="bg-card rounded-xl p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {item.mistake}
                </h3>
              </div>
              <p className="text-muted-foreground">{item.impact}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Learn Best Practices
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommonMistakesSection;
