import { useApp } from '../context/AppContext';
import { Plus, Minus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, updateQuantity, cart } = useApp();
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrease = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          ₹{product.price}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{product.category}</span>
          
          {quantity === 0 ? (
            <button
              onClick={handleIncrease}
              className="flex items-center px-3 py-1.5 rounded bg-green-500 text-white hover:bg-green-600"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center rounded bg-green-100 text-green-600 hover:bg-green-200"
                disabled={quantity <= 0}
              >
                <Minus className="h-4 w-4" />
              </button>
              
              <span className="w-8 text-center font-medium">
                {quantity}
              </span>
              
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center rounded bg-green-100 text-green-600 hover:bg-green-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}