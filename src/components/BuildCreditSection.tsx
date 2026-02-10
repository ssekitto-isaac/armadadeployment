import { CheckCircle, ArrowRight } from "lucide-react";

const buildSteps = [
  "Check your credit report regularly for errors",
  "Pay all bills on time, every time",
  "Keep credit card balances low (below 30%)",
  "Maintain a mix of credit types",
  "Limit hard inquiries and new applications",
  "Dispute any negative inaccuracies",
];

const BuildCreditSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="section-label">Growth Strategy</span>
            <h2 className="section-title-dark mb-6">
              How to Build Strong Credit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Building good credit is a marathon, not a sprint. Follow these proven strategies to improve your credit score and financial health over time.
            </p>

            <div className="space-y-4 mb-8">
              {buildSteps.map((step) => (
                <div key={step} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{step}</p>
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary inline-flex items-center gap-2 group">
              Get Detailed Guides
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual Stats */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Payment History</h3>
              <p className="text-muted-foreground mb-4">The most important factor in your credit score</p>
              <div className="w-full bg-border rounded-full h-3 mb-2">
                <div className="bg-secondary rounded-full h-3" style={{ width: "35%" }}></div>
              </div>
              <span className="text-sm text-muted-foreground">35% of your score</span>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Credit Utilization</h3>
              <p className="text-muted-foreground mb-4">How much available credit you're using</p>
              <div className="w-full bg-border rounded-full h-3 mb-2">
                <div className="bg-secondary rounded-full h-3" style={{ width: "30%" }}></div>
              </div>
              <span className="text-sm text-muted-foreground">30% of your score</span>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Credit Mix</h3>
              <p className="text-muted-foreground mb-4">Variety of credit accounts you have</p>
              <div className="w-full bg-border rounded-full h-3 mb-2">
                <div className="bg-secondary rounded-full h-3" style={{ width: "15%" }}></div>
              </div>
              <span className="text-sm text-muted-foreground">15% of your score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildCreditSection;
