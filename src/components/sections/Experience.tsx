
import data from "@/lib/constants";
import ExperienceCard from "@/components/ui/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            {data.experience.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            My professional journey
          </h2>
          {/* <p className="text-muted-foreground">
            I've had the privilege of working with diverse teams on various projects, 
            each contributing to my growth as a developer.
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.experience.companies.map((company, index) => (
            <ExperienceCard
              key={`${company.name}-${index}`}
              name={company.name}
              description={company.description}
              tenure={company.tenure}
              websiteLink={company.websiteLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
