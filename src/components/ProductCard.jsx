const ProductCard = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <div className="border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h2 className="font-bold text-center">{product.title}</h2>
      <p className="text-gray-600 font-semibold">${product.price}</p>
      <p className="text-sm text-center">{product.description.slice(0, 60)}...</p>
      <button
        className={`mt-3 px-4 py-1 rounded ${isInCart ? 'bg-red-500' : 'bg-green-500'} text-white`}
        onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
