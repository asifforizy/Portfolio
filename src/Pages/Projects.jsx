import React, { useState, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Goribs Shop",
        category: "Personal · Laravel",
        year: "2026",
        image: "https://i.ibb.co/gFZfhTyz/composition-black-friday-elements-black-background.jpg",
        link: "https://github.com/asifforizy/Goribs-Shop",
    },
    {
        id: 2,
        title: "RentNest",
        category: "Backend · Express.js/Typescript",
        year: "2026",
        image: "https://i.ibb.co/BVm5mXgm/Screenshot-2026-08-07-105531.png",
        link: "https://github.com/asifforizy/RentNest",
    },
    {
        id: 3,
        title: "HeroX",
        category: "Personal · MERN",
        year: "2026",
        image: "https://i.ibb.co/WvQjxj2m/Screenshot-2026-07-02-191707.png",
        link: "https://heroxapp.netlify.app/",
    },
    
    {
        id: 4,
        title: "DevPulse",
        category: "Backend · Express.js/Typescript",
        year: "2026",
        image: "https://i.ibb.co/Rx5RXLj/Screenshot-2026-07-02-192926.png",
        link: "https://github.com/asifforizy/DevPulse",
    },
    {
        id: 5,
        title: "WarmPaws",
        category: "Personal · React",
        year: "2026",
        image: "https://i.ibb.co/KzDGy10x/Screenshot-2026-07-02-191816.png",
        link: "https://warmpawsxauth.web.app/",
    },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            id="projects"
            className="relative py-28 lg:py-36 bg-transparent text-white"
        >
            <div className="w-11/12 lg:w-9/12 mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    <p className="text-gray-400/80 text-sm font-mono tracking-widest mb-3 uppercase">
                        My Work
                    </p>

                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                        Selected <span className="text-white/40">Projects</span>

                    </h2>

                    <p className="mt-4 text-gray-400 max-w-lg">
                        A few things I've built. Hover a project to preview it.
                    </p>
                </div>

                {/* Project List */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    className="relative border-t border-white/10"
                >
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                            className="
                group
                relative
                flex items-center justify-between
                py-8 lg:py-10
                border-b border-white/10
                transition-colors duration-300
                hover:border-white/20
              "
                        >
                            {/* Index */}
                            <span className="hidden sm:block text-sm font-mono text-gray-600 w-12 shrink-0 transition-colors duration-300 group-hover:text-sky-400">
                                {String(project.id).padStart(2, "0")}
                            </span>

                            {/* Title */}
                            <div className="flex-1 min-w-0">
                                <h3
                                    className="
                    text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                    text-white/70
                    transition-all duration-300
                    group-hover:text-white
                    group-hover:translate-x-3
                    truncate
                  "
                                >
                                    {project.title}
                                </h3>
                                <p className="mt-1.5 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                                    {project.category}
                                </p>
                            </div>

                            {/* Year + arrow */}
                            <div className="flex items-center gap-4 sm:gap-8 shrink-0 pl-4">
                                <span className="hidden sm:block text-sm text-gray-600 font-mono transition-colors duration-300 group-hover:text-gray-300">
                                    {project.year}
                                </span>
                                <span
                                    className="
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    flex items-center justify-center
                    text-gray-500
                    transition-all duration-300
                    group-hover:border-sky-400/50
                    group-hover:bg-sky-400/10
                    group-hover:text-sky-400
                    group-hover:rotate-45
                  "
                                >
                                    <FaExternalLinkAlt size={14} />
                                </span>
                            </div>
                        </a>
                    ))}

                    {/* Floating glass image preview — follows cursor */}
                    <div
                        className="
              hidden lg:block
              pointer-events-none
              absolute
              w-[320px] h-[220px]
              rounded-2xl
              border border-white/15
              bg-white/[0.06]
              backdrop-blur-xl
              overflow-hidden
              shadow-2xl
              transition-opacity duration-300
              z-20
              p-2
            "
                        style={{
                            left: mousePos.x + 40,
                            top: mousePos.y - 110,
                            opacity: activeProject ? 1 : 0,
                        }}
                    >
                        {projects.map((project) => (
                            <img
                                key={project.id}
                                src={project.image}
                                alt={project.title}
                                className={`
                  absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]
                  object-cover rounded-xl
                  transition-opacity duration-300
                  ${activeProject === project.id ? "opacity-100" : "opacity-0"}
                `}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;