'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all  ${
        isScrolled ? "bg-black text-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold uppercase tracking-wider logo">
          TLT_Media
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-bold">
          {["Home", "Portfolio", "About", "Contact"].map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link key={item} href={route}>
                <span
                  className={`nav-link ${
                    currentPath === route ? "text-yellow-500" : "text-white"
                  }`}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden mt-4 bg-gray-800 text-white text-center rounded-lg shadow-md"
        >
          {["Home", "Portfolio", "About", "Contact"].map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link key={item} href={route}>
                <button
                  className={`block w-full py-3 text-lg ${
                    currentPath === route ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu after selection
                >
                  {item}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;