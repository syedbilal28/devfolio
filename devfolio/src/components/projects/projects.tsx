import React from "react";
import { Project } from "./project";
import { Flex } from "antd";

export const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2 className="title">Projects</h2>
            <Flex gap="large" align="center" justify="center" wrap="wrap">
                <Project
                    title="GlobalFleet Directory"
                    imageUrl="/global-fleet.png"
                    content="Designed and implemented the backend architecture using django"
                    skills={["Python", "Django", "Django-Rest-Framework", "Database Architecure", "PostgreSQL"]}
                />
                <Project
                    title="Dater App"
                    imageUrl="/dater.png"
                    content="Implemented frontend and backend of the application integrating Geo location of users"
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "Database Architecure", "PostgreSQL", "GDAL", "OAuth"]}
                />
                <Project
                    title="Enchantiom"
                    imageUrl="/enchantiom.png"
                    content="Implemented frontend and backend of the application to let users maintain a log of their crypto transactions"
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "Database Architecure", "PostgreSQL"]}
                />
                <Project
                    title="Uno Startup"
                    imageUrl="/uno-startup.png"
                    content="Designed, implemented and developed a scoial media application that allowed entrepreneurs to share their ideas"
                    skills={["Python", "Django", "JavaScript", "Django-Rest-Framework", "Database Modelling", "PostgreSQL", "django-channels", "stripe integration", "redis"]}
                />
            </Flex>
        </div>
    )
}