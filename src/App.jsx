import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import { CartProvider, CartContext } from "./context/CartContext.jsx";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Products</Link>
      <Link to="/cart" className="font-bold text-lg">Cart ({cartItems.length})</Link>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
