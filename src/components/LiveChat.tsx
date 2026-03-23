import { MessageSquare } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      minimize: () => void;
      toggle: () => void;
      showWidget: () => void;
      hideWidget: () => void;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const LiveChatWidget = () => {
  useEffect(() => {
    // Load Tawk.to script
    window.Tawk_API = window.Tawk_API || ({} as typeof window.Tawk_API);
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/69c0e81ff9cb571c377b5524/1jkcolf17"; // 👈 Replace these
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Hide the default Tawk.to bubble (we use our own)
    window.Tawk_API.onLoad = () => {
      window.Tawk_API?.hideWidget();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOpenChat = () => {
    window.Tawk_API?.showWidget();
    window.Tawk_API?.maximize();
  };

  return (
    <button
      onClick={handleOpenChat}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary text-primary-foreground flex items-center justify-center shadow-2xl hover:bg-secondary/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-secondary/30"
      aria-label="Open live chat"
    >
      <MessageSquare className="w-7 h-7" />
    </button>
  );
};

export default LiveChatWidget;