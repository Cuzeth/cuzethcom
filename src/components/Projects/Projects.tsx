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
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up" style={{ color: 'var(--heading)' }}>
          My Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`animate-scale-in animate-on-hover`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
                reverse={index % 2 === 1}
                index={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}