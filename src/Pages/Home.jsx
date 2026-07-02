import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/2.png";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent text-white py-20 lg:py-0">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Image (Top on Mobile, Right on Desktop) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-[90px] scale-110" />

              {/* Rings */}
              <div className="absolute -inset-4 rounded-full border border-white/10" />
              <div className="absolute -inset-4 rounded-full border-t border-sky-400/50" />

              {/* Image */}
              <div
                className="
                  relative
                  w-56
                  h-56
                  sm:w-72
                  sm:h-72
                  lg:w-[360px]
                  lg:h-[360px]
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
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-gray-500 text-base mb-3 tracking-wide">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
              <span className="block">
                Saifur R. <span className="text-white/40">Asif</span>
              </span>
            </h1>

            {/* Type Animation */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-7 mb-7">
              <span className="hidden lg:block w-14 h-px bg-gradient-to-r from-sky-400 to-transparent" />

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
            <p className="max-w-lg mx-auto lg:mx-0 text-gray-400 text-base leading-7">
              I'm a passionate full stack developer specializing in the MERN
              stack, building scalable, user-friendly, and high-performance web
              applications. I love solving real-world problems and turning ideas
              into thoughtful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-10">
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
                  hover:bg-white/20
                  hover:border-white/30
                "
              >
                View Projects
              </button>

              <button
                className="
                  px-7 py-3.5
                  rounded-xl
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
            <div className="flex justify-center lg:justify-start gap-3 mt-10">
              {[
                {
                  icon: <FaGithub size={16} />,
                  label: "GitHub",
                  link: "https://github.com/asifforizy",
                },
                {
                  icon: <FaLinkedin size={16} />,
                  label:
                    "LinkedIn",
                  link:
                    "https://www.linkedin.com/in/saifur-rahaman-a2561b271/",
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
                  rel={
                    item.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    flex
                    items-center
                    justify-center
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
        </div>
      </div>
    </section>
  );
};

export default Home;