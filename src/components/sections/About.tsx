
import React from "react";
import data from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute right-0 top-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-secondary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            {data.about.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Crafting digital experiences with precision & passion
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
