const scoreRanges = [
  {
    range: "300-449",
    status: "Poor",
    description: "Significant challenges in obtaining credit. Work on building history and paying bills on time.",
    color: "bg-red-500",
  },
  {
    range: "450-579",
    status: "Fair",
    description: "Limited credit options available. Focus on reducing debt and making timely payments.",
    color: "bg-orange-500",
  },
  {
    range: "580-669",
    status: "Good",
    description: "Decent credit options available. Continue good practices to reach excellent range.",
    color: "bg-yellow-500",
  },
  {
    range: "670-739",
    status: "Very Good",
    description: "Strong credit position with favorable loan terms and rates available.",
    color: "bg-lime-500",
  },
  {
    range: "740+",
    status: "Excellent",
    description: "Exceptional credit standing with best rates and terms available across products.",
    color: "bg-green-500",
  },
];

const CreditScoreRangesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Score Guide</span>
          <h2 className="section-title mb-6">Credit Score Ranges</h2>
          <p className="text-lg text-muted-foreground">
            Understanding your credit score range helps you know where you stand and what steps to take next. Use the ArmadaCreditScore® to track your progress.
          </p>
        </div>

        {/* Score Range Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {scoreRanges.map((score) => (
            <div
              key={score.range}
              className="value-card group text-center hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-full ${score.color} flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold text-white">{score.range.split("-")[0]}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {score.status}
              </h3>
              <p className="text-muted-foreground text-sm">{score.range}</p>
              <p className="text-muted-foreground mt-4">{score.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditScoreRangesSection;
