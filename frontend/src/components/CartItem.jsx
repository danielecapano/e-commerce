/* eslint-disable react/prop-types */

import { assets } from "../assets/assets";
import { useCartContext } from "../hooks/useCartContext";

const CartItem = ({ id, image, name, price, size, number, quantity }) => {
  const { dispatch } = useCartContext();

  const addQuantity = (id, size, number) => {
    dispatch({ type: "addQuantity", payload: { id, size, number } });
  };
  const removeQuantity = (id, size, number) => {
    dispatch({ type: "removeQuantity", payload: { id, size, number } });
  };
  const removeArticle = (id, size, number) => {
    dispatch({ type: "removeProduct", payload: { id, size, number } });
  };

  return (
    <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
      <div className=' flex items-start gap-6'>
        <img src={image} className='w-16 sm:w-20' alt='' />
        <div>
          <p className='text-xs sm:text-lg font-medium'>{name}</p>
          <div className='flex items-center gap-5 mt-2'>
            <p>{price}</p>
            {size && (
              <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{size}</p>
            )}
            {number && (
              <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
                {number}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <button
          className='bg-black text-white size-8'
          onClick={() => removeQuantity(id, size, number)}
        >
          -
        </button>
        <input
          type='number'
          className='border max-w-10 sm:max-w-10 px-1 sm:px-2 py-1 text-center'
          value={quantity}
          readOnly
        />
        <button
          className='bg-black text-white size-8'
          onClick={() => addQuantity(id, size, number)}
        >
          +
        </button>
      </div>
      <img
        src={assets.bin_icon}
        className='w-4 mr-4 sm:w-5 cursor-pointer'
        alt=''
        onClick={() => removeArticle(id, size, number)}
      />
    </div>
  );
};

export default CartItem;
