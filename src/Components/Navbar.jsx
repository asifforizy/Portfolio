import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { GrContact, GrHomeRounded } from 'react-icons/gr';
import { GoTools } from 'react-icons/go';
import { FaRegFolder } from 'react-icons/fa';
import { BsSuitcaseLg } from 'react-icons/bs';
import { GiBrain } from 'react-icons/gi';

const navItems = [
  { id: 'home', icon: <GrHomeRounded size={18} />, label: 'Home' },
  { id: 'about', icon: <GiBrain size={18} />, label: 'About' },
  { id: 'skills', icon: <GoTools size={18} />, label: 'Skills' },
  { id: 'projects', icon: <FaRegFolder size={18} />, label: 'Projects' },
  { id: 'experience', icon: <BsSuitcaseLg size={18} />, label: 'Experience' },
  { id: 'contact', icon: <GrContact size={18} />, label: 'Contact' },
];

const Navbar = () => {
  const [tooltip, setTooltip] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-center mt-4 px-4 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-32'
        }`}
    >
      <div
        className="flex items-center gap-2 px-4 py-1 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        <img
          src={logo}
          alt="logo"
          onClick={() => handleNavClick('home')}
          className="w-10 mr-2 cursor-pointer"
        />
        <div
          className="w-px h-5 mx-1"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        />

        {navItems.map(({ id, icon, label }) => {
          const isActive = activeSection === id;

          return (
            <div
              key={label}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setTooltip(label)}
              onMouseLeave={() => setTooltip(null)}
            >
              <button
                onClick={() => handleNavClick(id)}
                className={`p-2 rounded-xl transition-all duration-200 active:scale-95 ${isActive
                  ? 'text-white bg-white/20'
                  : 'text-white/70 hover:text-white hover:bg-white/15'
                  }`}
                aria-label={label}
              >
                {icon}
              </button>

              <div
                className="absolute -bottom-9 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none transition-all duration-150"
                style={{
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  opacity: tooltip === label ? 1 : 0,
                  transform: tooltip === label ? 'translateY(0px)' : 'translateY(-4px)',
                }}
              >
                {label}
                <span
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                  style={{ background: 'rgba(0,0,0,0.75)' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;