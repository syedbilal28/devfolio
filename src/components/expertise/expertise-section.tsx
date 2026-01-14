'use client';
import React from 'react';
import { List, Divider } from 'antd';
import './_expertise-section.scss';

export const ExpertiseSection: React.FC = () => {
    const expertise = [
        "Full Stack Development",
        "Web Development",
        "Data Architecture and Engineering",
        "Software Architecture",
        "RESTful APIs",
        "Microservices",
        "Design Patterns",
        "Problem-solving",
        "Analytics with Python"
    ];

    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <h2 className="expertise-title">Areas of Expertise</h2>
                <p className="expertise-subtitle">
                    Specialized knowledge and skills that drive successful project delivery
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
