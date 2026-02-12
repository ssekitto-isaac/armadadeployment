import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";

import {
  Menu,
  X,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";


const TopBar = () => {
  return (
    <div className="top-bar hidden md:block">
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-center gap-0 ml-2">
          <div className="flex items-center gap-8 text-sm font-bold ml-6 whitespace-nowrap">
            <a
              href="mailto:info@armadacrb.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4 ml-0" />
              <span>info@armadacrb.com</span>
            </a>
            <div className="flex items-center gap-2 ml-0 mr-0">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri 8am - 5pm (Weekend Closed)</span>
            </div>
            <div className="flex items-center gap-2 ml-8">
              <MapPin className="w-4 h-4" />
              <span>29A, Lumumba Avenue Kampala, Uganda</span>
            </div>
          </div>

          <div className="flex items-center ml-10">
          <a
            href="https://app.armadacrb.com/login.aspx"
            className="justify-self-end flex items-center gap-2 bg-[#91CD95] hover:bg-[#7ab87d] text-white px-9 py-2 rounded font-semibold transition-all duration-300 whitespace-nowrap"
          >
            <span>Member Login</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          </div>

          {/* Desktop Socials */}
          {/* <div className="hidden lg:flex items-center gap-5">
            <SocialLink icon={Twitter} href="https://x.com/ArmadaCRB" />
            <SocialLink
              icon={Linkedin}
              href="https://ug.linkedin.com/company/armada-credit-bureau"
            />
            <SocialLink icon={Instagram} href="#" />
          </div> */}


        </div>
      </div>
    </div>
  );
};


// SocialLink
function SocialLink({
  icon: Icon,
  size = 20,
  href = "#",
}: {
  icon: any;
  size?: number;
  href?: string;
}) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="text-muted-foreground transition-none"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export default TopBar;
