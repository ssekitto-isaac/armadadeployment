import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsImages = [
  // 1. Credit report and finance
  "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&w=800&q=80", // Credit report, pen, and calculator
  // 2. Diverse business team in finance
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=800&q=80", // Diverse team in a meeting
  // 3. Family financial planning
  "https://images.pexels.com/photos/1578550/pexels-photo-1578550.jpeg?auto=compress&w=800&q=80", // Afro American family with paperwork
  // 4. Secure digital data
  "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=800&q=80", // Digital lock and data security
  // 5. Happy homeowner with keys
  "https://images.pexels.com/photos/2068666/pexels-photo-2068666.jpeg?auto=compress&w=800&q=80", // Mixed-race couple with house keys
  // 6. Financial growth graph
  "https://images.pexels.com/photos/438637/pexels-photo-438637.jpeg?auto=compress&w=800&q=80", // Graph showing financial growth
];

const newsArticles = [
  {
    title: "How Credit Reports Empower African Entrepreneurs",
    description:
      "Discover how access to reliable credit information is helping Afro American and African entrepreneurs secure funding and grow their businesses in 2026.",
    date: "March 2, 2026",
    image: newsImages[0],
  },
  {
    title: "Building Trust: Teams Lead Financial Innovation",
    description:
      "A look at how diverse teams are driving innovation in Uganda’s financial sector, with a focus on credit analytics and inclusion.",
    date: "February 18, 2026",
    image: newsImages[1],
  },
  {
    title: "Protecting Your Credit: Tips for 2026",
    description:
      "Learn practical steps for Afro American families to safeguard their credit scores and avoid common pitfalls in the digital age.",
    date: "January 29, 2026",
    image: newsImages[2],
  },
  {
    title: "Digital Security: Keeping Your Credit Data Safe",
    description:
      "Explore the latest advancements in data security and how credit bureaus are protecting sensitive information for all communities.",
    date: "January 10, 2026",
    image: newsImages[3],
  },
  {
    title: "Success Stories: From No Credit to Home Ownership",
    description:
      "Read inspiring stories of mixed-race individuals who built their credit from scratch and achieved their dream of owning a home.",
    date: "December 22, 2025",
    image: newsImages[4],
  },
  {
    title: "2026 Credit Trends: What to Expect",
    description:
      "Experts discuss the evolving landscape of credit in Africa and what Afro American and mixed-race consumers should watch for this year.",
    date: "December 5, 2025",
    image: newsImages[5],
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[360px] flex items-center justify-center bg-[#0b2c3d]">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative text-5xl md:text-6xl font-heading font-bold text-white">
            News & Insights
          </h1>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsArticles.map((article, i) => (
                <article
                  key={i}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full object-cover"
                    loading="lazy" 
                  />

                  <div className="p-6">
                    <span className="text-sm text-muted-foreground">
                      {article.date}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground text-sm">
                      {article.description}
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-secondary font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
