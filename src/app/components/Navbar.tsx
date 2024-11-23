'use client';
import Link from "next/link";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  // useState should be inside the component
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold uppercase tracking-wider text-white">TLT Media</div>
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Nav Links for Desktop */}
        <div className="hidden lg:flex space-x-6">
          <button className="text-white hover:underline">
            <Link href="/">Home</Link>
          </button>
          <button className="text-white hover:underline">
            <Link href="/portfolio">Portfolio</Link>
          </button>
          <button className="text-white hover:underline">
            <Link href="/about">About</Link>
          </button>
          <button className="text-white hover:underline">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-center">
          <button className="text-white py-2">
            <Link href="/">Home</Link>
          </button>
          <button className="text-white py-2">
            <Link href="/portfolio">Portfolio</Link>
          </button>
          <button className="text-white py-2">
            <Link href="/about">About</Link>
          </button>
          <button className="text-white py-2">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

