
import data, { PROFILE_PIC } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { scrollToElement } from "@/lib/animations";
import { RESUME_LINK } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-80 pointer-events-none" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left reveal">
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-subtle"></span>
              Available for freelance work
            </div> */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="text-primary">{data.name}</span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                <span className="inline-block">Full Stack Developer</span>
              </span>
            </h1>
            
            {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I build exceptional and accessible digital experiences for the web, with a focus on performance and user experience.
            </p> */}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement("contact");
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                Get in touch
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex gap-5 mt-8 justify-center lg:justify-start">
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`mailto:${data.social.email}`}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center reveal">
            <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full bg-gradient-to-br from-background to-secondary/50 p-1">
              <img
                src={PROFILE_PIC}
                alt={data.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("about");
            }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={18} className="text-secondary-foreground" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
