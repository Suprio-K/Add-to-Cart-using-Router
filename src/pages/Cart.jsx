import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice, finalPrice } = useContext(CartContext);

  if(cartItems.length === 0) return <h2 className="text-center mt-10 text-xl font-bold">Your cart is empty</h2>;

  return (
    <div className="p-5">
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border p-4 rounded shadow">
          <img src={item.image} alt={item.title} className="h-20" />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{item.title}</h2>
            <p>${item.price}</p>
            <div className="flex items-center mt-2">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="bg-red-500 px-3 py-1 text-white rounded">Remove</button>
          <p className="ml-4 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="mt-5 text-right">
        <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
        <p className="text-xl font-bold">Final (10% off): ${finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
