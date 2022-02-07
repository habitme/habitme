import React from "react";

const Navbar = () => {
  return (
    <nav className="h-20 w-full px-16 flex justify-between items-center bg-gray-100">
      <h3 className="text-3xl font-bold">
        Habiti<span className="highlight">fy</span>
      </h3>
      <nav id="menu" className="text-lg font-medium flex gap-6">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </nav>
  );
};

export default Navbar;
