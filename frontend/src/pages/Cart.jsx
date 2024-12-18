import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useCartContext } from "../hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonLink from "../components/ButtonLink";

const Cart = () => {
  const { productsInCart, subtotal } = useCartContext();
  console.log(productsInCart);

  const navigate = useNavigate();

  const handleClick = () => {
    if (subtotal === 0) {
      toast.error("Il carrello è vuoto");
      return;
    }
    navigate("/place-order");
  };

  return (
    <div className='border-t pt-14 flex-grow'>
      <div className=' text-2xl mb-3'>
        <Title text1='il tuo' text2='carrello' />
      </div>
      {productsInCart.map((product, index) => (
        <CartItem key={index} {...product} />
      ))}

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <div className='w-full'>
            <div className='text-2xl'>
              <Title text1='totale' text2='carrello' />
            </div>
            <CartTotal />
          </div>
          <ButtonLink onClick={handleClick}>proceed to checkout</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
