import { useParams } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext";
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../hooks/useCartContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useProductContext } from "../hooks/useProductContext";

const Product = () => {
  const { dispatch } = useCartContext();
  const { currency, getPrice } = useShopContext();
  const { products, getProductById } = useProductContext();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const {
    _id: id,
    name,
    brand,
    price,
    images,
    sizes,
    numberShoes,
    discount,
    promo,
  } = product;

  const [indexImage, setIndexImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const relatedProducts = products
    .filter(
      (relProduct) =>
        relProduct.category === product.category &&
        relProduct._id !== product._id &&
        relProduct.subCategory === product.subCategory
    )
    .slice(0, 5);

  const handleselectedSize = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
      return;
    }
    setSelectedSize(size);
  };
  const handleselectedNumber = (number) => {
    if (selectedNumber === number) {
      setSelectedNumber(null);
      return;
    }
    setSelectedNumber(number);
  };

  const handleAddToCart = () => {
    if (sizes.length > 0 && !selectedSize)
      return toast.error("Scegli una taglia");
    if (numberShoes.length > 0 && !selectedNumber)
      return toast.error("Scegli un numero");

    const cartItem = {
      id,
      image: images[0],
      name,
      quantity: 1,
      size: selectedSize || null,
      number: selectedNumber || null,
      discount,
      price: getPrice(price, discount),
    };

    dispatch({ type: "addProduct", payload: cartItem });
    return toast.success("Prodotto aggiunto al carrello");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res);
    };
    fetchProduct();
  }, [productId, getProductById]);

  if (!product) return <p>Caricamento prodotto</p>;

  return (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='grid  sm:grid-cols-2 gap-10'>
        {images && images.length > 0 ? (
          <div className='images-grid'>
            {images.map((image, index) => (
              <div className={`img-${index + 1}`} key={index}>
                <img
                  src={image}
                  alt=''
                  // className='w-full h-full object-cover'
                  onMouseOver={() => setIndexImage(index)}
                  className={`${index === indexImage ? "outline" : ""}`}
                />
              </div>
            ))}

            <div className='relative big'>
              <img src={images[indexImage]} alt='' className='big' />
              {promo && (
                <span className='absolute left-0 top-8 bg-red-500 text-white font-bold px-2 py-1'>
                  Promo
                </span>
              )}
            </div>
          </div>
        ) : (
          <p>Nessuna immagine disponibile per questo prodotto.</p>
        )}

        <div>
          <h2>{brand}</h2>
          <h2 className='font-medium text-2xl mt-2'>{name}</h2>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt='' />
            <img src={assets.star_icon} className='w-3 5' alt='' />
            <img src={assets.star_icon} className='w-3 5' alt='' />
            <img src={assets.star_icon} className='w-3 5' alt='' />
            <img src={assets.star_dull_icon} className='w-3 5' alt='' />
            <p className='pl-2'>(122)</p>
          </div>
          <h1 className='mt-5 text-3xl font-medium'>
            {getPrice(price, discount) || 0} {currency}
          </h1>
          {promo && (
            <div className='flex items=center gap-4'>
              <p className='py-1'>
                Prezzo ordinario:{" "}
                <span className='line-through'>
                  {price.toFixed(2)} {currency}
                </span>{" "}
              </p>{" "}
              <span className='bg-red-500 text-white font-medium py-1 px-2'>
                -{discount}%
              </span>
            </div>
          )}

          {sizes && sizes.length > 0 && (
            <div className='flex flex-col gap-4 my-8'>
              <p>Seleziona la taglia</p>
              <div className='flex gap-2'>
                {sizes.map((size) => (
                  <button
                    className={`border py-2 px-4 bg-gray-100 ${
                      selectedSize === size
                        ? "border-orange-500 bg-gray-200"
                        : ""
                    }`}
                    key={size}
                    onClick={() => handleselectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          {numberShoes && numberShoes.length > 0 && (
            <div className='flex flex-col gap-4 my-8'>
              <p>Seleziona il numero</p>
              <div className='flex gap-2'>
                {numberShoes.map((number) => (
                  <button
                    className={`border py-2 px-4 bg-gray-100 ${
                      selectedNumber === number
                        ? "border-orange-500 bg-gray-200"
                        : ""
                    } `}
                    key={number}
                    onClick={() => handleselectedNumber(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button
            className={`bg-black hover:bg-white text-white hover:text-black px-8 py-3 text-sm active:scale-[0.99] border border-black transition uppercase ${
              sizes &&
              sizes.length === 0 &&
              numberShoes &&
              numberShoes.length === 0
                ? "mt-28"
                : ""
            }`}
            onClick={handleAddToCart}
          >
            aggiungi al carrello
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Prodotto 100% Originale.</p>
            <p>Per questo articolo è possibile il pagamento alla consegna</p>
            <p>Reso senza costi aggiuntivi entro 14 giorni.</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex border border-b-0 divide-x w-fit'>
          <span className='inline-block font-bold px-5 py-3 text-sm'>
            Description
          </span>
          <span className='inline px-5 py-3 text-sm'>Reviews (122</span>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className='my-24'>
        <div className=' text-center text-3xl py-2'>
          <Title text1='prodotti' text2='correlati' />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {relatedProducts.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
