import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import Title from "../components/Title";

const Orders = () => {
  const { orders, currency } = useCartContext();
  console.log(orders);

  return (
    <div className='grow border-t pt-16'>
      <div className='text-2xl'>
        <Title text1='my' text2='orders' />
      </div>
      <div className='border-y divide-y'>
        {orders.map((order) => (
          <div
            key={order.id}
            className='py-4  text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div>
              <h2>
                Ordine <span className='font-bold'>{order.id}</span> del{" "}
                {order.date}
              </h2>

              <p>
                Totale {order.total.toFixed(2)} {currency}
              </p>
            </div>
            <Link
              to={`/order/${order.id}`}
              className='bg-black text-white py-3 px-6'
            >
              Dettagli ordine
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
