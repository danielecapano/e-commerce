import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useShopContext } from "../hooks/useShopContext";
import { useCartContext } from "../hooks/useCartContext";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setIsSearchOpen } = useShopContext();
  const { totalQuantity } = useCartContext();

  return (
    <div className='flex items-center justify-between py-5 font medium '>
      <Link to='/'>
        <img src={assets.logo} className='w-36 cursor pointer' alt='' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 uppercase'>
        <NavLink to='/' className='group flex flex-col items-center gap-1 '>
          <p>Home</p>
          <hr className='scale-x-0 group-hover:scale-x-100 w-1/2 border-none h-[1.5px] transition bg-gray-400' />
        </NavLink>
        <NavLink
          to='/collection'
          className='group flex flex-col items-center gap-1'
        >
          <p>Collection</p>
          <hr className='scale-x-0 group-hover:scale-x-100 w-1/2 border-none h-[1.5px] transition bg-gray-400' />
        </NavLink>
        <NavLink to='/about' className='group flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='scale-x-0 group-hover:scale-x-100 w-1/2 border-none h-[1.5px] transition bg-gray-400' />
        </NavLink>
        <NavLink
          to='contact'
          className='group flex flex-col items-center gap-1'
        >
          <p>Contact</p>
          <hr className='scale-x-0 group-hover:scale-x-100 w-1/2 border-none h-[1.5px] transition bg-gray-400' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <Link to='/collection' onClick={() => setIsSearchOpen(true)}>
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' />
        </Link>
        <div className='group relative'>
          <Link to='/login'>
            <img
              src={assets.profile_icon}
              className='w-5 cursor-pointer'
              alt=''
            />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 normal-casse'>
            <div className='flex-flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>Profilo</p>
              <p className='cursor-pointer hover:text-black'>I miei ordini</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          {totalQuantity > 0 && (
            <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
              {totalQuantity}
            </span>
          )}
        </Link>
        <img
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=''
          onClick={() => setIsVisible(true)}
        />
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={`absolute z-50 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            className='flex items-center gap-4 p-3 cursor-pointer'
            onClick={() => setIsVisible(false)}
          >
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='' />
            <p>Back</p>
          </div>
          <NavLink
            className='py-2 pl-6 border uppercase'
            to='/'
            onClick={() => setIsVisible(false)}
          >
            home
          </NavLink>
          <NavLink
            className='py-2 pl-6 border uppercase'
            to='/collection'
            onClick={() => setIsVisible(false)}
          >
            collection
          </NavLink>
          <NavLink
            className='py-2 pl-6 border uppercase'
            to='/about'
            onClick={() => setIsVisible(false)}
          >
            about
          </NavLink>
          <NavLink
            className='py-2 pl-6 border uppercase'
            to='/contact'
            onClick={() => setIsVisible(false)}
          >
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
