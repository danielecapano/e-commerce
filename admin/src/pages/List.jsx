/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAdminContext } from "../hook/useAdminContext";

import ProductItem from "../components/ProductItem";

const List = () => {
  const { getAllProducts } = useAdminContext();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.sort((a, b) => b.date - a.date));

    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
    // const fetchProducts = viewAllProducts();
    // setProducts(fetchProducts);
    // console.log(fetchProducts);
  }, [getAllProducts]);

  return (
    <>
      <p className='mb-2'>Tutti i prodotti ({products.length})</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1.5fr] items-center py-1 px-2 border bg-gray-100 text-sm font-bold'>
          <p></p>
          <p>Nome</p>
          <p>Settore</p>
          <p>Categoria</p>
          <p>Prezzo</p>
          <p>Azioni</p>
        </div>
        {products.map((product) => (
          <ProductItem key={product._id} {...product} />
        ))}
      </div>
    </>
  );
};

export default List;
