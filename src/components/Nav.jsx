import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-700">CodeCollab</h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
