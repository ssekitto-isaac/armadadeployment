import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faClipboard, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight, FileText, BarChart3, Shield, Database } from "lucide-react";

const cards = [
  {
    icon: faUsers,
    title: "About Us",
    description: "We focus on stakeholder relations and astute partnership building.",
    link: "#about",
  },
  {
    icon: faEye,
    title: "Our Vision",
    description: "Our vision is to be the leading and most trusted single",
    link: "#vision",
  },
  {
    icon: faClipboard,
    title: "Our Mission",
    description: "To facilitate value creation and trust between creditors",
    link: "#mission",
  },
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title-dark mb-6">
            We're setting the new standards
          </h2>
          <p className="text-lg text-muted-foreground">
            Operations is beyond garbage-in, garbage-out. That is why we combine the power
            of data science and analytics to deliver value-creating insights that enable
            businesses and individuals to make better decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="value-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle-outline mx-auto flex items-center justify-center" style={{ background: '#91CD95', borderRadius: '50%', width: 96, height: 96, border: '3px solid #91CD95' }}>
                <FontAwesomeIcon icon={card.icon} style={{ color: '#fff', fontSize: '3.0rem' }} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6">{card.description}</p>
              <a
                href={card.link}
                className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all rounded-full px-4 py-2 group-hover:text-white"
              >
                Read more
                <span className="w-8 h-8 rounded-full bg-[#1d2530] flex items-center justify-center transition-colors group-hover:bg-[#91CD95]">
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffffff', fontSize: '1rem' }} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
