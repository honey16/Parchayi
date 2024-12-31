import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Event', path: '/event' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="text-white bg-black sticky top-0 flex items-center justify-between px-10 py-4">
      <p className="text-xl font-bold">Logo</p>

      <div className="flex-1 flex justify-center space-x-16">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-gray-400 ${isActive ? 'text-yellow-600 font-bold' : 'text-white'}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
