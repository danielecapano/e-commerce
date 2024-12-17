import { useState } from "react";
import { assets } from "../assets/assets";
import ButtonLink from "../components/ButtonLink";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { getRandomCode } from "../Utility";
import { useCartContext } from "../hooks/useCartContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod");
  const [informations, setInformations] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    country: "",
    zipcode: "",
    state: "",
    phone: "",
  });

  console.log(informations);
  const { setOrders, subtotal, total, shippingFee, productsInCart, dispatch } =
    useCartContext();
  const newOrder = {
    id: getRandomCode(),
    informations,
    products: productsInCart,
    subtotal,
    shippingFee,
    total,
    method,
    date: new Date().toLocaleDateString(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders((prev) => [
      ...prev,
      {
        ...newOrder,
        informations: {
          ...informations,
          phone: Number(informations.phone),
        },
      },
    ]);
    dispatch({ type: "resetCart" });
    navigate("/orders");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformations((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1='delivery' text2='information' />
        </div>
        <div className='flex gap-3'>
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.firstname}
            onChange={handleChange}
            name='firstname'
            placeholder='First name'
            required
          />
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.lastname}
            onChange={handleChange}
            name='lastname'
            placeholder='Last name'
            required
          />
        </div>
        <input
          type='email'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          value={informations.email}
          onChange={handleChange}
          name='email'
          placeholder='Email address'
          required
        />
        <input
          type='text'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          value={informations.street}
          onChange={handleChange}
          name='street'
          placeholder='Street'
          required
        />
        <div className='flex gap-3'>
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.city}
            onChange={handleChange}
            name='city'
            placeholder='City'
            required
          />
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.country}
            onChange={handleChange}
            name='country'
            placeholder='Country'
            required
          />
        </div>
        <div className='flex gap-3'>
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.zipcode}
            onChange={handleChange}
            name='zipcode'
            placeholder='Zipcode'
            required
          />
          <input
            type='text'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            value={informations.state}
            onChange={handleChange}
            name='state'
            placeholder='State'
            required
          />
        </div>
        <input
          type='text'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          value={informations.phone}
          onChange={handleChange}
          name='phone'
          placeholder='Phone'
          required
        />
      </div>
      <div className='mt-8 w-full max-w-[550px]'>
        <div className='mt-8 min-w-80'>
          <div className='w-full'>
            <div className='text-2xl'>
              <Title text1='cart' text2='total' />
            </div>
            <CartTotal />
          </div>
        </div>
        <div className='mt-12'>
          <Title text1='payment' text2='method' />
          <div className='flex gap-3 flex-col lg:flex-row lg:justify-between'>
            <div
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              onClick={() => setMethod("stripe")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></span>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt='' />
            </div>
            <div
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              onClick={() => setMethod("razorpay")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></span>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt='' />
            </div>
            <div
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              onClick={() => setMethod("cod")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></span>
              <p className='text-gray-500 text-sm font-medium mx-4 uppercase'>
                cash on delivery
              </p>
            </div>
          </div>
          <ButtonLink>place order</ButtonLink>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
