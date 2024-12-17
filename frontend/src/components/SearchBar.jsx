import { assets } from "../assets/assets";
import { useShopContext } from "../hooks/useShopContext";

const SearchBar = () => {
  const { search, setSearch, isSearchOpen, setIsSearchOpen } = useShopContext();
  const handleClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearch("");
  };

  return (
    <div
      className={`border-t border-b bg-gray-50 text-center overflow-hidden transition-all ${
        isSearchOpen ? "max-h-96" : "max-h-0 border-t-0 border-b-0"
      }`}
    >
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type='text'
          placeholder='Search'
          className='flex-1 outline-none bg-inherit text-sm'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} className='w-4' alt='' />
      </div>
      <img
        src={assets.cross_icon}
        className='inline w-3 cursor-pointer'
        alt=''
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchBar;
