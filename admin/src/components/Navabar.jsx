import { assets } from "../assets/assets";
import { useAdminContext } from "../hook/useAdminContext";

const Navabar = () => {
  const { setToken } = useAdminContext();
  return (
    <div className='flex items-center  px-[4%] py-2 justify-between border-b col-span-2'>
      <img src={assets.logo} className='w-[max(10%,80px)]' alt='' />
      <button
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
        onClick={() => setToken(null)}
      >
        Logout
      </button>
    </div>
  );
};

export default Navabar;
