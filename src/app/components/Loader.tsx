import { FaCameraRetro } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center space-y-6 text-yellow-500">
        {/* Pulsing Camera Icon with Glow Effect */}
        <div className="text-6xl animate-pulse text-yellow-400">
          {/* <FaCameraRetro className="text-shadow-glow" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21H3V3h12"
            />
          </svg>
        </div>
        {/* Loading Text with Smooth Fade In */}
        <div className="text-lg font-semibold animate-fadeIn">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
