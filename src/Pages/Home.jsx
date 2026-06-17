import React from 'react';

const Home = () => {
    const stats = [
        { value: "+2", label: "Years of\nExperience" },
        { value: "+20", label: "Projects\nCompleted" },
        { value: "+0", label: "Worldwide\nClients" },
    ];

    return (
        <div className="min-h-screen  flex items-center justify-center p-8 font-sans">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl w-full">

                <div className="flex-1 text-white">

                    <div className="mb-4">
                        <h1 className="font-black uppercase leading-none text-6xl lg:text-8xl tracking-tight ">
                            SOFTWARE
                        </h1>
                        <h2 className="font-black uppercase leading-none text-6xl lg:text-8xl tracking-tight ">
                            ENGINEER
                        </h2>
                    </div>

                    <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                        Passionate about creating intuitive and engaging user experiences.
                        Specialize in transforming ideas into beautifully crafted products.
                    </p>

                    <div className="flex gap-10 mb-10">
                        {stats.map(({ value, label }, index) => (
                            <div key={index}>
                                <p className="font-black text-white text-4xl">{value}</p>
                                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1 whitespace-pre-line">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;