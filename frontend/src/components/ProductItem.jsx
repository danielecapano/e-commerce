/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext";

const ProductItem = ({
  _id: id,
  images,
  name,
  brand,
  price,
  discount,
  promo,
}) => {
  const { currency, getPrice } = useShopContext();
  return (
    <Link
      to={`/product/${id}`}
      className='text-gray-700 cursor-pointer grid grid-rows-subgrid gap-0 row-span-4'
    >
      <div className='overflow-hidden relative '>
        <img
          src={images[0]}
          alt=''
          className='hover:scale-110 transition ease-in-out w-full'
        />
        <img
          src={images[1] || images[0]}
          alt=''
          className='absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition ease-in-out'
        />
        {promo && (
          <div className='absolute left-0 bottom-4 flex gap-2'>
            <span className='bg-red-500 text-white text-sm font-semibold py-1 px-2'>
              Promo
            </span>
            <span className='bg-green-500 text-white text-sm font-semibold py-1 px-2'>
              -{discount}%
            </span>
          </div>
        )}
      </div>
      <p className='pt-3  pb-1 text-sm font-medium'>{brand}</p>
      <p className='pb-1 text-sm truncate'>{name}</p>
      <div className='flex items-center gap-2'>
        <p className='text-sm font-semibold'>
          {getPrice(price, discount)} {currency}
        </p>
        {promo && (
          <p className='text-xs line-through text-gray-400'>
            {price.toFixed(2)} {currency}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
