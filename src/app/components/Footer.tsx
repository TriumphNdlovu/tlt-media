import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 text-white text-center bg-black">
      <div className="flex justify-center items-center space-x-6 mb-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white hover:text-yellow-400 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white hover:text-yellow-400 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-white hover:text-yellow-400 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2024 TLT Media. All rights reserved.</p>
    </footer>
  );
}
