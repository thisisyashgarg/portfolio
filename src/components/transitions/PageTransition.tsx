
import React, { useEffect } from "react";
import { initRevealOnScroll } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    // Initialize reveal animations
    const observer = initRevealOnScroll();
    
    // Cleanup observer on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

export default PageTransition;
