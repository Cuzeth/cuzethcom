"use client"

import ProjectCard from '../ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';

// Define the Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  image: any;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
              reverse={index % 2 === 1}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}