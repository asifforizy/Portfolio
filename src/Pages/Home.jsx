import React from "react";
import {
  FaArrowDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/2.png";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent text-white">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-16">

          {/* Left Side */}
          <div>
            {/* Greeting */}
            <p className="text-gray-500 text-base mb-3 tracking-wide">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
              <span className="text-white block">Saifur R. <span className="text-white/40 ">Asif</span></span>
              
            </h1>

            {/* Accent line — signature element */}
            <div className="flex items-center gap-4 mt-7 mb-7">
              <span className="w-14 h-px bg-gradient-to-r from-sky-400 to-transparent" />
              <div className="text-lg lg:text-xl text-gray-300 font-light">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Researcher",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </div>
            </div>

            {/* Description */}
            <p className="max-w-lg text-gray-400 text-base leading-7">
              I'm a passionate full stack developer specializing in the
              MERN stack, building scalable, user-friendly, and
              high-performance web applications. I love solving
              real-world problems and turning ideas into thoughtful
              digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">

              <button
                className="
                  px-7 py-3.5
                  rounded-xl
                  bg-white/10
                  border border-white/15
                  backdrop-blur-2xl
                  text-white
                  text-sm
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  hover:bg-white/[0.16]
                  hover:border-white/25
                "
              >
                View Projects
              </button>

              <button
                className="
                  px-7 py-3.5
                  rounded-xl
                  bg-transparent
                  border border-white/10
                  text-gray-300
                  text-sm
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:text-white
                "
              >
                Download Resume
              </button>

            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-10">

              {[
                {
                  icon: <FaGithub size={16} />,
                  label: "GitHub",
                  link: "https://github.com/asifforizy",
                },
                {
                  icon: <FaLinkedin size={16} />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/saifur-rahaman-a2561b271/",
                },
                {
                  icon: <FaEnvelope size={16} />,
                  label: "Email",
                  link: "mailto:your.email@example.com",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="
                    w-10 h-10
                    rounded-full
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    flex items-center justify-center
                    text-gray-400
                    transition-all
                    duration-300
                    hover:text-white
                    hover:border-white/25
                    hover:bg-white/10
                  "
                >
                  {item.icon}
                </a>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Soft glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-[90px] scale-110" />

              {/* Thin rotating-style ring accent */}
              <div className="absolute -inset-4 rounded-full border border-white/10" />
              <div className="absolute -inset-4 rounded-full border-t border-sky-400/50" />

              {/* Glass circle frame */}
              <div
                className="
                  relative
                  w-[280px] h-[280px]
                  lg:w-[360px] lg:h-[360px]
                  rounded-full
                  border border-white/15
                  bg-white/5
                  backdrop-blur-2xl
                  p-2.5
                "
              >
                <img
                  src={heroImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center animate-bounce">
            <FaArrowDown className="text-gray-400" size={13} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;