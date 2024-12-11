'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Track scroll position for sticky effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname.replace(/\/$/, "")); // Normalize trailing slashes
    }
  }, []);

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Portfolio", route: "/portfolio" },
    { label: "About", route: "/about" },
    { label: "Book", route: "/book" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 bg-black text-white shadow-lg`}
      role="navigation"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold uppercase tracking-wider flex items-center">
          <Image src="/logo.png" alt="TLT Media logo" width={50} height={50} className="rounded" />
          <span className="ml-2 hidden lg:block">TLTMedia.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-bold">
          {menuItems.map(({ label, route }) => (
            <Link key={label} href={route}>
              <span
                className={`nav-link transition-all duration-200 ${
                  currentPath === route ? "text-yellow-500" : "text-white"
                } hover:text-yellow-400`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden mt-4 bg-black border border-white text-white text-center rounded-lg shadow-md"
        >
          {menuItems.map(({ label, route }) => (
            <Link key={label} href={route}>
              <button
                className={`block w-full py-3 text-lg transition-all duration-200 ${
                  currentPath === route ? "underline text-yellow-400" : "hover:underline"
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
