'use client';
import { Heading } from '@/components/heading/heading'
import { Projects } from '@/components/projects/projects'
import { SkillsBar } from '@/components/skills/skills'
import { SocialLinks } from '@/components/socials/social-links'
import { ContactForm } from '@/components/contact/contact-form'
import { ExpertiseSection } from '@/components/expertise/expertise-section'
import { StatsSection } from '@/components/stats/stats-section'
import { FloatingIcons } from '@/components/floating-icons/floating-icons'
import { Flex, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Image from "next/image";

export default function Home() {
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
                    alt="Syed Bilal Ali"
                    width={200}
                    height={200}
                    className="profile-image"
                  />
                  <div className="profile-badge">Available for Hire</div>
                </div>
              </div>
              <div className="hero-text">
                <h1 className="hero-name">Syed Bilal Ali</h1>
                <div className="hero-title">
                  <Heading />
                </div>
                <p className="hero-description">
                  Full Stack Developer @ Neural Lab | Former Google DSC Development Lead
                </p>
                <p className="hero-tagline">
                  Building scalable web applications with Python, Django, and modern JavaScript frameworks. 
                  Passionate about clean architecture, database design, and creating impactful solutions.
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
