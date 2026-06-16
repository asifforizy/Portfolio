import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { GrContact, GrHomeRounded } from 'react-icons/gr';
import { GoTools } from 'react-icons/go';
import { FaRegFolder } from 'react-icons/fa';
import { BsSuitcaseLg } from 'react-icons/bs';

const navItems = [
  { icon: <GrHomeRounded size={18} />, label: 'Home' },
  { icon: <FaRegFolder size={18} />, label: 'Projects' },
  { icon: <GoTools size={18} />, label: 'Skills' },
  { icon: <BsSuitcaseLg size={18} />, label: 'Experience' },
  { icon: <GrContact size={18} />, label: 'Contact' },
];

const Navbar = () => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="flex justify-center mt-4 px-4">
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
        <img src={logo} alt="logo" className="w-10  mr-2" />

        <div
          className="w-px h-5 mx-1"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        />

        {navItems.map(({ icon, label }) => (
          <div
            key={label}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setTooltip(label)}
            onMouseLeave={() => setTooltip(null)}
          >
            <button
              className="p-2 rounded-xl transition-all duration-200 text-white/70 hover:text-white hover:bg-white/15 active:scale-95"
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
        ))}
      </div>
    </div>
  );
};

export default Navbar;