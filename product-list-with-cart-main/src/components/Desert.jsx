import Cart from "../../assets/images/icon-add-to-cart.svg";

import { useState, useEffect } from "react";

export default function Desert({
  order,
  data,
  onAddItemToOrder,
  updateAmountDesert,
  removeOrderItem,
}) {
  const [selected, setSelected] = useState(false);
  const [amount, setAmount] = useState(1);

  console.log(order);
  order;

  useEffect(() => {
    const isInCart = order.find((item) => item.id === data.id);
    if (!isInCart) {
      setAmount(1);
      setSelected(false);
    }

    if (isInCart && amount === 0) {
      removeOrderItem(data.id);
    }
  }, [order, data, amount, removeOrderItem]);

  return (
    <div className="">
      <div className="relative w-60 h-60">
        <img className="rounded-2xl" src={data.image.desktop} alt={data.name} />
        <div
          onClick={() => {
            onAddItemToOrder({ ...data, amount });
            setSelected(true);
          }}
          className="relative flex items-center justify-center m-auto bg-white w-[70%] h-12 -top-6 border-1 border-red-600 rounded-3xl cursor-pointer"
        >
          {selected ? (
            <div className="flex items-center justify-between px-4 w-full h-12 bg-red-600 rounded-3xl">
              <button
                onClick={() => {
                  const newAmount = amount > 0 ? amount - 1 : amount;

                  setAmount(newAmount);

                  updateAmountDesert(data.id, newAmount);
                }}
                className="flex items-center justify-center w-6 h-6 border-2 rounded-full cursor-pointer border-white"
              >
                <span className="text-white text-4xl pb-2">-</span>
              </button>
              <p className="text-white">{amount}</p>
              <button
                onClick={() => {
                  const newAmount = amount + 1;

                  setAmount(newAmount);
                  updateAmountDesert(data.id, newAmount);
                }}
                className="flex items-center justify-center w-6 h-6 border-2 rounded-full cursor-pointer border-white"
              >
                <span className=" text-white text-2xl pb-1">+</span>
              </button>
            </div>
          ) : (
            <>
              <img className="w-7 h-7 pr-1" src={Cart} alt="" />
              <p className="font-medium">Add to cart</p>
            </>
          )}
        </div>
      </div>
      <div className="pt-10">
        <p className="text-red-500">{data.category}</p>
        <h3 className="text-lg font-medium ">{data.name}</h3>
        <p className="text-red-500 font-medium">${data.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
