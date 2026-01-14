'use client';
import React from 'react';

export const StructuredData: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Syed Bilal Ali',
    jobTitle: 'Developer & Systems Analyst',
    worksFor: {
      '@type': 'Organization',
      name: 'Neural Lab',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Google Developer Student Clubs',
      jobTitle: 'Development Lead',
    },
    description: 'Developer & Systems Analyst specializing in Python, Django, React, and Next.js. Building scalable web applications and solving complex problems.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://syedbilalali.dev',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://syedbilalali.dev'}/profile-picture.png`,
    sameAs: [
      'https://github.com/syedbilal28',
      'https://www.linkedin.com/in/syed-bilal-ali-556735178/',
      'https://twitter.com/bilalpydev',
    ],
    knowsAbout: [
      'Python',
      'Django',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'PostgreSQL',
      'Systems Architecture',
      'Full Stack Development',
      'Product Ownership',
      'Systems Analysis',
    ],
    email: 'syed.bilal.sba@gmail.com',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Syed Bilal Ali Portfolio',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://syedbilalali.dev',
    description: 'Portfolio of Syed Bilal Ali - Developer & Systems Analyst',
    author: {
      '@type': 'Person',
      name: 'Syed Bilal Ali',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Syed Bilal Ali - Development Services',
    description: 'Full-stack development, systems analysis, and product ownership services',
    provider: {
      '@type': 'Person',
      name: 'Syed Bilal Ali',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Backend Development',
      'Systems Architecture',
      'Product Development',
      'API Development',
      'Database Design',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
};
