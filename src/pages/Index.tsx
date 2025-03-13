
import { useEffect } from "react";
import PageTransition from "@/components/transitions/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Yash Garg | Full Stack Developer";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          {/* <Contact /> */}
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
