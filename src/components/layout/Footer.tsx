
import data from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 mt-16 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{data.name}</h3>
            {/* <p className="text-sm text-muted-foreground max-w-md">
              Full-stack developer specializing in building exceptional digital experiences with a focus on performance and user experience.
            </p> */}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={`mailto:${data.social.email}`}
                className="transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Navigation</h4>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                {/* <a href="#about" className="hover:text-primary transition-colors">About</a> */}
                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                {/* <a href="#contact" className="hover:text-primary transition-colors">Contact</a> */}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Links</h4>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <a
                  href={data.experience.companies[0].websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>{data.experience.companies[0].name}</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={data.experience.companies[1].websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>{data.experience.companies[1].name}</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={data.projects[0].websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>{data.projects[0].title}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} {data.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
