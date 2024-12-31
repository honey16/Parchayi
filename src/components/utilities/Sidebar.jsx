import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen, onClose, items }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out sm:hidden`}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-white text-lg hover:text-yellow-400 ${
                isActive ? 'text-yellow-400 font-bold' : ''
              }`
            }
            onClick={onClose}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
