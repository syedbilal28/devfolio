'use client';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./_heading.scss";

export const Heading: React.FC = () => (
    <div className="heading">
        <TypeAnimation
            sequence={[
                "I am a Developer & Systems Analyst",
                1000,
                "I code solutions to complex problems",
                1000,
                "I build scalable systems",
                1000,
                "I analyze, design, and develop",
                1000,
                "I turn requirements into working code",
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    </div>
)