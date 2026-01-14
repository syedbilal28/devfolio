import { Flex, Tag } from "antd";
import Image from "next/image";
import React from "react";

interface ProjectProps {
    title: string;
    content: string;
    skills: string[];
    imageUrl: string;
}

export const Project: React.FC<ProjectProps> = ({title, content, skills, imageUrl}) => {
    return (
        <div className="project">
            <div className="project-cover">
                <Image
                    src={imageUrl}
                    width={500}
                    height={300}
                    alt="Project cover"
                />
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