
import { useState } from "react";
import data from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags
  const allTags = Array.from(
    new Set(
      data.projects.flatMap(project => project.tags)
    )
  ).slice(0, 8); // Limit to 8 filters
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? data.projects.filter(project => project.tags.includes(filter))
    : data.projects;

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Featured Projects
          </h2>
          {/* <p className="text-muted-foreground">
            A collection of my work that showcases my skills and experience.
          </p> */}
        </div>
        
        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          <button
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              filter === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/70'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                filter === tag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/70'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              tags={project.tags}
              codeLink={project.codeLink}
              websiteLink={project.websiteLink}
              androidAppLink={project.androidAppLink}
              screenshots={project.screenshots}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
