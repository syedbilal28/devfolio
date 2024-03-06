import React from "react";
import { Project } from "./project";
import { Flex } from "antd";

export const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <Flex gap="small" align="start" vertical>
                <Project/>
            </Flex>
            
        </div>
    )
}