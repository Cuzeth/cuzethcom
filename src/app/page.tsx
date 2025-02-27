"use client"

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection/HeroSection';
import { FaArrowRight, FaCode, FaRobot, FaUser } from 'react-icons/fa';
import { homeObjOne } from './data';

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />

      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Do</h2>
            <div className="w-24 h-1 bg-primary-700 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Computer Science student passionate about creating innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCode />}
              title="Development"
              description="Creating efficient, elegant code solutions for real-world problems"
              delay={0}
            />
            <FeatureCard
              icon={<FaRobot />}
              title="Automation"
              description="Building tools that save time through intelligent automation"
              delay={150}
            />
            <FeatureCard
              icon={<FaUser />}
              title="User Experience"
              description="Designing interfaces that are intuitive and enjoyable to use"
              delay={300}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Check Out My Work</h2>
              <div className="w-24 h-1 bg-primary-700 rounded-full mb-8"></div>
              <p className="text-lg text-gray-300 mb-8">
                Take a look at my portfolio of projects, from web applications to automation tools and more.
              </p>
              <Link href="/mywork" className="inline-flex items-center gap-2 btn-primary group">
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-700/20 to-primary-500/20 rounded-xl blur-lg"></div>
                <div className="glass-card p-6 relative">
                  <div className="grid grid-cols-2 gap-4">
                    <ProjectPreview title="Password Generator" />
                    <ProjectPreview title="URL Shortener" />
                    <ProjectPreview title="Discord Bot" />
                    <ProjectPreview title="Video Highlights" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description, delay }: {
  icon: React.ReactNode,
  title: string,
  description: string,
  delay: number
}) {
  return (
    <div
      className="glass-card p-8 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-700/20 text-primary-500 mb-6">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ProjectPreview({ title }: { title: string }) {
  return (
    <div className="bg-dark-900/60 rounded-lg p-4 border border-white/5 hover:border-primary-700/30 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-full h-24 bg-dark-800 rounded-md mb-3 flex items-center justify-center text-white/30">
        <span className="text-xs">Preview</span>
      </div>
      <h4 className="text-sm font-medium text-white/80">{title}</h4>
    </div>
  );
}