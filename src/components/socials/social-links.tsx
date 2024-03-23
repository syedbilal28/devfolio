'use client';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";

export const SocialLinks: React.FC = () => {

    return (
    <Flex justify='center' align='center' gap={100} className="social-links">
        <div onClick={() => window.open("https://github.com/syedbilal28")}>
            <GithubOutlined/>
        </div>
        <div onClick={() => window.open("https://www.linkedin.com/in/syed-bilal-ali-556735178/")}>
            <LinkedinOutlined/>
        </div>
        <div onClick={() => window.open("https://twitter.com/bilalpydev")}>
            <TwitterOutlined/>
        </div>
    </Flex>
    )
}