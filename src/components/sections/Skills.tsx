
import data from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Skills & Technologies
          </h2>
          {/* <p className="text-muted-foreground">
            These are the technologies I've worked with and am proficient in.
          </p> */}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {data.skills.map((skill, index) => (
            <div 
              key={`${skill.skillName}-${index}`}
              className="stagger-item"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {skill.skillName}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
