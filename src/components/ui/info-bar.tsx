import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Grid, Image } from "antd";
import React from "react";

const InfoSideBar = () => {
    return (
        <Flex gap="middle" align="start" vertical>
            <Flex justify="center" align="center" vertical className="info-bar">
                <div className="image-wrapper">
                    <Image
                        src="/profile-picture.png"
                        alt="profile-picture"
                    />
                </div>
                <h2>Syed Bilal Ali</h2>
                <h3>Full Stack Developer @ Meistery Global Team | Former Google DSC Development Lead | Python | Django | Flask | React | Nextjs | Vue</h3>
            </Flex>
        </Flex>
    )
}

export default InfoSideBar;