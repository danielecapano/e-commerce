import { useEffect, useState } from "react";

import Title from "./Title";
import ProductItem from "./ProductItem";

import { useProductContext } from "../hooks/useProductContext";

const LatestCollection = () => {
  const { products, isLoading, isError } = useProductContext();

  const [latestProducts, setLatestProducts] = useState([]);

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
        <Title text1='ultimi' text2='arrivi' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Esplora le ultime tendenze della stagione: capi appena arrivati per
          aggiornare il tuo guardaroba con stile.
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
