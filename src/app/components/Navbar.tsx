// components/Navbar.tsx
const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-White text-Black p-4 z-10">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#home" className="text-2xl font-sans uppercase tracking-widest hover:text-gray-300">
        HOME.
      </a>
      <div className="space-x-6">
        <a href="#portfolio" className="text-xl font-sans uppercase tracking-widest hover:text-gray-300">
          PORTFOLIO.
        </a>
        <a href="#contact" className="text-xl font-sans uppercase tracking-widest hover:text-gray-300">
          BOOK.
        </a>
        <a href="#contact" className="text-xl font-sans uppercase tracking-widest hover:text-gray-300">
          CONTACT.
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
