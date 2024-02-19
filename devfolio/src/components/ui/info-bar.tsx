import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Grid } from "antd";
import React from "react";

const InfoSideBar = () => {
    return (
        <Flex gap="middle" align="start" vertical>
            <Flex justify="center" align="center" vertical className="info-bar">
                <Avatar size={64} icon={<UserOutlined/>}/>
                <p>Syed Bilal Ali</p>
                <p>Full Stack Developer @ Meistery Global Team | Former Google DSC Development Lead | Python | Django | Flask | React | Nextjs | Vue</p>
            </Flex>
        </Flex>
    )
}

export default InfoSideBar;