'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { useInView, useInViewMultiple } from '@/hooks/useInView';
import styles from './ModernHomepage.module.css';
import logo from '../../../public/images/CuzethFlat.svg';
import { HiOutlineCommandLine, HiOutlineSparkles, HiOutlineBookOpen } from "react-icons/hi2";

export default function ModernHomepage() {
  // Individual section observers
  const heroSection = useInView({ threshold: 0.2 });
  const featuresSection = useInView({ threshold: 0.1 });
  const projectsSection = useInView({ threshold: 0.1 });

  const features = [
    {
      title: "Developer",
      description: "Building modern web applications with cutting-edge technologies",
      icon: <HiOutlineCommandLine />
    },
    {
      title: "Creator",
      description: "Crafting digital experiences that make a difference",
      icon: <HiOutlineSparkles />
    },
    {
      title: "Student",
      description: "Always learning and exploring new possibilities in tech",
      icon: <HiOutlineBookOpen />
    }
  ];

  const projects = [
    { name: "Password Generator", link: "/mywork", delay: "0.1s" },
    { name: "QR Code Generator", link: "/mywork", delay: "0.2s" },
    { name: "URL Shortener", link: "/mywork", delay: "0.3s" },
    { name: "Tetris Solver", link: "/mywork", delay: "0.4s" },
    { name: "Da Boiz Bot", link: "/daboiz", delay: "0.5s" }
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroSection.ref}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={`${styles.heroTitle} ${heroSection.isInView ? 'animate-slide-up' : ''}`}>
                Hey, I&apos;m <span className={styles.accent}>Cuzeth</span>
              </h1>

              <p className={`${styles.heroSubtitle} ${heroSection.isInView ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                A passionate developer creating modern digital experiences with clean,
                efficient code and thoughtful design.
              </p>

              <div className={`${styles.heroActions} ${heroSection.isInView ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                <Link href="/mywork">
                  <Button buttonSize="btn--large" buttonColor="red" className="animate-on-hover">
                    View My Work
                  </Button>
                </Link>
                <Link href="/about">
                  <Button buttonSize="btn--large" buttonColor="primary" className="animate-on-hover">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            <div className={`${styles.heroVisual} ${heroSection.isInView ? 'animate-float' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.logoContainer}>
                <Image src={logo} alt="Cuzeth Logo" className={styles.logo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} ref={featuresSection.ref}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${featuresSection.isInView ? 'animate-slide-up' : ''}`}>
            What I Do
          </h2>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                featuresInView={featuresSection.isInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinks} ref={projectsSection.ref}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${projectsSection.isInView ? 'animate-slide-up' : ''}`}>
            Explore My Projects
          </h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectLink
                key={project.name}
                project={project}
                index={index}
                projectsInView={projectsSection.isInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className={styles.cta}>
        <div className={styles.container}>
          <div className={`${styles.ctaContent} ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '1.2s' }}>
            <h2 className={styles.ctaTitle}>Let's Build Something Amazing</h2>
            <p className={styles.ctaDescription}>
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
            <div className={styles.ctaActions}>
              <a href="mailto:cuz@cuzeth.com">
                <Button buttonSize="btn--large" buttonColor="red" className="animate-on-hover">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

function FeatureCard({ feature, index, featuresInView }: {
  feature: { title: string; description: string; icon: React.ReactNode };
  index: number;
  featuresInView: boolean;
}) {
  const cardRef = useInView({ threshold: 0.1 });

  return (
    <div
      ref={cardRef.ref}
      className={`${styles.featureCard} ${cardRef.isInView ? 'animate-scale-in' : ''} animate-on-hover`}
      style={{ animationDelay: cardRef.isInView ? `${index * 0.2}s` : '0s' }}
    >
      <div className={styles.featureIcon}>{feature.icon}</div>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDescription}>{feature.description}</p>
    </div>
  );
}

function ProjectLink({ project, index, projectsInView }: {
  project: { name: string; link: string; delay: string };
  index: number;
  projectsInView: boolean;
}) {
  const linkRef = useInView<HTMLAnchorElement>({ threshold: 0.1 });

  return (
    <Link
      ref={linkRef.ref}
      href={project.link}
      className={`${styles.projectLink} ${linkRef.isInView ? 'animate-slide-left' : ''} animate-on-hover`}
      style={{ animationDelay: linkRef.isInView ? `${index * 0.1}s` : '0s' }}
    >
      <span className={styles.projectName}>{project.name}</span>
      <span className={styles.projectArrow}>→</span>
    </Link>
  );
}