import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiGit,
  SiFigma,
  SiFirebase,
  SiBootstrap,
  SiVite,
  SiPostman,
  SiCplusplus,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiCss,
}

  from "react-icons/si";
import { FaStar, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";

const webDev = [
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <SiCss />, color: "text-blue-500" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-amber-400" },
  { name: "Vite", icon: <SiVite />, color: "text-violet-400" },
  { name: "Git", icon: <SiGit />, color: "text-red-500" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-400" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
];

const cpDsa = [
  {
    name: "Problem Solving",
    icon: <FaLightbulb />,
    color: "text-amber-300",
  },
  {
    name: "Competitive Programming",
    icon: <FaStar />,
    color: "text-yellow-400",
  },
  {
    name: "C / C++",
    icon: <SiCplusplus />,
    color: "text-blue-400",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "text-sky-300",
  },
  {
    name: "Data Structures",
    icon: <BsGrid3X3Gap />,
    color: "text-emerald-400",
  },
  {
    name: "Algorithms",
    icon: <FaProjectDiagram />,
    color: "text-indigo-400",
  },

  // Machine Learning Libraries
  {
    name: "NumPy",
    icon: <SiNumpy />,
    color: "text-cyan-400",
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
    color: "text-purple-400",
  },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn />,
    color: "text-orange-400",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    color: "text-orange-500",
  },
  {
    name: "Keras",
    icon: <SiKeras />,
    color: "text-red-500",
  },
];

const SkillRow = ({ items, direction = "left", speed = 40 }) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden group">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#05070d] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#05070d] to-transparent z-10" />

      <div
        className="flex gap-4 w-max backdrop-blur-xl group-hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="
              flex items-center gap-2.5
              px-5 py-3
              rounded-xl
              border border-white/10
              bg-white/[0.06]
              whitespace-nowrap
              shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
            "
          >
            <span className={`text-lg ${item.color}`}>{item.icon}</span>
            <span className="text-sm font-medium text-gray-200">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 lg:py-36 bg-transparent text-white">
      <style>{`
        @keyframes marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <div className="w-11/12 lg:w-9/12 mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-gray-500 text-base mb-3 tracking-wide">
            What I work with
          </p>


          <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
            Tech
            <span className="text-white/40"> Stack</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-lg">
            Technologies and tools I use to bring ideas to life
          </p>

          
        </div>

        {/* Web Development */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-center mb-6">
            Web Development
          </h3>
          <SkillRow items={webDev} direction="left" speed={38} />
        </div>

        {/* Competitive Programming & ML */}
        <div>
          <h3 className="text-lg font-semibold text-center mb-6">
            DSA &amp; ML
          </h3>
          <SkillRow items={cpDsa} direction="right" speed={30} />
        </div>

      </div>
    </section>
  );
};

export default Skills;