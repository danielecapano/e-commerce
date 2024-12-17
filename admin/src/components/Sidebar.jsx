import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className='border-r'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink
          to='/add'
          className='flex items-center gap-3 border  border-r-0 px-3 py-2 rounded-l transition-all duration-500 hover:bg-gray-100'
        >
          <img src={assets.add_icon} className='size-5' alt='' />
          <p className='hidden md:block'>Add Products</p>
        </NavLink>
        <NavLink
          to='/list'
          className='flex items-center gap-3 border  border-r-0 px-3 py-2 rounded-l transition-all duration-500 hover:bg-gray-100'
        >
          <img src={assets.order_icon} className='size-5' alt='' />
          <p className='hidden md:block'>List Products</p>
        </NavLink>
        <NavLink
          to='/orders'
          className='flex items-center gap-3 border  border-r-0 px-3 py-2 rounded-l transition-all duration-500 hover:bg-gray-100'
        >
          <img src={assets.order_icon} className='size-5' alt='' />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
