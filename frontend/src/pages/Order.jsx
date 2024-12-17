import { useParams } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

const Order = () => {
  const { orders, currency } = useCartContext();
  const { orderId } = useParams();
  const order = orders.find((order) => order.id === orderId);
  console.log(order);
  const name = `${order.informations.firstname} ${order.informations.lastname}`;
  const address = `${order.informations.city} (${order.informations.country}) - ${order.informations.zipcode}`;
  const { street } = order.informations;

  return (
    <div className='grow'>
      <div>
        <h3>Indirizzo di spedizione:</h3>
        <p>{name}</p>
        <p>{street}</p>
        <p>{address}</p>
      </div>
      <div className='flex flex-col border-y divide-y'>
        {order.products.map((product) => (
          <div
            key={product.id}
            className='py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '
          >
            <div className=' flex items-start gap-6'>
              <img src={product.image} className='w-16 sm:w-20' alt='' />
              <div>
                <p className='text-xs sm:text-lg font-medium'>{product.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>
                    {product.price.toFixed(2)} {currency}
                  </p>
                  <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
                    {product.size}
                  </p>
                </div>
              </div>
            </div>

            <p>Quantità: {product.quantity}</p>
            <p className='font-medium'>
              Subtotal: {(product.price * product.quantity).toFixed(2)}{" "}
              {currency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
