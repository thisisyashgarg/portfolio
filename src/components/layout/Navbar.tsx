
import { useState, useEffect } from "react";
import { scrollToElement } from "@/lib/animations";
import data, { RESUME_LINK } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* <div className="flex items-center">
            <a 
              href="#hero" 
              className="text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("hero");
              }}
            >
              Home
            </a>
          </div> */}
          <div></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
           
            <a 
              href="#experience" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("experience");
              }}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("skills");
              }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-sm hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("projects");
              }}
            >
              Projects
            </a>
           
            <a 
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-primary z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`
        fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 transform
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          <a 
            href="#about" 
            className="text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("experience");
            }}
          >
            Experience
          </a>
          <a 
            href="#skills" 
            className="text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("skills");
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
          <a 
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-primary text-primary-foreground mt-4"
          >
            <Download size={16} />
            Resume
          </a>

          <div className="flex items-center space-x-6 mt-8">
            <a 
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={data.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={`mailto:${data.social.email}`}
              className="hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
