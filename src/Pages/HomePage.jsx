import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';


const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;