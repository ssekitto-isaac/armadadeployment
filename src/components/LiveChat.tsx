import React, { useState } from "react";
import { MessageSquare, X, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    const templateParams = {
      email: email,
      message: message,
      timestamp: new Date().toLocaleString(),
      // You can add more fields if your template uses them
    };

    try {
      await emailjs.send(
        "service_9iib0d6",       // ← from Email Services (e.g. "service_abc123")
        "template_u4idv26",      // ← from Email Templates (e.g. "template_xyz789")
        templateParams,
        "KcCmfCQ7VOA2kkQ-y"        // ← your User ID from dashboard (public key)
      );

      setStatus("success");
      alert("Thank you! Your message has been sent. We'll get back to you soon.");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsOpen(false), 1500); // optional: close after success
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      alert("Sorry, something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary text-primary-foreground flex items-center justify-center shadow-2xl hover:bg-secondary/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-secondary/30"
        aria-label="Open live chat"
      >
        <MessageSquare className="w-7 h-7" />
      </button>

      {/* Chat Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-sm bg-background rounded-2xl shadow-2xl border border-muted overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-5 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Live Chat Support</h3>
                  <p className="text-sm opacity-90">We are here to assist you</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm opacity-90">
                <Clock className="w-4 h-4" />
                <span>Typically responds in under 24 hours</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                Feel free to reach out! Please enter more info so we can better serve you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email here..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-muted focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-muted/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-secondary text-primary-foreground font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center text-sm mt-2">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center text-sm mt-2">
                    Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;