import CartItem from "./CartItem";

export default function Cart({ order, removeOrderItem }) {
  return (
    <div className="  ">
      <div className="bg-white rounded-xl p-6 min-h-44 max-h-auto">
        <h2 className="font-bold text-2xl text-amber-700">
          Your Cart ({order ? order.length : 0})
        </h2>
        <div className="flex flex-col">
          {order.map((orderItem) => (
            <CartItem
              item={orderItem}
              removeOrderItem={removeOrderItem}
              key={orderItem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
