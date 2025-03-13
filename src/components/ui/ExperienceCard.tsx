
import React from "react";
import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  name: string;
  description: string;
  tenure: string;
  websiteLink: string;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  name,
  description,
  tenure,
  websiteLink,
  index,
}) => {
  return (
    <div className="stagger-item border rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{tenure}</p>
          </div>
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Visit ${name} website`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-muted-foreground flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
