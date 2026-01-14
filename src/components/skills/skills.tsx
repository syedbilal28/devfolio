import { Flex, Tag } from 'antd';
import React from 'react';

export const SkillsBar: React.FC = () => {
    return (
        <Flex gap="middle" align="start" vertical className='skills-bar'>
            <Flex justify="center" align="center" vertical>
                <h2>Skills</h2>
                <div className='skills-bar__list'>
                    <Tag>Python</Tag>
                    <Tag>Django</Tag>
                    <Tag>Django-Rest-Framework</Tag>
                    <Tag>Flask</Tag>
                    <Tag>FastAPI</Tag>
                    <Tag>React</Tag>
                    <Tag>Javascript</Tag>
                    <Tag>Typescript</Tag>
                    <Tag>NextJS</Tag>
                    <Tag>PostgreSQL</Tag>
                    <Tag>MySQL</Tag>
                    <Tag>Database Design</Tag>
                    <Tag>SQL</Tag>
                    <Tag>Redis</Tag>
                    <Tag>Docker</Tag>
                    <Tag>Git</Tag>
                    <Tag>API Design</Tag>
                    <Tag>Backend Development</Tag>
                    <Tag>Systems Architecture</Tag>
                    <Tag>Systems Integration</Tag>
                    <Tag>Technical Architecture</Tag>
                    <Tag>Problem Solving</Tag>
                    <Tag>Systems Analysis</Tag>
                    <Tag>Product Ownership</Tag>
                    <Tag>Requirements Gathering</Tag>
                    <Tag>Cross-Functional Leadership</Tag>
                    <Tag>Agile & Scrum</Tag>
                    <Tag>Data Analysis</Tag>
                    <Tag>Pandas</Tag>
                    <Tag>System Testing</Tag>
                </div>
                
            </Flex>
        </Flex>
    )
}