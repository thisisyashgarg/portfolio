
import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeLink: string;
  websiteLink: string;
  androidAppLink?: string;
  screenshots: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  codeLink,
  websiteLink,
  androidAppLink,
  screenshots,
  index,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (screenshots.length <= 1) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    if (screenshots.length <= 1) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="stagger-item rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {screenshots.length > 0 && (
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={screenshots[currentImageIndex]}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover object-top transition-opacity duration-500"
              loading="lazy"
            />
          </div>
          
          {screenshots.length > 1 && (
            <>
              <button 
                onClick={goToPrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
              
              {/* Image indicator */}
              {screenshots.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {screenshots.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span 
              key={`${tag}-${idx}`}
              className="text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-2">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} />
              Visit
            </a>
          )}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-1.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          {androidAppLink && (
            <a
              href={androidAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium rounded-md px-3 py-1.5 bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
            >
              <span>Android App</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
