import React from "react";
import { Project } from "./project";
import { Flex } from "antd";

export const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2 className="title">Projects & Solutions</h2>
            <div className="projects-grid">
                <Project
                    title="GlobalFleet Directory"
                    imageUrl="/global-fleet.png"
                    content="Architected and developed a scalable directory system using Django and PostgreSQL. Analyzed requirements, designed the database schema, and built the REST API that streamlined fleet management operations, reducing processing time by 40%."
                    skills={["Python", "Django", "Django-Rest-Framework", "Database Architecture", "PostgreSQL", "Systems Design"]}
                    details={{
                        challenge: "Managing complex fleet data across multiple locations with varying requirements and ensuring real-time synchronization.",
                        solution: "Designed a normalized database schema with optimized queries, implemented RESTful APIs with caching strategies, and created an admin dashboard for efficient data management.",
                        impact: "Reduced data processing time by 40%, improved system response time by 60%, and enabled real-time fleet tracking across all locations.",
                        keyFeatures: [
                            "RESTful API with comprehensive CRUD operations",
                            "Advanced search and filtering capabilities",
                            "Real-time data synchronization",
                            "Admin dashboard with analytics",
                            "Scalable architecture supporting 10K+ records"
                        ]
                    }}
                />
                <Project
                    title="Dater App"
                    imageUrl="/dater.png"
                    content="Built a location-based matching application integrating geospatial data with Django backend and JavaScript frontend. Designed the system architecture, implemented OAuth authentication, and coordinated with geospatial teams to deliver a solution that improved user engagement by 60%."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "PostgreSQL", "GDAL", "OAuth", "System Integration"]}
                    details={{
                        challenge: "Creating accurate location-based matching while handling large-scale geospatial data and ensuring user privacy and security.",
                        solution: "Integrated GDAL for geospatial processing, implemented OAuth 2.0 for secure authentication, and designed an efficient matching algorithm using PostGIS for spatial queries.",
                        impact: "Improved user engagement by 60%, reduced matching time from 5s to under 1s, and achieved 95% match accuracy.",
                        keyFeatures: [
                            "Geospatial data processing with GDAL",
                            "OAuth 2.0 authentication",
                            "Real-time location-based matching",
                            "Privacy-focused user data handling",
                            "Responsive frontend with interactive maps"
                        ]
                    }}
                />
                <Project
                    title="Enchantiom"
                    imageUrl="/enchantiom.png"
                    content="Developed a crypto transaction tracking system from scratch. Designed the database schema, built the Django backend, and implemented the frontend to simplify complex transaction logging. Owned the product roadmap while writing production-ready code."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "Database Design", "PostgreSQL", "Product Ownership"]}
                    details={{
                        challenge: "Simplifying complex crypto transaction tracking for users with multiple wallets and exchanges, ensuring accurate calculations and reporting.",
                        solution: "Designed an intuitive database schema to handle multiple transaction types, built automated import from exchanges, and created a user-friendly interface with comprehensive reporting features.",
                        impact: "Reduced transaction logging time by 70%, improved tax reporting accuracy, and increased user retention by 45%.",
                        keyFeatures: [
                            "Multi-wallet transaction tracking",
                            "Automated exchange integration",
                            "Real-time portfolio valuation",
                            "Tax reporting and analytics",
                            "User-friendly transaction categorization"
                        ]
                    }}
                />
                <Project
                    title="Uno Startup"
                    imageUrl="/uno-startup.png"
                    content="Built a full-stack social platform for entrepreneurs with real-time features. Developed Django backend with WebSocket support, integrated Stripe payments, implemented Redis caching, and architected a scalable system handling real-time messaging and payment processing."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "PostgreSQL", "Django Channels", "Redis", "Stripe Integration", "Real-time Systems"]}
                    details={{
                        challenge: "Building a scalable social platform with real-time messaging, payment processing, and content sharing while maintaining performance under high load.",
                        solution: "Implemented Django Channels for WebSocket support, integrated Redis for caching and real-time message queuing, set up Stripe for secure payments, and designed a microservices-ready architecture.",
                        impact: "Supported 5K+ concurrent users, processed 10K+ messages per minute, achieved 99.9% uptime, and handled $100K+ in transactions securely.",
                        keyFeatures: [
                            "Real-time messaging with WebSockets",
                            "Secure payment processing with Stripe",
                            "Redis caching for improved performance",
                            "Content sharing and collaboration tools",
                            "Scalable architecture for growth"
                        ]
                    }}
                />
            </div>
        </div>
    )
}