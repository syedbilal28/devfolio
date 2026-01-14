import { Flex, Tag } from "antd";
import Image from "next/image";
import React, { useState } from "react";

interface ProjectProps {
    title: string;
    content: string;
    skills: string[];
    imageUrl: string;
    details?: {
        challenge?: string;
        solution?: string;
        impact?: string;
        keyFeatures?: string[];
    };
}

export const Project: React.FC<ProjectProps> = ({title, content, skills, imageUrl, details}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="project"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="project-cover">
                <Image
                    src={imageUrl}
                    width={500}
                    height={300}
                    alt="Project cover"
                />
                {isHovered && details && (
                    <div className="project-overlay">
                        <div className="project-details">
                            {details.challenge && (
                                <div className="detail-section">
                                    <h4>Challenge</h4>
                                    <p>{details.challenge}</p>
                                </div>
                            )}
                            {details.solution && (
                                <div className="detail-section">
                                    <h4>Solution</h4>
                                    <p>{details.solution}</p>
                                </div>
                            )}
                            {details.impact && (
                                <div className="detail-section">
                                    <h4>Impact</h4>
                                    <p>{details.impact}</p>
                                </div>
                            )}
                            {details.keyFeatures && details.keyFeatures.length > 0 && (
                                <div className="detail-section">
                                    <h4>Key Features</h4>
                                    <ul>
                                        {details.keyFeatures.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <div className="project-body">
                    <p className="project-title">{title}</p>
                    <p>{content}</p>
                    <Flex wrap="wrap" gap="small" className="project-skills">
                        {skills.map((skill, index) => <Tag key={index}>{skill}</Tag>)}
                    </Flex>
                </div>
            </div>
        </div>
    )
}