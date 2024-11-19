// src/components/shared/ProductCard.jsx
import { Button } from "../ui/Button"; // Ensure Button is imported
import { Card } from "../ui/Card"; // Import the Card component

export const ProductCard = ({ product }) => {
  return (
    <Card className="p-4 shadow-lg rounded-lg border">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.weight}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-bold text-gray-900">{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
          )}
        </div>
        <Button variant="primary" className="w-full mt-4">
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
