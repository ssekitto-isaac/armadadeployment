import { Lightbulb, Award, ShieldCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import innovationImg from "@/assets/innovation4.png";

const CollaborationIcon = ({ className }) => (
  <FontAwesomeIcon
    icon={faUsers}
    className={className}
  />
);

const InnovationIcon = (props) => (
  <FontAwesomeIcon icon={faLightbulb} className={`w-14 h-14 text-white fill-white ${props.className || ""}`} />
);

const values = [
  {
    icon: InnovationIcon,
    title: "Innovation",
    description: "We relentlessly pursue creative solutions to improve our processes and systems.",
  },
  {
    icon: CollaborationIcon,
    title: "Collaboration",
    description: "We promote an environment of respect and collaboration, supporting each other.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We go above and beyond to exceed our valued client's expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "We take ownership of the quality of our work and take pride in what we deliver.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Label and Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
         {/* <span className="section-label">Our Framework</span> */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
            <span className="section-label">Our Framework</span>
            <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
          </div>
          <h2 className="section-title-dark mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">
            Our core values make us who we are. As we change and grow, the beliefs that
            are most important to us stay the same
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card group text-center transition-colors duration-300 hover:bg-navy"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-28 h-28 rounded-full bg-[#91CD95] flex items-center justify-center mx-auto mb-8 transition-colors duration-300">
                {typeof value.icon === "string" ? (
                  <img src={value.icon} alt={value.title} className="w-14 h-14" />
                ) : (
                  <value.icon className="w-14 h-14 text-white fill-white" />
                )}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white transition-colors">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
