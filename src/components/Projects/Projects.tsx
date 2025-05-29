"use client"

import ProjectCard from '../ProjectCard/ProjectCard';
import { useInView, useInViewMultiple } from '@/hooks/useInView';

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
  const titleSection = useInView({ threshold: 0.2 });

  return (
    <section className="py-16">
      <div className="container">
        <h2 
          ref={titleSection.ref}
          className={`text-4xl font-bold text-center mb-12 ${titleSection.isInView ? 'animate-slide-up' : ''}`} 
          style={{ color: 'var(--heading)' }}
        >
          My Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectWrapper
              key={project.id}
              project={project}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectWrapper({ project, index, reverse }: { project: Project; index: number; reverse: boolean }) {
  const projectRef = useInView({ threshold: 0.1 });
  
  return (
    <div
      ref={projectRef.ref}
      className={`${projectRef.isInView ? 'animate-scale-in' : ''} animate-on-hover`}
      style={{ animationDelay: projectRef.isInView ? `${index * 0.1}s` : '0s' }}
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        image={project.image}
        technologies={project.technologies}
        liveLink={project.liveLink}
        repoLink={project.repoLink}
        reverse={reverse}
        index={index + 1}
      />
    </div>
  );
}