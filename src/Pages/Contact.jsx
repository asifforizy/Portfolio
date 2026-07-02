import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";


const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;



const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            });
    };

    return (
        <section
            id="contact"
            className="relative py-28 lg:py-36 bg-transparent text-white"
        >
            <div className="w-11/12 lg:w-9/12 mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-gray-400/80 text-sm font-mono tracking-widest mb-3 uppercase">
                        Get In Touch
                    </p>

                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                         Let's build something{" "}
                        <span className="text-white/40">together</span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-lg">
                        Have a project in mind or just want to say hello? My inbox
                        is always open.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">

                    {/* Left — Info panel */}
                    <div
                        className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8 lg:p-10
              flex flex-col justify-between
              relative
              overflow-hidden
            "
                    >
                        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-sky-400/10 blur-[90px]" />

                        <div className="relative">
                            <h3 className="text-xl font-semibold mb-2">
                                Contact Information
                            </h3>
                            <p className="text-gray-400 text-sm leading-6 mb-8">
                                Reach out directly or find me on these platforms.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:your.email@example.com"
                                    className="flex items-center gap-4 group"
                                >
                                    <span className="w-11 h-11 shrink-0 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-sky-400 transition-all duration-300 group-hover:bg-sky-400/10 group-hover:border-sky-400/40">
                                        <FaEnvelope size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                                            asifforizy@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <span className="w-11 h-11 shrink-0 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-sky-400">
                                        <FaMapMarkerAlt size={16} />
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-500">Location</p>
                                        <p className="text-sm text-gray-200">
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="relative mt-10">
                            <p className="text-xs text-gray-500 mb-3">Find me on</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/your-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 transition-all duration-300 hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:-translate-y-0.5"
                                >
                                    <FaGithub size={16} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/your-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 transition-all duration-300 hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:-translate-y-0.5"
                                >
                                    <FaLinkedin size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div
                        className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8 lg:p-10
            "
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs text-gray-400 mb-2 tracking-wide">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="
                      w-full px-4 py-3
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      text-sm text-white
                      placeholder:text-gray-600
                      outline-none
                      transition-all duration-300
                      focus:border-sky-400/50
                      focus:bg-white/[0.06]
                    "
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs text-gray-400 mb-2 tracking-wide">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="
                      w-full px-4 py-3
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      text-sm text-white
                      placeholder:text-gray-600
                      outline-none
                      transition-all duration-300
                      focus:border-sky-400/50
                      focus:bg-white/[0.06]
                    "
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 mb-2 tracking-wide">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="
                    w-full px-4 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/[0.03]
                    text-sm text-white
                    placeholder:text-gray-600
                    outline-none
                    resize-none
                    transition-all duration-300
                    focus:border-sky-400/50
                    focus:bg-white/[0.06]
                  "
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2.5
                  px-8 py-3.5
                  rounded-xl
                  bg-white/10
                  border border-white/15
                  text-white
                  text-sm font-medium tracking-wide
                  transition-all duration-300
                  hover:bg-white/[0.16]
                  hover:border-white/25
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
                            >
                                {status === "idle" && (
                                    <>
                                        Send Message <FaPaperPlane size={13} />
                                    </>
                                )}
                                {status === "sending" && "Sending..."}
                                {status === "sent" && "Message Sent ✓"}
                                {status === "error" && "Failed — Try Again"}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;