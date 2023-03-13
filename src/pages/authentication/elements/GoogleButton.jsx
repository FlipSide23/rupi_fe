import { FaGoogle } from 'react-icons/fa';

const GoogleButton = () => {
  return (
    <div className="w-full flex items-center space-x-4 border rounded-md cursor-pointer px-4 py-3 justify-center">
      <div>
        <FaGoogle className='text-red-400' />
      </div>
      <span className="text-sm">Continue with Google</span>
    </div>
  );
};

export default GoogleButton;
