/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useShopContext } from "../hooks/useShopContext";
import { useProductContext } from "../hooks/useProductContext";

const Collection = () => {
  const { products, isLoading, isError } = useProductContext();
  const {
    isSearchOpen,
    search,

    categoriesList,
    sectorsList,
    getPrice,
  } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([...products]);
  const [sectors, setSectors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortType, setSortType] = useState("relevance");
  console.log(filterProducts);

  const toggleSectors = (e) => {
    if (sectors.includes(e.target.value)) {
      setSectors((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSectors((prev) => [...prev, e.target.value]);
    }
  };
  const toggleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const applyAllFilters = () => {
    let productsCopy = [...products]; // Usa l'array originale di prodotti

    // Applica i filtri
    if (sectors.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sectors.includes(item.sector)
      );
    }
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categories.includes(item.category)
      );
    }
    if (isSearchOpen && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Applica l'ordinamento
    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => {
          const priceA = getPrice(a.price, a.discount);
          const priceB = getPrice(b.price, b.discount);
          return priceA - priceB;
        });

        break;
      case "high-low":
        productsCopy.sort((a, b) => {
          const priceA = getPrice(a.price, a.discount);
          const priceB = getPrice(b.price, b.discount);
          return priceB - priceA;
        });
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      applyAllFilters();
    }
  }, [products, categories, sectors, sortType, search, isSearchOpen]);

  if (isLoading) return <div>Caricamento prodotti...</div>;
  if (isError) return <div>Errore nel caricamento dei prodotti.</div>;

  return (
    <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t grow'>
      <div className='min-w-60'>
        <h2
          className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase'
          onClick={() => setShowFilter(!showFilter)}
        >
          filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 md:hidden transition-all duration-500 ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=''
          />
        </h2>
        <div
          className={`my-6 overflow-hidden transition-all duration-500 md:max-h-[1000px] ${
            showFilter ? "max-h-[1000px]" : "max-h-0"
          } `}
        >
          <div className={`border border-gray-300 pl-5 py-3`}>
            <h3 className='mb-3 text-sm font-medium uppercase'>settori</h3>
            <ul className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              {sectorsList.map((sector, index) => (
                <li className='flex gap-2' key={index}>
                  <input
                    type='checkbox'
                    className='w-3'
                    value={sector}
                    id={sector}
                    onChange={toggleSectors}
                  />{" "}
                  <label htmlFor={sector}>{sector}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className={`border border-gray-300 pl-5 py-3 mt-5`}>
            <h3 className='mb-3 text-sm font-medium uppercase'>categorie</h3>
            <ul className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              {categoriesList.map((category, index) => (
                <li className='flex gap-2' key={index}>
                  <input
                    type='checkbox'
                    className='w-3'
                    value={category}
                    id={category}
                    onChange={toggleCategories}
                  />{" "}
                  <label htmlFor={category}>{category}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <div className='flex flex-col xs:flex-row justify-between text-2xl xs:text-lg sm:text-xl ml:text-2xl lg:text-3xl mb-4'>
          <Title text1='collezione' text2='completa' />
          {/* Product sort */}
          <select
            className='border-2 border-gray-300 text-sm px-2 py-2'
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value='relevance'>Ordina per: Rilevanza</option>
            <option value='low-high'>Ordina per: Prezzo crescente</option>
            <option value='high-low'>Ordina per: Prezzo decrescente</option>
          </select>
        </div>

        {/* Product grid */}
        <div className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2  ml:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {filterProducts.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
