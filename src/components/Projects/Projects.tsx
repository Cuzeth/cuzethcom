"use client"

import ProjectCard from '../ProjectCard/ProjectCard';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';

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
  return (
    <section className="py-16">
      <div className="container">
        <AnimateOnScroll animation="animate-slide-up" threshold={0.2}>
          <h2 
            className="text-4xl font-bold text-center mb-12" 
            style={{ color: 'var(--heading)' }}
          >
            My Projects
          </h2>
        </AnimateOnScroll>
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
  return (
    <AnimateOnScroll 
      animation="animate-scale-in" 
      delay={`${index * 0.1}s`} 
      threshold={0.1}
    >
      <div className="animate-on-hover">
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
    </AnimateOnScroll>
  );
}