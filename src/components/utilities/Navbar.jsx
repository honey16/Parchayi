import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const items = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Event', path: '/event' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <div className="text-white bg-black sticky top-0 flex items-center justify-between px-6 py-4">
        <p className="text-xl font-bold">Logo</p>

        <div className="hidden sm:flex flex-1 justify-center space-x-8">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-gray-400 ${isActive ? 'text-yellow-400 font-bold' : 'text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={items}
      />
    </>
  );
}

export default Navbar;
