// pages/index.tsx
import Navbar from "./components/Navbar";

const HomePage = () => (
  <div className="bg-white text-black min-h-screen">
    <Navbar />
    <section className="relative flex flex-col justify-center items-center text-center py-32 px-6">
      <div className="absolute inset-0">
        <img
          src="/JFN.jpeg" 
          alt="Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-sans uppercase tracking-widest leading-tight">
          CAPTURE LIFE IN BLACK & WHITE.
        </h1>
        <p className="text-xl mt-6 mb-10 font-sans">
          Photography that tells a story. Simple. Bold. Timeless.
        </p>
        <a href="/portfolio" className="text-lg uppercase border-b-2 border-white hover:text-gray-300">
          VIEW WORK.
        </a>
      </div>
    </section>
  </div>
);

export default HomePage;
