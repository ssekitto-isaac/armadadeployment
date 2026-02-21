import { useState } from "react";
import {
  FileText,
  Phone,
  Calendar,
  PenTool,
  Upload,
  CheckCircle2,
  ChevronRight,
  Shield,
  User,
  MapPin,
  CreditCard,
  Send,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChat";

import heroImage from "@/assets/men_armada.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SelfInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    idType: "",
    idNumber: "",
    idFile: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length > 50) {
      newErrors.firstName = "First name cannot exceed 50 characters";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "First name cannot contain numbers";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is too short";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length > 50) {
      newErrors.lastName = "Last name cannot exceed 50 characters";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Last name cannot contain numbers";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name is too short";
    }

    // Date of Birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
      }
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = "Full address is required";
    } else if (formData.address.trim().length < 5) {
      newErrors.address = "Address is too short";
    }

    // Country
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Phone number - only digits, max 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleaned = formData.phone.replace(/[^\d]/g, ""); // remove everything except digits
      if (cleaned.length === 0) {
        newErrors.phone = "Phone number must contain digits";
      } else if (cleaned.length > 10) {
        newErrors.phone = "Phone number cannot exceed 10 digits";
      } else if (cleaned.length < 9) {
        newErrors.phone = "Phone number is too short (min 9 digits)";
      }
    }

    // ID Type
    if (!formData.idType) {
      newErrors.idType = "Please select an ID type";
    }

    // ID Number / NIN
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID number is required";
    } else if (formData.idNumber.trim().length > 14) {
      newErrors.idNumber = "ID number cannot exceed 14 characters";
    }

    // File upload
    if (!formData.idFile) {
      newErrors.idFile = "Please upload a copy of your ID";
    } else {
      if (formData.idFile.size > 5 * 1024 * 1024) {
        newErrors.idFile = "File size must not exceed 5MB";
      }
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(formData.idFile.type)) {
        newErrors.idFile = "Only JPG, PNG or PDF files are allowed";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setTimeout(() => {
        const firstErrorField = document.querySelector(
          Object.keys(errors)[0]
            ? `input[name="${Object.keys(errors)[0]}"], select[name="${Object.keys(errors)[0]}"]`
            : "input"
        );
        firstErrorField?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);

    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      address: "",
      city: "",
      country: "",
      phone: "",
      idType: "",
      idNumber: "",
      idFile: null,
    });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, idFile: file });
      if (errors.idFile) {
        setErrors((prev) => ({ ...prev, idFile: "" }));
      }
    }
  };

  const processSteps = [
    {
      icon: FileText,
      title: "Complete Form",
      description: "Fill the Corporate Self Inquiry Request Form below.",
    },
    {
      icon: Phone,
      title: "Book Appointment",
      description: "Toll Free line 0800280180\nOffice line 0326301025",
    },
    {
      icon: Calendar,
      title: "Visit Our Office",
      description: "Arrive on time on date of appointment.",
    },
    {
      icon: PenTool,
      title: "Collect Report",
      description: "Collect Self Inquiry Report and sign for collection Note.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="hero-overlay absolute inset-0 bg-black/4 md:bg-black/4 z-[3]" />

          <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-28 h-full flex items-center">
            <div className="max-w-3xl ml-8">
              <div className="flex items-center gap-3 text-white/90 text-sm uppercase tracking-wider mb-4 drop-shadow-md">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="font-semibold">Self Inquiry</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Self Inquiry
              </h1>
              

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#form"
                  className="inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-[#91CD95] hover:bg-[#7ab87e] text-white rounded-full shadow-md group transition-colors"
                >
                  Start Request Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0800280180"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all text-base"
                >
                  <Phone className="w-5 h-5" />
                  Book via Phone
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 -mt-12 relative z-10 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              {/* <span className="section-label">Easy Process</span> */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                <span className="section-label text-xl font-heading font-bold text-foreground">Easy Process</span>
                <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
              </div>
              <h2 className="section-title-dark mb-4">How to Get Your Report</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to access your credit information securely.
              </p>
            </div>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`value-card group text-center flex flex-col justify-between h-full bg-background rounded-2xl p-6 relative
                    ${index < processSteps.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:top-1/2 md:after:-right-4 md:after:w-8 md:after:h-0.5 md:after:bg-[#91CD95] md:after:z-0' : ''}
                    ${index > 0 ? 'md:before:content-[""] md:before:absolute md:before:top-1/2 md:before:-left-4 md:before:w-8 md:before:h-0.5 md:before:bg-[#91CD95] md:before:z-0' : ''}
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <div className="text-xl font-heading font-bold mb-4 text-foreground">
                      Step {index + 1}
                    </div>

                    <div
                      className="mx-auto flex items-center justify-center mb-6 relative z-10"
                      style={{
                        background: "#91CD95",
                        borderRadius: "50%",
                        width: 96,
                        height: 96,
                        border: "3px solid #91CD95",
                      }}
                    >
                      <step.icon className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 min-h-[90px] text-sm leading-relaxed whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                  <span className="section-label text-xl font-heading font-bold text-foreground">Self Inquiry Request</span>
                  <div className="h-1 w-8 bg-secondary flex-shrink-0 translate-y-[-4px]"></div>
                </div>
                <h2 className="section-title-dark mb-4">Submit Your Request</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Provide accurate details below. All submissions are secure and compliant.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-start gap-5">
                  <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Request Submitted Successfully</h4>
                    <p className="text-sm text-muted-foreground">
                      Reference: #SI-{Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}<br />
                      Call 0800 280 180 to book collection appointment.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10 bg-background rounded-2xl shadow-xl p-8 md:p-10 border border-muted">
                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" /> Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.dateOfBirth ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
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
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" /> Residential Address
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Address (No P.O. Box) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.address ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.country ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                        />
                        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={15}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Identification */}
                <div>
                  <h3 className="text-lg font-heading font-bold mb-5 flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-secondary" /> Identification
                  </h3>
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          ID Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="idType"
                          value={formData.idType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.idType ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background appearance-none cursor-pointer`}
                        >
                          <option value="">Select ID Type</option>
                          <option value="national-id">National ID</option>
                          <option value="passport">Passport</option>
                          <option value="drivers-license">Driver's License</option>
                          <option value="financial-card">Financial Card</option>
                        </select>
                        {errors.idType && <p className="mt-1 text-sm text-red-600">{errors.idType}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          ID Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          maxLength={15}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.idNumber ? "border-red-500 ring-1 ring-red-500/30" : "border-muted"} focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-background`}
                        />
                        {errors.idNumber && <p className="mt-1 text-sm text-red-600">{errors.idNumber}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Upload Copy of Valid ID <span className="text-red-500">*</span>
                      </label>
                      <label
                        htmlFor="id-upload"
                        className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl py-8 px-5 cursor-pointer transition-all group ${
                          errors.idFile
                            ? "border-red-500 bg-red-50/30"
                            : "border-muted hover:border-secondary hover:bg-secondary/5"
                        }`}
                      >
                        <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all">
                          <Upload className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                        </div>
                        <div className="text-center">
                          <p className={`text-foreground font-semibold group-hover:text-secondary text-sm ${formData.idFile ? "text-green-600" : ""}`}>
                            {formData.idFile ? formData.idFile.name : "Upload Evidence / Supporting Letters"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, JPG, PNG • Max 5MB
                          </p>
                        </div>
                        <input
                          id="id-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      {errors.idFile && <p className="mt-2 text-sm text-red-600">{errors.idFile}</p>}
                      {formData.idFile && !errors.idFile && (
                        <p className="mt-2 text-xs text-green-600">
                          File selected: {(formData.idFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 text-base group shadow-md"
                  >
                    Submit Your Request
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>

              <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground text-center text-sm">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                <p>
                  All requests are handled confidentially and in full compliance with Bank of Uganda guidelines and Uganda's Data Protection Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#91CD95]" />
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  Need Help?
                </span>
                <div className="h-0.5 w-8 bg-[#91CD95]" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Assistance with Your Self Inquiry?
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Our team is ready to guide you through the process or help book your appointment.
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
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[#91CD95] text-base"
                    />
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

export default SelfInquiry;