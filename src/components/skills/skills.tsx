import { Flex, Tag } from 'antd';
import React from 'react';

export const SkillsBar: React.FC = () => {
    return (
        <Flex gap="middle" align="start" vertical className='skills-bar'>
            <Flex justify="center" align="center" vertical>
                <h2>Skills</h2>
                <div className='skills-bar__list'>
                    <Tag>
                        Python
                    </Tag>
                    <Tag>
                        Django
                    </Tag>
                    <Tag>
                        Flask
                    </Tag>
                    <Tag>
                        React
                    </Tag>
                    <Tag>
                        Javascript
                    </Tag>
                    <Tag>
                        Typescript
                    </Tag>
                    <Tag>
                        FastAPI
                    </Tag>
                    <Tag>
                        FastAPI
                    </Tag>
                    <Tag>
                        Git
                    </Tag>
                    <Tag>
                        NextJS
                    </Tag>
                    <Tag>
                        HTML
                    </Tag>
                    <Tag>
                        CSS
                    </Tag>
                    <Tag>
                        Postgresql
                    </Tag>
                    <Tag>
                        MySQL
                    </Tag>
                    <Tag>
                        Django-rest-framework
                    </Tag>
                    <Tag>
                        Pandas
                    </Tag>
                    <Tag>
                        Numpy
                    </Tag>
                    <Tag>
                        Selenium
                    </Tag>
                    <Tag>
                        Redis
                    </Tag>
                    <Tag>
                        Backend Development
                    </Tag>
                    <Tag>
                        Systems Integration
                    </Tag>
                    <Tag>
                        JQuery
                    </Tag>
                    <Tag>
                        AJAX
                    </Tag>
                    <Tag>
                        Database Design
                    </Tag>
                    <Tag>
                        SQL
                    </Tag>
                    <Tag>
                        Debugging
                    </Tag>
                    <Tag>
                        Docker
                    </Tag>
                </div>
                
            </Flex>
        </Flex>
    )
}