import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";

export const SocialLinks: React.FC = () => {
    return (
    <Flex justify='center' align='center' gap={100}>
        <GithubOutlined style={{"fontSize": "30px"}}/>
        <LinkedinOutlined style={{"fontSize": "30px"}}/>
        <TwitterOutlined style={{"fontSize": "30px"}}/>
    </Flex>
    )
}