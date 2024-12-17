/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAdminContext } from "../hook/useAdminContext";

const ProductItem = ({
  _id: id,
  name,
  sector,
  category,
  price,
  discount,
  images,
}) => {
  const { getPrice, deleteProductById } = useAdminContext();
  return (
    <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1.5fr] items-center gap-2 py-1 px-2 border text-sm'>
      <img src={images[0]} alt='' className='w-12' />
      <Link to={`/product/${id}`}>
        <span>{name}</span>
      </Link>
      <span>{sector}</span>
      <span>{category}</span>
      <span>{getPrice(price, discount)} &euro;</span>
      <button onClick={() => deleteProductById(id)}>Elimina</button>
    </div>
  );
};

export default ProductItem;
