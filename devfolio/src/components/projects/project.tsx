import Image from "next/image";
import React from "react";

export const Project = () => {
    return (
        <div className="project">
            <div className="project-cover">
                <Image src="/project-cover.png" width={300} height={100} alt="Project cover"/>
            </div>
            <div className="project-body">
                <h2 className="project-title">GlobalFleet Directory</h2>
                <p></p>
            </div>
        </div>
    )
}