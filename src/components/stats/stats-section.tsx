'use client';
import React from 'react';
import { Flex } from 'antd';
import './_stats-section.scss';

export const StatsSection: React.FC = () => {
    const stats = [
        { number: '4+', label: 'Years Experience', icon: '💼' },
        { number: '50+', label: 'Projects Completed', icon: '🚀' },
        { number: '20+', label: 'Happy Clients', icon: '✨' },
        { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                <h2 className="stats-title">Impact at a Glance</h2>
                <Flex gap="large" justify="center" align="center" wrap="wrap" className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </Flex>
            </div>
        </section>
    );
};
