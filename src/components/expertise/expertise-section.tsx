'use client';
import React from 'react';
import { List, Divider } from 'antd';
import './_expertise-section.scss';

export const ExpertiseSection: React.FC = () => {
    const expertise = [
        "Systems Analysis & Design",
        "Product Ownership",
        "Cross-Functional Leadership",
        "Problem Solving & Root Cause Analysis",
        "Requirements Gathering & Documentation",
        "Process Optimization",
        "Stakeholder Management",
        "Technical Architecture",
        "Agile & Scrum Methodologies",
        "Data Analysis & Insights",
        "System Integration",
        "Quality Assurance & Testing"
    ];

    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <h2 className="expertise-title">Areas of Expertise</h2>
                <p className="expertise-subtitle">
                    Technical expertise combined with analytical thinking, product ownership, and cross-functional collaboration 
                    to build robust, scalable solutions
                </p>
                <div className="expertise-grid">
                    {expertise.map((item, index) => (
                        <div key={index} className="expertise-item">
                            <div className="expertise-icon">✨</div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
