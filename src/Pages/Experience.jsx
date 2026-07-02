import React, { useEffect, useRef, useState } from "react";
import {
    FaGraduationCap,
    FaCode,
    FaBrain,
    FaLaptopCode,
} from "react-icons/fa";

const experiences = [
    {
        title: "Software Engineering Student",
        company: "Daffodil International University",
        duration: "2024 - Present",
        icon: <FaGraduationCap />,
        color: "text-sky-400",
        description:
            "Currently pursuing a Bachelor's degree in Software Engineering while building a strong foundation in software development, algorithms, databases, and system design.",
    },
    {
        title: "Full-Stack Developer",
        company: "Personal Projects",
        duration: "2025 - Present",
        icon: <FaCode />,
        color: "text-emerald-400",
        description:
            "Developing responsive full-stack applications using React, Laravel, PHP, MySQL, Tailwind CSS, and REST APIs. Built projects including an eCommerce platform and ExamEase.",
    },
    {
        title: "AI & Machine Learning Learner",
        company: "Self Learning",
        duration: "2026 - Present",
        icon: <FaBrain />,
        color: "text-purple-400",
        description:
            "Learning Machine Learning and Deep Learning using Python, NumPy, Pandas, Scikit-learn, TensorFlow, and Keras while exploring data preprocessing, model training, and evaluation.",
    },
    {
        title: "Competitive Programming & DSA",
        company: "Continuous Practice",
        duration: "Ongoing",
        icon: <FaLaptopCode />,
        color: "text-amber-400",
        description:
            "Practicing Data Structures, Algorithms, and problem solving in C++ and Python to strengthen logical thinking and coding efficiency.",
    },
];

// Lightweight scroll-reveal hook — no extra dependency needed
const useInView = (options = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(node);
            }
        }, { threshold: 0.2, ...options });

        observer.observe(node);
        return () => observer.disconnect();
    }, [options]);

    return [ref, inView];
};

const TimelineItem = ({ item, index }) => {
    const [ref, inView] = useInView();
    const fromLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`
        mb-12 ml-10 relative
        transition-all duration-700 ease-out
        ${inView
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 translate-y-6 ${fromLeft ? "-translate-x-6" : "translate-x-6"}`
                }
      `}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* Timeline Dot */}
            <div
                className="
          absolute -left-[54px] top-2
          w-10 h-10 rounded-full
          bg-white/[0.06]
          border border-white/15
          backdrop-blur-xl
          flex items-center justify-center
          text-lg
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]
        "
            >
                <span className={item.color}>{item.icon}</span>
            </div>

            {/* Glass Card */}
            <div
                className="
          rounded-2xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-6
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
          transition-all duration-300
          hover:border-sky-400/30
          hover:bg-white/[0.06]
          hover:-translate-y-1.5
        "
            >
                <span className={`text-sm font-medium font-mono ${item.color}`}>
                    {item.duration}
                </span>

                <h3 className="text-2xl font-bold mt-2 text-white">
                    {item.title}
                </h3>

                <p className="text-gray-400 mt-1 font-medium">
                    {item.company}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="relative py-28 lg:py-36 bg-transparent text-white">
            <div className="w-11/12 lg:w-9/12 mx-auto">

                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-gray-400/80 text-sm font-mono tracking-widest mb-3 uppercase">
                        My Experiences
                    </p>

                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                        My <span className="text-white/40">Journey</span>

                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl">
                        Although I haven't worked professionally yet, I'm
                        continuously building projects, learning new
                        technologies, and improving my problem-solving skills.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/15 ml-4">
                    {experiences.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;