'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import styles from './ModernHomepage.module.css';
import logo from '../../../public/images/CuzethFlat.svg';
import { HiOutlineCommandLine, HiOutlineSparkles, HiOutlineBookOpen } from "react-icons/hi2";

export default function ModernHomepage() {
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
    { name: "Password Generator", link: "/mywork" },
    { name: "QR Code Generator", link: "/mywork" },
    { name: "URL Shortener", link: "/mywork" },
    { name: "Tetris Solver", link: "/mywork" },
    { name: "Da Boiz Bot", link: "/daboiz" }
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <AnimateOnScroll animation="animate-slide-up" threshold={0.2}>
                <h1 className={styles.heroTitle}>
                  Hey, I&apos;m <span className={styles.accent}>Cuzeth</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-slide-up" delay="0.2s" threshold={0.2}>
                <p className={styles.heroSubtitle}>
                  A passionate developer creating modern digital experiences with clean,
                  efficient code and thoughtful design.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-slide-up" delay="0.4s" threshold={0.2}>
                <div className={styles.heroActions}>
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
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="animate-float" delay="0.6s" threshold={0.2}>
              <div className={styles.heroVisual}>
                <div className={styles.logoContainer}>
                  <Image src={logo} alt="Cuzeth Logo" className={styles.logo} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <AnimateOnScroll animation="animate-slide-up" threshold={0.1}>
            <h2 className={styles.sectionTitle}>
              What I Do
            </h2>
          </AnimateOnScroll>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinks}>
        <div className={styles.container}>
          <AnimateOnScroll animation="animate-slide-up" threshold={0.1}>
            <h2 className={styles.sectionTitle}>
              Explore My Projects
            </h2>
          </AnimateOnScroll>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectLink
                key={project.name}
                project={project}
                index={index}
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

function FeatureCard({ feature, index }: {
  feature: { title: string; description: string; icon: React.ReactNode };
  index: number;
}) {
  return (
    <AnimateOnScroll 
      animation="animate-scale-in" 
      delay={`${index * 0.2}s`} 
      threshold={0.1}
    >
      <div className={`${styles.featureCard} animate-on-hover`}>
        <div className={styles.featureIcon}>{feature.icon}</div>
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
    </AnimateOnScroll>
  );
}

function ProjectLink({ project, index }: {
  project: { name: string; link: string };
  index: number;
}) {
  return (
    <AnimateOnScroll 
      animation="animate-slide-left" 
      delay={`${index * 0.1}s`} 
      threshold={0.1}
    >
      <Link
        href={project.link}
        className={`${styles.projectLink} animate-on-hover`}
      >
        <span className={styles.projectName}>{project.name}</span>
        <span className={styles.projectArrow}>→</span>
      </Link>
    </AnimateOnScroll>
  );
}