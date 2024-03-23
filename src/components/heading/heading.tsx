'use client';
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Heading: React.FC = () => (
    <TypeAnimation
              sequence={[
                "I am a Full Stack Developer",
                1000,
                "I work with Python and Typescript",
                1000,
                "I love designing databases",
                1000,
                "I love creating applications",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
)