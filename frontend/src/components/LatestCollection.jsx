import { useEffect, useState } from "react";

import Title from "./Title";
import ProductItem from "./ProductItem";

import { useProductContext } from "../hooks/useProductContext";

const LatestCollection = () => {
  const { products, isLoading, isError } = useProductContext();
  console.log(products);

  const [latestProducts, setLatestProducts] = useState([]);
  console.log(products, latestProducts);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  if (isLoading) return <div>Caricamento prodotti...</div>;
  if (isError) return <div>Errore nel caricamento dei prodotti.</div>;

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1='latest' text2='collection' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
