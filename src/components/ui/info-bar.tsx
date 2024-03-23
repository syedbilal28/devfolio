'use client';
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Flex, Grid, Image, List, Typography } from "antd";
import React from "react";

const InfoSideBar = () => {

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

    ]
    return (
        <Flex gap="middle" align="start" vertical>
            <Flex justify="center" align="center" vertical className="info-bar">
                <div className="personal-data">
                    <Image
                        src="/profile-picture.png"
                        alt="profile-picture"
                    />
                </div>
                <h2 className="personal-data">Syed Bilal Ali</h2>
                <h3 className="personal-data">Full Stack Developer @ Meistery Global Team | Former Google DSC Development Lead | Python | Django | Flask | React | Nextjs | Vue</h3>
                <Divider style={{"borderColor": "#b3b3b3", "margin": "5px 0px"}}/>
                <div className="expertise">
                    <h2>Expertise</h2>
                    <List
                        size="small"
                        dataSource={expertise}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </div>
            </Flex>
        </Flex>
    )
}

export default InfoSideBar;