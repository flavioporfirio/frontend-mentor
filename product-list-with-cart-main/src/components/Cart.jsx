import CartItem from "./CartItem";
import carbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";

export default function Cart({ order, removeOrderItem }) {
  const totalOrder = order.reduce(
    (acc, order) => acc + order.price * order.amount,
    0
  );
  const totalItems = order.reduce((acc, order) => acc + order.amount, 0);
  order;

  return (
    <div className="max-h-auto w-auto min-h-54 rounded-xl">
      <div className="bg-white p-8">
        <h2 className="font-bold text-2xl text-amber-700 py-4">
          Your Cart ({order ? totalItems : 0})
        </h2>
        {order.length ? (
          <>
            <div className="flex flex-col">
              {order.map((orderItem) => (
                <CartItem
                  item={orderItem}
                  removeOrderItem={removeOrderItem}
                  key={orderItem.id}
                />
              ))}

              <div className="flex justify-between py-4 ">
                <p>Order Total</p>
                <span className="text-2xl text-amber-900">${totalOrder}</span>
              </div>
              <div className="flex justify-center py-4 bg-amber-100 w-[90%] mx-auto text-center">
                <img src={carbonNeutral} alt="carbon neutral icon" />
                <p>
                  This is a <strong>carbon-neutral</strong> delivery
                </p>
              </div>
              <button className="text-white bg-amber-700 cursor-pointer rounded-3xl mx-auto w-full my-4 p-4">
                Confirm order
              </button>
            </div>
          </>
        ) : (
          <div>
            <img className="mx-auto my-4" src={emptyCartImg} alt="" />
            <p className="text-center">Your added items will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
       
 */
