import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Top Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
             git commit -m "Thanks for Visiting"
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Feel free to connect with me or
            reach out for collaborations and exciting opportunities.
          </p>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">

          <a
            href="https://github.com/asifforizy"
            className="group h-14 w-14 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 duration-300"
          >
            <FaGithub className="text-2xl text-white group-hover:scale-125 duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/saifur-rahaman-a2561b271/"
            className="group h-14 w-14 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 duration-300"
          >
            <FaLinkedin className="text-2xl text-white group-hover:scale-125 duration-300" />
          </a>

          <a
            href="https://www.facebook.com/as.if.434777/"
            className="group h-14 w-14 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 duration-300"
          >
            <FaFacebook className="text-2xl text-white group-hover:scale-125 duration-300" />
          </a>

          

        </div>

        {/* Bottom */}
        <div className="mt-16 text-center">

          <p className="text-gray-500">
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Asif Forizy</p>
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Full Stack Developer • React • Node.js • MongoDB
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;