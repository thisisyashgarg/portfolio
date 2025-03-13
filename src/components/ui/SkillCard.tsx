
import React from "react";

interface SkillCardProps {
  skillName: string;
  skillIcon: string;
  index: number;
}

// This component is no longer in use since we've switched to skill badges
const SkillCard: React.FC<SkillCardProps> = ({ skillName, skillIcon, index }) => {
  return (
    <div 
      className="stagger-item flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <img
          src={skillIcon}
          alt={`${skillName} logo`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm font-medium text-center">{skillName}</h3>
    </div>
  );
};

export default SkillCard;
