import { useCartContext } from "../hooks/useCartContext";
import { useShopContext } from "../hooks/useShopContext";

const CartTotal = () => {
  const { subtotal, total, shippingFee } = useCartContext();
  const { currency } = useShopContext();

  return (
    <div className='flex flex-col gap-2 mt-2 text-sm'>
      <div className='flex justify-between'>
        <p>Subtotale</p>
        <p>
          {subtotal.toFixed(2)} {currency}
        </p>
      </div>
      <hr />
      <div className='flex justify-between'>
        <p>Spese di spedizione</p>
        <p>
          {shippingFee.toFixed(2)} {currency}
        </p>
      </div>
      <hr />
      <div className='flex justify-between font-bold'>
        <p>Totale</p>
        <p>
          {total.toFixed(2)} {currency}
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
