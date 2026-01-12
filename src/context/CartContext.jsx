import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) removeFromCart(product.id);
    else setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => setCartItems(cartItems.filter(item => item.id !== id));

  const increaseQuantity = (id) => setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));

  const decreaseQuantity = (id) => setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
  ));

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = totalPrice * 0.9; 

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, finalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
