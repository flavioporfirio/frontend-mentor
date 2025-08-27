import DesertList from "./components/DesertList";
import Cart from "./components/Cart";

import { useState } from "react";

export default function App() {
  const [order, setOrder] = useState([]);

  function addItemToOrder(item) {
    if (order.some((orderItem) => orderItem.id === item.id)) return;

    setOrder([...order, item]);
  }

  function updateAmountDesert(id, amount) {
    setOrder((order) =>
      order.map((orderItem) =>
        orderItem.id === id ? { ...orderItem, amount } : orderItem
      )
    );
  }

  function removeOrderItem(id) {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  }

  return (
    <div className="grid grid-cols-[70%_30%] bg-orange-50 px-30">
      <DesertList
        order={order}
        addItemToOrder={addItemToOrder}
        updateAmountDesert={updateAmountDesert}
      />
      <Cart order={order} removeOrderItem={removeOrderItem} />
    </div>
  );
}
