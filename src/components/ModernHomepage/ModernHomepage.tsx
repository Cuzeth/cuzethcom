'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import styles from './ModernHomepage.module.css';
import logo from '../../../public/images/Logo.svg';

export default function ModernHomepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Developer",
      description: "Building modern web applications with cutting-edge technologies",
      icon: "💻"
    },
    {
      title: "Creator",
      description: "Crafting digital experiences that make a difference",
      icon: "✨"
    },
    {
      title: "Student",
      description: "Always learning and exploring new possibilities in tech",
      icon: "📚"
    }
  ];

  const projects = [
    { name: "Password Generator", link: "/mywork", delay: "0.1s" },
    { name: "URL Shortener", link: "/mywork", delay: "0.2s" },
    { name: "Tetris Solver", link: "/mywork", delay: "0.3s" },
    { name: "Da Boiz Bot", link: "/daboiz", delay: "0.4s" }
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={`${styles.badge} animate-fade-in`}>
                <span>👋</span>
                <span>Welcome to my portfolio</span>
              </div>

              <h1 className={`${styles.heroTitle} ${isVisible ? 'animate-slide-up' : ''}`}>
                Hey, I'm <span className={styles.accent}>Cuzeth</span>
              </h1>

              <p className={`${styles.heroSubtitle} ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                A passionate developer creating modern digital experiences with clean,
                efficient code and thoughtful design.
              </p>

              <div className={`${styles.heroActions} ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
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

            <div className={`${styles.heroVisual} ${isVisible ? 'animate-float' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.logoContainer}>
                <Image src={logo} alt="Cuzeth Logo" className={styles.logo} />
                <div className={styles.logoGlow}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible ? 'animate-slide-up' : ''}`}>
            What I Do
          </h2>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${styles.featureCard} ${isVisible ? 'animate-scale-in' : ''} animate-on-hover`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinks}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${isVisible ? 'animate-slide-up' : ''}`}>
            Explore My Projects
          </h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.link}
                className={`${styles.projectLink} ${isVisible ? 'animate-slide-left' : ''} animate-on-hover`}
                style={{ animationDelay: project.delay }}
              >
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.projectArrow}>→</span>
              </Link>
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