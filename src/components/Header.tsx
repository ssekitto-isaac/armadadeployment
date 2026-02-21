import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// ── Types ────────────────────────────────────────────────
interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

// Navigation Data 
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/AboutArmada",
    subItems: [
      {
        label: "About Armada CRB",
        href: "/AboutArmada",
        description: "Learn about our company and values",
      },
      {
        label: "Our People",
        href: "/OurPeople",
        description: "Meet our leadership",
      },
    ],
  },
  {
    label: "Product Suites",
    href: "/product-suites",
    subItems: [
      {
        label: "Credit Information & Risk Reports",
        href: "/product-suites/credit-reports",
        description: "Actionable insights for credit decisions",
      },
      {
        label: "Decision and Data Analytics",
        href: "/product-suites/analytics",
        description: "Data-driven business intelligence",
      },
      {
        label: "Portfolio & Risk Management",
        href: "/product-suites/portfolio",
        description: "Comprehensive risk management solutions",
      },
      {
        label: "Data Management",
        href: "/product-suites/data-management",
        description: "Data is a valuable source of actionable insight",
      },
    ],
  },
  
  {
    label: "Customer Information",
    href: "/credit-education",
    subItems: [
      {
        label: "Self Inquiry",
        href: "/SelfInquiry",
        description: "Submit a self inquiry request",
      },
      {
        label: "Complaint Handling",
        href: "/DisputeResolutionForm",
        description: "How we handle your concerns",
      },
      {
        label: "Consumer Education",
        href: "/credit-education",
        description: "Resources to improve your credit knowledge",
      },
      {
        label: "FAQs",
        href: "/FAQ",
        description: "Frequently asked questions",
      },
    ],
  },
  // { label: "News", href: "/news" },
   { label: "News", href: "#" },
  // { label: "FAQs", href: "/FAQ"},
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const location = useLocation();
  const itemRefs = useRef<Record<string, HTMLElement>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const enterNav = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHoveringNav(true);
  };

  const leaveNav = () => {
    timeoutRef.current = setTimeout(() => setIsHoveringNav(false), 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return location.hash === href;
    return location.pathname === href;
  };

  const isAnySubActive = (subItems?: NavSubItem[]) => {
    if (!subItems) return false;
    return subItems.some((sub) => isActive(sub.href));
  };

  const getActiveHrefs = () => {
    const activeHrefs = new Set<string>();
    navItems.forEach((item) => {
      let parentActive = isActive(item.href);
      if (item.subItems) {
        item.subItems.forEach((sub) => {
          if (isActive(sub.href)) {
            activeHrefs.add(sub.href);
            parentActive = true;
          }
        });
      }
      if (parentActive) {
        activeHrefs.add(item.href);
      }
    });
    return activeHrefs;
  };

  useEffect(() => {
    const applyStyles = (el: HTMLElement, isSpecial: boolean) => {
      if (isSpecial) {
        el.style.background = "#0068ad";
        el.style.color = "#ffffff";
        el.style.borderBottom = `4px solid #91CD95`;
        Array.from(el.querySelectorAll("*")).forEach(
          (child) => ((child as HTMLElement).style.color = "#ffffff")
        );
      } else {
        el.style.background = "transparent";
        el.style.color = "#1A2636";
        el.style.borderBottom = "";
        Array.from(el.querySelectorAll("*")).forEach(
          (child) => ((child as HTMLElement).style.color = "")
        );
      }
    };

    const activeHrefs = getActiveHrefs();
    if (isHoveringNav) {
      activeHrefs.forEach((href) => {
        const el = itemRefs.current[href];
        if (el) applyStyles(el, false);
      });
    } else {
      Object.keys(itemRefs.current).forEach((href) => {
        const el = itemRefs.current[href];
        if (el) applyStyles(el, activeHrefs.has(href));
      });
    }
  }, [isHoveringNav, location.pathname]);

  const textColor = "text-[#1A2636]";
  const activeColor = "text-[#91CD95]";
  const activeBg = "bg-[#EAF7EC]";
  const armadaGreen = "#91CD95";

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm font-sans">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-center gap-2 py-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0 min-w-0 mr-10">
            <img
              src="/armada-logo.png"
              alt="Armada Credit Bureau"
              className="h-12 w-auto md:h-14 max-w-[120px] md:max-w-[180px] object-contain block"
              style={{ minWidth: 0 }}
            />
            <span className="sr-only">Armada Credit Bureau</span>
          </a>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <div onMouseEnter={enterNav} onMouseLeave={leaveNav}>
              <NavigationMenuList className="gap-6">
                {navItems.map((item) => {
                  const isItemActive = isActive(item.href) || isAnySubActive(item.subItems);

                  return (
                    <NavigationMenuItem key={item.label} className="relative inline-block">
                      {item.subItems ? (
                        <>
                          <NavigationMenuTrigger
                            ref={(el) => { if (el) itemRefs.current[item.href] = el; }}
                            className={cn(
                              "bg-transparent focus:bg-transparent data-[state=open]:bg-transparent px-1 py-2 text-base font-bold transition-none",
                              isItemActive
                                ? "bg-[#0068ad] text-white border-b-4 border-[#91CD95]"
                                : textColor
                            )}
                            style={{
                              transition: "color 0.2s, border-bottom 0.2s, background 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#0068ad";
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.borderBottom = `4px solid #91CD95`;
                              Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                (el) => ((el as HTMLElement).style.color = "#ffffff")
                              );
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#1A2636";
                              e.currentTarget.style.borderBottom = "";
                              Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                (el) => ((el as HTMLElement).style.color = "")
                              );
                            }}
                          >
                            {item.label}
                          </NavigationMenuTrigger>

                          {/* Dropdown positioned directly under parent tab */}
                          <NavigationMenuContent
                            onMouseEnter={enterNav}
                            onMouseLeave={leaveNav}
                            className="absolute left-0 mt-2 z-50 min-w-[350px]"
                            style={{
                              minWidth: 350,
                              width: 'max-content',
                            }}
                          >
                            <ul className="flex flex-col gap-1 p-4 min-w-[350px]">
                              {item.subItems.map((sub) => {
                                const isSubActive = isActive(sub.href);
                                return (
                                  <li key={sub.label}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        ref={(el) => { if (el) itemRefs.current[sub.href] = el; }}
                                        to={sub.href}
                                        className={cn(
                                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none w-full text-left transition-none font-bold",
                                          isSubActive ? "bg-[#0068ad] text-white border-b-4 border-[#91CD95]" : textColor
                                        )}
                                        style={{
                                          transition: "color 0.2s, background 0.2s, border-bottom 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = "#0068ad";
                                          e.currentTarget.style.color = "#ffffff";
                                          e.currentTarget.style.borderBottom = `4px solid ${armadaGreen}`;
                                          Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                            (el) => ((el as HTMLElement).style.color = "#ffffff")
                                          );
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = "transparent";
                                          e.currentTarget.style.color = "#1A2636";
                                          e.currentTarget.style.borderBottom = "";
                                          Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                            (el) => ((el as HTMLElement).style.color = "")
                                          );
                                        }}
                                      >
                                        <div className="text-base font-bold leading-none">
                                          {sub.label}
                                        </div>
                                        {sub.description && (
                                          <p className="line-clamp-2 text-xs leading-snug font-normal">
                                            {sub.description}
                                          </p>
                                        )}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            ref={(el) => { if (el) itemRefs.current[item.href] = el; }}
                            to={item.href}
                            className={cn(
                              "group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-2 py-2 text-base font-bold transition-none",
                              isItemActive
                                ? "bg-[#0068ad] text-white border-b-4 border-[#91CD95]"
                                : textColor
                            )}
                            style={{
                              transition: "color 0.2s, border-bottom 0.2s, background 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#0068ad";
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.borderBottom = `4px solid #91CD95`;
                              Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                (el) => ((el as HTMLElement).style.color = "#ffffff")
                              );
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#1A2636";
                              e.currentTarget.style.borderBottom = "";
                              Array.from(e.currentTarget.querySelectorAll("*")).forEach(
                                (el) => ((el as HTMLElement).style.color = "")
                              );
                            }}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </div>
          </NavigationMenu>

          {/* Desktop Socials */}
          <div className="hidden lg:flex items-center gap-4 ml-3">
            <SocialLink href="https://x.com/ArmadaCRB" />
            <SocialLink
              icon={Linkedin}
              href="https://ug.linkedin.com/company/armada-credit-bureau"
            />
            <SocialLink icon={Instagram} href="#" />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-[#1A2636]"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-2">
                    <img
                      src="/armada-logo.png"
                      alt="Armada"
                      className="w-24 h-24 object-contain"
                    />
                    <span className="text-xl font-bold text-[#1A2636]">
                      ARMADA
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <Collapsible
                        open={openMobileDropdowns.includes(item.label)}
                        onOpenChange={() => toggleMobileDropdown(item.label)}
                      >
                        <CollapsibleTrigger
                          className={cn(
                            "flex w-full items-center justify-between py-3 px-3 font-bold text-base rounded-md",
                            textColor,
                            "transition-none",
                            isActive(item.href) && activeColor,
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-10500",
                              openMobileDropdowns.includes(item.label) &&
                                "rotate-180",
                            )}
                          />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="pl-4 pt-1 pb-3">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className={cn(
                                "block py-2.5 px-3 text-base font-bold rounded-md",
                                "transition-none",
                                isActive(sub.href)
                                  ? activeColor
                                  : "text-muted-foreground",
                              )}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "block py-3 px-3 font-bold text-base rounded-md",
                          textColor,
                          "transition-none",
                          isActive(item.href) && activeColor,
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Socials */}
              <div className="flex justify-center gap-6 mt-10 pt-6 border-t ml-2">
                <SocialLink href="https://x.com/ArmadaCRB" />
                <SocialLink
                  icon={Linkedin}
                  size={20}
                  href="https://ug.linkedin.com/company/armada-credit-bureau"
                />
                <SocialLink icon={Instagram} size={20} href="#" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Updated SocialLink with brand colors
function SocialLink({
  icon: Icon,
  size = 20,
  href = "#",
}: {
  icon?: any;
  size?: number;
  href?: string;
}) {
  const isX = href.includes("x.com");

  let iconColor = '#6B7280'; // fallback muted gray

  if (isX) {
    iconColor = '#000000';
  } else if (Icon === Linkedin) {
    iconColor = '#0A66C2';
  } else if (Icon === Instagram) {
    iconColor = '#E4405F';
  }

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="transition-none"
      style={{ color: iconColor }}
    >
      {isX ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="X (formerly Twitter)"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <Icon className={`w-${size/4} h-${size/4}`} /> // Adjust class for size
      )}
    </a>
  );
}