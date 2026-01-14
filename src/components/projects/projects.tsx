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
                />
                <Project
                    title="Dater App"
                    imageUrl="/dater.png"
                    content="Built a location-based matching application integrating geospatial data with Django backend and JavaScript frontend. Designed the system architecture, implemented OAuth authentication, and coordinated with geospatial teams to deliver a solution that improved user engagement by 60%."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "PostgreSQL", "GDAL", "OAuth", "System Integration"]}
                />
                <Project
                    title="Enchantiom"
                    imageUrl="/enchantiom.png"
                    content="Developed a crypto transaction tracking system from scratch. Designed the database schema, built the Django backend, and implemented the frontend to simplify complex transaction logging. Owned the product roadmap while writing production-ready code."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "Database Design", "PostgreSQL", "Product Ownership"]}
                />
                <Project
                    title="Uno Startup"
                    imageUrl="/uno-startup.png"
                    content="Built a full-stack social platform for entrepreneurs with real-time features. Developed Django backend with WebSocket support, integrated Stripe payments, implemented Redis caching, and architected a scalable system handling real-time messaging and payment processing."
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "PostgreSQL", "Django Channels", "Redis", "Stripe Integration", "Real-time Systems"]}
                />
            </div>
        </div>
    )
}