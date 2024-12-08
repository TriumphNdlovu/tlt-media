import { FaCameraRetro } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center space-y-6 text-yellow-500">
        {/* Pulsing Camera Icon with Glow Effect */}
        <div className="text-6xl animate-pulse text-yellow-400">
          <FaCameraRetro className="text-shadow-glow" />
        </div>
        {/* Loading Text with Smooth Fade In */}
        <div className="text-3xl font-semibold animate-fadeIn">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
