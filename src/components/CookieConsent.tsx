"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { Button } from "./ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg mb-2">🍪 We Value Your Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking
                    &quot;Accept&quot;, you consent to our use of cookies. Read
                    our{" "}
                    <a href="/terms" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    to learn more.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 w-full md:w-auto flex-shrink-0">
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    size="sm"
                    className="flex-1 md:flex-none"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={acceptCookies}
                    size="sm"
                    className="flex-1 md:flex-none"
                  >
                    Accept All
                  </Button>
                </div>

                {/* Close button */}
                <button
                  onClick={declineCookies}
                  className="absolute top-4 right-4 md:relative md:top-0 md:right-0 p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
