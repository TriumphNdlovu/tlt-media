// pages/index.tsx
const PortfolioSection = () => (
  <section id="portfolio" className="bg-black text-white py-16 px-6">
    <h2 className="text-4xl md:text-6xl font-sans uppercase text-center tracking-widest mb-12">
      PORTFOLIO.
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="group relative">
        <img
          src="/JFN.jpeg" // Your black-and-white portfolio images
          alt="Portfolio Image 1"
          className="w-full h-96 object-cover group-hover:opacity-75 transition-opacity"
        />
      </div>
      {/* Repeat the above for more images */}
    </div>
  </section>
);

export default PortfolioSection;

