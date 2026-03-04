import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Background images
import hero1 from "@/assets/young team.png";
import hero2 from "@/assets/credit_report.png";
import hero3 from "@/assets/analytics_african_men1.png";
import hero4 from "@/assets/women_standing.png";
import hero5 from "@/assets/risk_int.png";
import hero6 from "@/assets/lady and the guy final.png";
import hero7 from "@/assets/welcome6.png";

// Separate clean logo (only used on welcome slide)
import armadaLogo from "@/assets/armada-logo-whitewords.png";

const slides = [
  {
    title: "",
    subtitle: "We are global leaders in credit reporting and analytics",
    cta: "View Now",
    link: "/AboutArmada",
    image: hero1,
  },
  {
    title: "ArmadaScore®",
    subtitle:
      "Our predictive scoring module delivers a high-precision measure of credit risk, empowering lenders to anticipate borrower behavior and minimize default exposure with confidence.",
    cta: "View Now",
    link: "/armadascore",
    image: hero6,
  },
  {
    title: "Credit & Risk Reports",
    subtitle:
      "Our predictive score module makes it possible for creditors to access risk reports about credit applicants",
    cta: "View Now",
    link: "/product-suites/credit-reports",
    image: hero2,
  },
  {
    title: "Analytics",
    subtitle:
      "With our analytics services, you will get more insight from data while learning more about prevailing trends",
    cta: "View More",
    link: "/product-suites/analytics",
    image: hero3,
  },
  {
    title: "Credit Education &\nFinancial Literacy",
    subtitle:
      "Credit education is key to building a healthy credit culture. Learn more about credit today",
    cta: "View More",
    link: "/credit-education",
    image: hero4,
  },
  {
    title: "Business Intelligence &\nInsights Reports",
    subtitle:
      "Our risk intelligence module provides insights into credit risk factors and trends",
    cta: "View More",
    link: "#",
    image: hero5,
  },
];

// Pre-compute random positions ONCE outside the component
// Previously Math.random() ran on every render causing layout jank
const logoPieces = Array.from({ length: 9 }, (_, id) => ({
  id,
  row: Math.floor(id / 3),
  col: id % 3,
  delay: id * 0.07,
  // Stable random values — computed once at module load, never again
  randomX: (Math.random() - 0.5) * 800,
  randomY: (Math.random() - 0.5) * 800,
  randomRotate: (Math.random() - 0.5) * 360,
}));

// Preload the next slide's image before it's needed
function useImagePreloader(currentIndex: number) {
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentIndex]);
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Preload next slide image
  useImagePreloader(currentSlide);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const isWelcomeSlide = currentSlide === 0;

  return (
    <section
      className="hero-section h-[400px] sm:h-[450px] md:h-[500px] lg:h-[512px] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/*  Only render current + adjacent slides (not all 7 at once)
          - Current slide: fully visible
          - Prev/next: preloaded but invisible (opacity-0) for smooth crossfade
          - All others: not in the DOM at all
      */}
      {slides.map((slide, index) => {
        const isVisible = index === currentSlide;
        const isAdjacent =
          index === (currentSlide + 1) % slides.length ||
          index === (currentSlide - 1 + slides.length) % slides.length;

        if (!isVisible && !isAdjacent) return null;

        return (
          <motion.img
            key={index}
            src={slide.image}
            alt={slide.title || "Hero image"}
            initial={false}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            //   Only the first image loads eagerly; rest are lazy
            loading={index === 0 ? "eager" : "lazy"}
            //  fetchpriority hint for LCP image
            {...(index === 0 ? { fetchPriority: "high" } : {})}
            decoding={index === 0 ? "sync" : "async"}
            aria-hidden={!isVisible}
          />
        );
      })}

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 bg-black/4 md:bg-black/4 z-[3]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-28 h-full flex items-center">
        <div className="max-w-4xl w-full animate-fade-in">
          {isWelcomeSlide ? (
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide text-white mb-1 sm:mb-2 text-left">
                Welcome to
              </h2>

              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto md:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 blur-3xl -z-10 rounded-3xl" />

                {/*  Single logo image with CSS clip-path animation
                    instead of 9 separate <img> tags for the same image
                */}
                <div className="relative w-full aspect-[420/120]">
                  {logoPieces.map((piece) => (
                    <motion.div
                      key={piece.id}
                      initial={{
                        x: piece.randomX,
                        y: piece.randomY,
                        rotate: piece.randomRotate,
                        opacity: 0,
                        scale: 0.3,
                      }}
                      animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: piece.delay,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `inset(${piece.row * 33.33}% ${(2 - piece.col) * 33.33}% ${(2 - piece.row) * 33.33}% ${piece.col * 33.33}%)`,
                        willChange: "transform, opacity", //  GPU hint for animated elements
                      }}
                    >
                      <img
                        src={armadaLogo}
                        alt=""
                        className="w-full h-full object-contain drop-shadow-2xl"
                        draggable={false}
                        loading="eager"
                        fetchPriority="high"
                        decoding="sync"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Shimmer effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-primary-foreground max-w-xl mx-auto md:mx-0 text-center md:text-left px-2 sm:px-0"
              >
                {slides[0].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                className="flex items-center gap-6 justify-center md:justify-start"
              >
                <Link
                  to={slides[0].link}
                  className="btn-secondary flex items-center gap-2 group px-6 py-3 text-sm sm:text-base"
                >
                  {slides[0].cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ) : (
            //AnimatePresence for smooth text transitions between slides
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
                  {slides[currentSlide].title.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i !== arr.length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left line-clamp-3 sm:line-clamp-none px-2 sm:px-0">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <Link
                    to={slides[currentSlide].link}
                    className="btn-secondary flex items-center gap-2 group px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center hover:bg-primary-foreground/20 transition-all text-primary-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary-foreground w-6 sm:w-8"
                  : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;