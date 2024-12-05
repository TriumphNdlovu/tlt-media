import { FaCameraRetro } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-center flex flex-row text-2xl text-yellow-500">
        <div>
          <FaCameraRetro />
        </div>
        <div className="ml-2"> {/* Add some margin for spacing */}
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
