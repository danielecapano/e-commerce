import { useEffect, useState } from "react";

import Title from "./Title";
import ProductItem from "./ProductItem";

import { useProductContext } from "../hooks/useProductContext";

const BestSellers = () => {
  const { products, isLoading, isError } = useProductContext();
  const [bestSellersProducts, setBestSellersProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setBestSellersProducts(
        products.filter((product) => product.promo).slice(0, 5)
      );
    }
  }, [products]);

  if (isLoading) return <div>Caricamento prodotti...</div>;
  if (isError) return <div>Errore nel caricamento dei prodotti.</div>;

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1='best' text2='sellers' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSellersProducts.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
