// src/components/shared/CategoryCard.jsx
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className={`group relative ${category.color} ${category.border} border p-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
    >
      <div className="text-gray-900">
        <span className="text-2xl mb-2 block">{category.icon}</span>
        <h3 className="font-medium mb-1 text-sm">{category.name}</h3>
        <p className="text-xs text-gray-600">{category.count}</p>
      </div>
      <img
        src={category.image}
        alt={category.name}
        className="w-20 h-20 object-contain absolute bottom-1 right-1 transform translate-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
      />
    </Link>
  );
};