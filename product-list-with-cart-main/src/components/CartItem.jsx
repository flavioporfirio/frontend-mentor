import RemoveIcon from "../../assets/images/icon-remove-item.svg";

export default function CartItem({ item, removeOrderItem }) {
  return (
    <div className="py-2">
      {item.amount === 0 || (
        <>
          <div className="flex items-center justify-between">
            <div className="flex flex-col py-4">
              <p>{item.name}</p>
              <p>
                {item.amount}x @ ${item.price} $
                {(item.price * item.amount).toFixed(2)}
              </p>
            </div>
            <div onClick={() => removeOrderItem(item.id)}>
              <img
                className="w-6 h-6 border-3 border-gray-400 rounded-full cursor-pointer"
                src={RemoveIcon}
                alt="remove icon"
              />
            </div>
          </div>

          <div className="my-1 h-0.25 bg-gray-300"></div>
        </>
      )}
    </div>
  );
}
