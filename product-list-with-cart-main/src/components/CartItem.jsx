import RemoveIcon from "../../assets/images/icon-remove-item.svg";

export default function CartItem({ item, removeOrderItem }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col py-4">
        <p>{item.name}</p>
        <p>
          {item.amount}x @ ${item.price} $
          {(item.price * item.amount).toFixed(2)}
        </p>
      </div>
      <div onClick={() => removeOrderItem(item.id)}>
        <img
          className="w-6 h-6 border-3 border-gray-400 rounded-full"
          src={RemoveIcon}
          alt="remove icon"
        />
      </div>
    </div>
  );
}
