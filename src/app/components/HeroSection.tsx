import Image from 'next/image';

const HeroSection = () => (
  <div className="relative w-full h-screen overflow-hidden bg-black">
    <Image
      src="/JFN.jpeg" // Use your own high-quality black and white image
      alt="Photographer Hero"
      layout="fill"
      objectFit="cover"
      className="opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10">
      <div>
        <h1 className="text-6xl md:text-8xl font-sans uppercase tracking-wider leading-none">
          CAPTURE THE MOMENT.
        </h1>
        <p className="text-xl mt-4 mb-8">
          A timeless collection of photographs.
        </p>
        <a
          href="#portfolio"
          className="inline-block border-2 border-white py-2 px-10 uppercase text-white text-lg font-sans hover:bg-white hover:text-black transition-all duration-300"
        >
          VIEW PORTFOLIO.
        </a>
      </div>
    </div>
  </div>
);

export default HeroSection;
