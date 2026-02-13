import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, easeOut, easeInOut } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  FileText,
  Shield,
  Upload,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Clock,
  FileCheck,
  Send,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/DisputeResolution.jpg";
import LiveChatWidget from "@/components/LiveChat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DisputeResolution = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reportReference: "",
    disputeNature: "",
    attachments: null as File | null,
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      reportReference: "",
      disputeNature: "",
      attachments: null,
    });
    setFileName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFormData({ ...formData, attachments: e.target.files[0] });
    }
  };

  // Hover expand variants (unchanged)
  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 10px 30px rgba(0, 102, 171, 0.08)",
      transition: { duration: 0.5, ease: easeOut },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0 30px 70px rgba(20, 177, 231, 0.25)",
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  // Gentle floating animation (unchanged)
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero – overlay removed, fixed background added */}
      {/* Hero – reduced height + better positioning to avoid heavy cropping */}
<section
  className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center top",     // shows more of the top / subjects (most common fix for cropping faces)
    // If still cropped too much, try these alternatives one by one:
    // backgroundPosition: "50% 25%",
    // backgroundPosition: "center 30%",
  }}
>
  {/* No overlay – clean image */}

  <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-white/90 text-sm uppercase tracking-wider mb-4 drop-shadow-md">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-semibold">Dispute Resolution</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
        Dispute Resolution Form
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#form"
          className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full shadow-md group transition-colors"
        >
          Submit Dispute Now
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="tel:0800280180"
          className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all text-base"
        >
          <Phone className="w-5 h-5" />
          Need Help? Call Us
        </a>
      </div>
    </div>
  </div>
</section>

        {/* 3D Expand-on-Hover Card – unchanged */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="relative perspective-1000 cursor-pointer"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                onClick={() => {
                  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="bg-background rounded-3xl shadow-2xl border border-muted/50 overflow-hidden p-8 md:p-12 text-center relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={floatVariants}
                    animate="float"
                  >
                    <Shield className="absolute top-8 left-8 w-24 h-24 md:w-28 md:h-28 text-secondary/15" />
                   
                  </motion.div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-6 mx-auto">
                      <Shield className="w-10 h-10 text-secondary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5">
                      If you have noticed erroneous information
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                      In your credit information report, please use the form below to log a dispute.
                    </p>

                    <div className="inline-flex items-center gap-3 px-7 py-4 bg-secondary/10 rounded-full text-secondary font-semibold hover:bg-secondary/20 transition-colors group">
                      Click to Log a Dispute
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust facts – unchanged */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Resolution Time</p>
                  <p className="text-sm text-muted-foreground">14 Working Days</p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Secure & Encrypted</p>
                  <p className="text-sm text-muted-foreground">End-to-End Protection</p>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <FileCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-bold text-foreground">Regulated</p>
                  <p className="text-sm text-muted-foreground">Bank of Uganda Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form – unchanged */}
        <section id="form" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">Official Dispute</span>
                <h2 className="section-title-dark mb-4">Submit Your Dispute</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Provide details below. All submissions are secure and handled in compliance with regulatory standards.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Dispute Submitted Successfully</h4>
                    <p className="text-sm text-muted-foreground">
                      Reference: #DR-{Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}<br />
                      We will contact you within 5-7 business days.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10 bg-background rounded-2xl shadow-xl p-8 md:p-10 border border-muted">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" /> Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Dispute Details */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-secondary" /> Dispute Details
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Credit Report Reference Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="reportReference"
                        value={formData.reportReference}
                        onChange={handleChange}
                        required
                        placeholder="e.g., CRB-12345678"
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nature of Dispute <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="disputeNature"
                        value={formData.disputeNature}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe the inaccurate information in detail..."
                        className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <Upload className="w-5 h-5 text-secondary" /> Supporting Documents
                  </h3>
                  <label
                    htmlFor="dispute-upload"
                    className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-muted rounded-xl py-8 px-5 cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all group"
                  >
                    <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all">
                      <Upload className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div className="text-center">
                      <p className="text-foreground font-semibold group-hover:text-secondary text-sm">
                        {fileName || "Upload Evidence / Supporting Letters"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, JPG, PNG • Max 5MB
                      </p>
                    </div>
                    <input
                      id="dispute-upload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-base group shadow-md"
                  >
                    Submit Dispute Request
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                <p>
                  All disputes are handled confidentially and in full compliance with Bank of Uganda guidelines and Uganda's Data Protection Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA – standardized with navy overlay + StatsSection style */}
     {/* Compact Bottom CTA – reduced padding, smaller text, tighter layout */}
<section
  className="py-12 md:py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{ backgroundColor: "rgba(0, 30, 121, 0.77)" }}
  />

  <div className="container mx-auto px-4 relative z-10 text-center">
    <div className="max-w-3xl mx-auto">
      {/* Smaller accent lines */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
        <span className="text-white font-bold text-sm tracking-wide uppercase">
          Need Help?
        </span>
        <div className="h-0.5 w-8 bg-[#91CD95]"></div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Need Assistance with Your Dispute?
      </h2>

      <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
        Contact our team for help with submission or tracking.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:0800280180"
          className="inline-flex items-center justify-center gap-2 bg-[#91CD95] hover:bg-[#7ab87e] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-md"
        >
          <Phone className="w-5 h-5" />
          Call 0800 280 180
        </a>

        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full font-semibold text-base transition-colors backdrop-blur-sm border border-white/30"
        >
          <span>Contact Support</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowRight} className="text-[#91CD95] text-base" />
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default DisputeResolution;