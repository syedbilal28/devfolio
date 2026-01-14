'use client';
import { Heading } from '@/components/heading/heading'
import { Projects } from '@/components/projects/projects'
import { SkillsBar } from '@/components/skills/skills'
import { SocialLinks } from '@/components/socials/social-links'
import { ContactForm } from '@/components/contact/contact-form'
import { ExpertiseSection } from '@/components/expertise/expertise-section'
import { StatsSection } from '@/components/stats/stats-section'
import { FloatingIcons } from '@/components/floating-icons/floating-icons'
import { LoadingScreen } from '@/components/loading/loading-screen'
import { Flex, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for fonts, images, and initial render to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Give enough time for everything to load

    // Also check if page is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setIsLoading(false), 800);
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout className='home-page'>
      <section className="sticky">
          <FloatingIcons />
        </section>
        <Content className='main-content'>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-profile">
                <div className="profile-image-wrapper">
                  <Image
                    src="/profile-picture.png"
                    alt="Syed Bilal Ali - Developer & Systems Analyst"
                    width={200}
                    height={200}
                    className="profile-image"
                    priority
                  />
                </div>
              </div>
              <div className="hero-text">
                <h1 className="hero-name">Syed Bilal Ali</h1>
                <div className="hero-title">
                  <Heading />
                </div>
                <p className="hero-description">
                  Developer & Systems Analyst @ Neural Lab | Former Google DSC Development Lead
                </p>
                <p className="hero-tagline">
                  A developer who thinks like a systems analyst. I analyze problems, design architectures, 
                  and build scalable solutions using Python, Django, and modern JavaScript frameworks. 
                  Combining technical expertise with cross-functional collaboration to deliver impactful products.
                </p>
                <SocialLinks />
                <div className="hero-cta">
                  <ContactForm />
                </div>
                <div className="scroll-indicator">
                  <div className="scroll-text">Scroll to explore</div>
                  <div className="scroll-arrow">↓</div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <StatsSection />

          {/* Skills Section */}
          <section className="skills-section">
            <SkillsBar />
          </section>

          {/* Projects Section */}
          <section className="projects-section">
            <Projects />
          </section>

          {/* Expertise Section */}
          <ExpertiseSection />
        </Content>
    </Layout>
  )
}
