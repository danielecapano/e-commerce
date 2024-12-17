import { useState } from "react";
import { assets } from "../assets/assets";
import { useAdminContext } from "../hook/useAdminContext";
import SizesCheckboxes from "../components/SizesCheckboxes";
import NumberShoesCheckboxes from "../components/NumberShoesCheckboxes";

const Add = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const images = [image1, image2, image3, image4].filter(
    (image) => image !== null
  );
  console.log(image1);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  console.log(category);
  const [sector, setSector] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const [promo, setPromo] = useState(false);

  const {
    currency,
    addProduct,
    setCheckboxes,
    sizes,
    setSizes,
    numberShoes,
    setNumberShoes,
    setShoesCheckboxes,
    error,
    setError,
    initialStateError,
  } = useAdminContext();

  console.log(numberShoes);

  // const toggleSizes = (e) => {
  //   const { value, checked } = e.target;

  //   setSizes((prev) => {
  //     if (checked) {
  //       return [...prev, value];
  //     } else {
  //       return prev.filter((item) => item !== value);
  //     }
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(initialStateError);
    if (images.length === 0) {
      setError((prev) => ({ ...prev, images: "Inserisci almeno un'immagine" }));
      return;
    }
    if (name === "") {
      setError((prev) => ({ ...prev, name: "Inserisci il nome del prodotto" }));
      return;
    }
    if (brand === "") {
      setError((prev) => ({
        ...prev,
        brand: "Inserisci la marca",
      }));
      return;
    }
    if (sector === "") {
      setError((prev) => ({ ...prev, sector: "Inserisci un settore" }));
      return;
    }
    if (category === "") {
      setError((prev) => ({
        ...prev,
        category: "Inserisci una categoria",
      }));
      return;
    }
    if (price <= 0 || price === "") {
      setError((prev) => ({
        ...prev,
        price: "Inserisci un prezzo maggiore di 0",
      }));
      return;
    }
    if (
      category !== "Scarpe" &&
      category !== "Accessori" &&
      sizes.length === 0
    ) {
      setError((prev) => ({ ...prev, sizes: "Inserisci almeno una taglia" }));
      return;
    }
    if (category === "Scarpe" && numberShoes.length === 0) {
      setError((prev) => ({
        ...prev,
        numberShoes: "Inserisci almeno un numero",
      }));
      return;
    }
    if (promo && discount <= 0) {
      setError((prev) => ({
        ...prev,
        discount: "Inserisci uno sconto maggiore di 0",
      }));
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("sector", sector);
    formData.append("price", price);
    formData.append("promo", promo);
    sizes && formData.append("sizes", JSON.stringify(sizes));
    numberShoes && formData.append("numberShoes", JSON.stringify(numberShoes));
    formData.append("discount", discount === "" ? 0 : discount);
    image1 && formData.append("image1", image1);
    image2 && formData.append("image2", image2);
    image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);

    await addProduct(formData);

    setError(initialStateError);
    setName("");
    setBrand("");
    setCategory("");
    setSector("");
    setPrice("");
    setSizes([]);
    setNumberShoes([]);
    setPromo(false);
    setDiscount("");
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setCheckboxes({
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    });
    setShoesCheckboxes({
      30: false,
      31: false,
      32: false,
      33: false,
      34: false,
      35: false,
      36: false,
      37: false,
      38: false,
      39: false,
      40: false,
      41: false,
      42: false,
      43: false,
      44: false,
    });
  };

  return (
    <form
      className='flex flex-col w-full items-start gap-3'
      onSubmit={handleSubmit}
    >
      <div>
        <p className='mb-2'>Carica immagini</p>
      </div>
      <div className='grid grid-cols-4 gap-3 max-w-[500px]'>
        <label htmlFor='image1'>
          <figure className='aspect-square'>
            <img
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              className='w-full h-full object-cover'
              alt=''
            />
          </figure>
          <input
            type='file'
            id='image1'
            hidden
            onChange={(e) => setImage1(e.target.files[0])}
          />
        </label>

        <label htmlFor='image2'>
          <figure className='aspect-square'>
            <img
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              className='w-full h-full object-cover'
              alt=''
            />
          </figure>
          <input
            type='file'
            id='image2'
            hidden
            onChange={(e) => setImage2(e.target.files[0])}
          />
        </label>

        <label htmlFor='image3'>
          <figure className='aspect-square'>
            <img
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              className='w-full h-full object-cover'
              alt=''
            />
          </figure>
          <input
            type='file'
            id='image3'
            hidden
            onChange={(e) => setImage3(e.target.files[0])}
          />
        </label>
        <label htmlFor='image4'>
          <figure className='aspect-square'>
            <img
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              className='w-full h-full object-cover'
              alt=''
            />
          </figure>
          <input
            type='file'
            id='image4'
            hidden
            onChange={(e) => setImage4(e.target.files[0])}
          />
        </label>
      </div>
      {error.images && <p className='text-red-500 text-sm'>{error.images}</p>}
      <div className='w-full'>
        <p className='mb-2'>Nome</p>
        <input
          type='text'
          placeholder='Scrivi qui il nome del prodotto'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full max-w-[500px] px-3 py-2 ${
            error.name ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
          }`}
        />
        {error.name && (
          <p className='text-red-500 text-sm mt-1'>{error.name}</p>
        )}
      </div>
      <div className='w-full'>
        <p className='mb-2'>Marca</p>
        <input
          type='text'
          placeholder='Scrivi qui la marca del prodotto'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className={`w-full max-w-[500px] px-3 py-2 ${
            error.brand ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
          }`}
        />
        {error.brand && (
          <p className='text-red-500 text-sm mt-1'>{error.brand}</p>
        )}
      </div>

      <div>
        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div>
            <p className='mb-2'>Settore</p>
            <select
              className={`w-full px-3 py-2 ${
                error.sector ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
              }`}
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value=''></option>
              <option value='Uomo'>Uomo</option>
              <option value='Donna'>Donna</option>
              <option value='Bambino'>Bambino</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Categoria</p>
            <select
              className={`w-full px-3 py-2 ${
                error.category
                  ? "ring-2 ring-red-500 outline-none bg-red-50"
                  : ""
              }`}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=''></option>
              <option value='T-shirt'>T-shirt</option>
              <option value='Felpe'>Felpe</option>
              <option value='Giacche'>Giacche</option>
              <option value='Cappotti'>Cappotti</option>
              <option value='Pantaloni'>Pantaloni</option>
              <option value='Jeans'>Jeans</option>
              <option value='Maglioni'>Maglioni</option>
              <option value='Camicie'>Camicie</option>
              <option value='Gonne'>Gonne</option>
              <option value='Vestiti'>Vestiti</option>
              <option value='Scarpe'>Scarpe</option>
              <option value='Accessori'>Accessori</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Prezzo</p>
            <div className='relative'>
              <input
                type='number'
                placeholder='19,99'
                className={`w-full px-3 py-2 sm:w-[120px] ${
                  error.price
                    ? "ring-2 ring-red-500 outline-none bg-red-50"
                    : ""
                }`}
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
              <span className='absolute right-2 top-1/2 -translate-y-1/2 text-black/40'>
                {currency}
              </span>
            </div>
          </div>
        </div>
        {error.sector && <p className='text-red-500 text-sm'>{error.sector}</p>}
        {error.category && (
          <p className='text-red-500 text-sm'>{error.category}</p>
        )}
        {error.price && <p className='text-red-500 text-sm'>{error.price}</p>}
      </div>
      {category !== "Scarpe" && category !== "Accessori" && category !== "" ? (
        <SizesCheckboxes />
      ) : null}
      {category === "Scarpe" && <NumberShoesCheckboxes />}

      {/* <div>
        <p className='mb-2'>Taglie</p>
        <div
          className={`flex gap-3 ${
            error.sizes ? "ring-2 ring-red-500 outline-none bg-red-50" : ""
          }`}
        >
          {Object.keys(checkboxes).map((size) => (
            <label
              key={size}
              className={`bg-gray-200 border px-3 py-1 cursor-pointer ${
                checkboxes[size] ? "border-orange-500 bg-gray-300" : ""
              }`}
              htmlFor={size}
            >
              <input
                type='checkbox'
                name={size}
                id={size}
                checked={checkboxes[size]}
                onChange={handleCheckboxChange}
                hidden
                className='peer'
              />
              {size}
            </label>
          ))}
        </div>
        {error.sizes && <p className='text-red-500 text-sm'>{error.sizes}</p>}
      </div> */}
      <div className='flex items-center gap-8'>
        <div className='flex gap-2 mt-7'>
          <input
            type='checkbox'
            id='promo'
            name='promo'
            checked={promo}
            onChange={() => setPromo(!promo)}
          />
          <label htmlFor='promo' className='cursor-pointer'>
            In promozione
          </label>
        </div>
        {promo && (
          <div>
            <p className='mb-2'>Sconto</p>
            <div className='relative'>
              <input
                type='number'
                placeholder='30'
                className={`w-full px-3 py-2 sm:w-[120px] ${
                  error.discount
                    ? "ring-2 ring-red-500 outline-none bg-red-50"
                    : ""
                }`}
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value))}
              />
              <span className='absolute right-2 top-1/2 -translate-y-1/2 text-black/40'>
                %
              </span>
            </div>
          </div>
        )}
      </div>
      {error.discount && (
        <p className='text-red-500 text-sm'>{error.discount}</p>
      )}
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>
        ADD
      </button>
    </form>
  );
};

export default Add;
