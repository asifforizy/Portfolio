import React from "react";
import aboutImage from "../assets/2.png";

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-transparent text-white"
        >
            <div className="w-11/12 lg:w-9/12 mx-auto">

                {/* Section Header — centered */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-2xl mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span className="text-xs text-gray-300 tracking-wide">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                        The person behind{" "}
                        <span className="text-white/40">the code</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Photo Card */}
                    <div
                        className="
              relative
              lg:row-span-2
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              overflow-hidden
              min-h-[340px] lg:min-h-[480px]
            "
                    >
                        <div className="absolute inset-0 rounded-3xl bg-sky-400/10 blur-[100px]" />
                        <img
                            src={aboutImage}
                            alt="Saifur R. Asif"
                            className="relative w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-lg font-semibold">Saifur Rahaman Asif</p>
                            <p className="text-sm text-gray-300">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* Bio Card — wide */}
                    <div
                        className="
              lg:col-span-2
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8 lg:p-10
            "
                    >
                        <span className="w-10 h-px bg-gradient-to-r from-sky-400 to-transparent block mb-5" />

                        {/* Bio */}
                        <div className="space-y-4 text-gray-400 text-base leading-7">
                            <p>

                                I am a dedicated full-stack web developer with a strong focus on building scalable, maintainable, and user-friendly web applications.
                            </p>
                            <p>

                                I work primarily with modern web technologies and frameworks, ensuring performance-driven and responsive solutions from development to deployment.
                            </p>
                        </div>
                    </div>

                    {/* Stat Card 1 */}
                    <div
                        className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-7
              flex flex-col justify-center
            "
                    >
                        <span className="w-10 h-px bg-gradient-to-r from-sky-400 to-transparent block mb-5" />

                        <p className=" text-gray-400 mt-1">
                            I value clean code, debugging, and continuous improvement to deliver reliable software that meets both technical and business requirements.
                        </p>
                    </div>

                    {/* Stat Card 2 */}
                    <div
                        className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-7
              flex flex-col justify-center
            "
                    >
                        <span className="w-10 h-px bg-gradient-to-r from-sky-400 to-transparent block mb-5" />
                        <p className=" text-gray-400 mt-1">
                            I enjoy collaborating with teams, communicating ideas clearly, and translating complex problems into efficient technical solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;