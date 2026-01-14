'use client';
import React from 'react';
import { 
    SiPython, 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiNextdotjs, 
    SiDjango, 
    SiFlask,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiNodedotjs,
    SiVuedotjs,
    SiRedis,
    SiFastapi
} from 'react-icons/si';
import './_floating-icons.scss';

interface TechIcon {
    icon: React.ReactNode;
    name: string;
    delay: number;
    duration: number;
    left: string;
}

export const FloatingIcons: React.FC = () => {
    const techIcons: TechIcon[] = [
        { icon: <SiPython />, name: 'Python', delay: 0, duration: 8, left: '10%' },
        { icon: <SiJavascript />, name: 'JavaScript', delay: 1, duration: 5, left: '20%' },
        { icon: <SiTypescript />, name: 'TypeScript', delay: 2, duration: 7, left: '35%' },
        { icon: <SiReact />, name: 'React', delay: 0, duration: 11, left: '50%' },
        { icon: <SiNextdotjs />, name: 'Next.js', delay: 1, duration: 6, left: '55%' },
        { icon: <SiDjango />, name: 'Django', delay: 3, duration: 8, left: '65%' },
        { icon: <SiFlask />, name: 'Flask', delay: 2, duration: 12, left: '70%' },
        { icon: <SiPostgresql />, name: 'PostgreSQL', delay: 2, duration: 6, left: '80%' },
        { icon: <SiDocker />, name: 'Docker', delay: 1, duration: 5, left: '70%' },
        { icon: <SiGit />, name: 'Git', delay: 4, duration: 10, left: '25%' },
        { icon: <SiNodedotjs />, name: 'Node.js', delay: 0.5, duration: 9, left: '15%' },
        { icon: <SiVuedotjs />, name: 'Vue', delay: 1.5, duration: 7, left: '45%' },
        { icon: <SiRedis />, name: 'Redis', delay: 2.5, duration: 8, left: '60%' },
        { icon: <SiFastapi />, name: 'FastAPI', delay: 3.5, duration: 9, left: '30%' },
    ];

    return (
        <div className="floating-icons">
            {techIcons.map((tech, index) => (
                <div
                    key={index}
                    className="floating-icon"
                    style={{
                        left: tech.left,
                        animationDelay: `${tech.delay}s`,
                        animationDuration: `${tech.duration}s`,
                    }}
                    title={tech.name}
                >
                    {tech.icon}
                </div>
            ))}
        </div>
    );
};
